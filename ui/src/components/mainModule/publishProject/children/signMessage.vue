<template>
    <div class="signMessage">
        <div class="coverImg">
            <h4>项目封面图</h4>
            <el-row>
                <el-col :xs="24" :sm="16" :md="14" :lg="10" :xl="8">
                    <el-upload
                        class="upload-demo"
                        action=""
                        :on-change="addFile"
                        :auto-upload=false
                        :multiple=false
                        :show-file-list=false
                        drag>
                        <img v-if="imageUrl" :src="imageUrl" class="cover">
                        <div v-else>
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                        </div>
                    </el-upload>
                </el-col>
                <el-col :xs="24" :span="9">
                    <p>尺寸 800px*600px，格式jpg、png、gif，不大于3MB</p>
                </el-col>
            </el-row>
            <div class="small-font tips">图片应简洁清晰展示主题，图中除 Logo 外的其他介绍文字禁止出现。</div>
        </div>
        <div class="title">
            <h4>项目标题</h4>
            <div class="input">
                <el-input type="text" maxlength="26" v-model="title" placeholder="请输入项目标题，最多26个字"></el-input>
                <span class="num-limit">{{ title.length }}/26</span>
            </div>
            <div class="small-font tips">标题中需带有产品名称及类别，可添加宣传语作为副标题。</div>
        </div>
        <div class="short-title">
            <h4>项目短标题</h4>
            <div class="input">
                <el-input type="text" maxlength="10" v-model="shortTitle" placeholder="请输入项目短标题，最多10个字"></el-input>
                <span class="num-limit">{{ shortTitle.length }}/10</span>
            </div>
            <div class="small-font tips">用于首页推荐、榜单、短信通知等</div>
        </div>
        <div class="intro">
            <h4>项目简介</h4>
            <div class="textarea">
                <el-input type="textarea" v-model="intro" :maxlength="120" :rows="5" resize="none" placeholder="请填写项目简介，最多120个字"></el-input>
                <span class="num-limit">{{ intro.length }}/120</span>
            </div>
            <div class="small-font tips">简介需清晰准确地阐述项目核心内容，会随项目被分享到社交平台。</div>
        </div>
        <div class="class">
            <h4>项目类别</h4>
            <el-autocomplete
                popper-class="my-autocomplete"
                v-model="category"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect">
                <i
                    class="el-icon-edit el-input__icon"
                    slot="suffix">
                </i>
                <template slot-scope="{ item }">
                    <el-tag
                        :type="getColorType(4)">
                        {{ item }}
                    </el-tag>
                </template>
            </el-autocomplete>
        </div>
        <div class="address">
            <h4>发起城市</h4>
            <el-row>
                <el-col :xs="10" :sm="8" :span="6">
                    <el-dropdown split-button @command="getProvince">
                        {{ province }}
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,i) in provinces" :key="i" :command="item">{{ item }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
                <el-col :xs="11"  :span="6" :offset="1">
                    <el-dropdown split-button  @command="getCity">
                        {{ city }}
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,i) in cities" :key="i" :command="item">{{ item }}</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </div>
        <div class="interval">
            <h4>众筹时长</h4>
            <div class="block">
                <span class="demonstration">时间段：</span>
                <el-date-picker
                v-model="interval"
                @change="getInterval"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </div>
            <div class="small-font tips">众筹时间不超过60天，建议众筹周期30-45天</div>
        </div>
        <div class="targetMoney">
            <h4>目标金额</h4>
            <div>
                <el-input v-model="money" placeholder="2元起，项目通过审核后将不能修改，谨慎填写"></el-input>
            </div>
            <div class="small-font tips">制定金额目标，众筹结束后，如达到或超出将由摩点网在扣除相应费率后结算给你，如未达到将全额退款给支持者。</div>
        </div>
         <div class="nextStep">
             <el-alert
                title="请再次核查项目信息，确认后进行下一步"
                type="warning"
                show-icon>
            </el-alert>
            <el-button class="preBtn" @click="nextStep(-1)">上一步</el-button>
            <el-button class="nextBtn" type="danger" @click="nextStep(1)">下一步</el-button>
         </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            imageUrl: sessionStorage.getItem('imageUrl') || '',
            title:sessionStorage.getItem('title') || '',
            shortTitle:sessionStorage.getItem('shortTitle') || '',
            intro:sessionStorage.getItem('intro') || '',
            category:sessionStorage.getItem('category') || '',
            categorys: ['游戏','动漫','出版','影视','音乐','活动','设计','科技','食品','其他','爱心通道','个人愿望','粉丝应援'],
            colorType:['','success','info','warning','danger'],
            provinces:['北京市','天津市','上海市','重庆市','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省','四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省','内蒙古自治区','广西壮族自治区','西藏自治区','宁夏回族自治区','新疆维吾尔自治区','香港特别行政区','澳门特别行政区'],
            province:sessionStorage.getItem('province') || '省份或市',
            cities:[],
            city:sessionStorage.getItem('city') || '城市',
            interval:[new Date(parseInt(sessionStorage.interval_0)),new Date(parseInt(sessionStorage.interval_1))],
            money:sessionStorage.money || '',
        };
    },
    methods: {
        nextStep(data){
            if(data === 1){
                if(this.imageUrl && this.title && this.shortTitle && this.intro 
                && this.category && this.province && this.city 
                && this.money){
                    if(this.categorys.indexOf(this.category) == -1){
                        this.$message.error('请选择有效分类')
                        return false
                    }else if(isNaN(this.interval[0] - this.interval[1])){
                        this.$message({
                            type:'warning',
                            message:'请正确选择众筹时长'
                        })
                        return
                    }else if(this.interval[0] - this.interval[1] == 0){
                        this.$message({
                            type:'warning',
                            message:'众筹时长不能没有间隔'
                        })
                        return
                    }
                    else if(Math.floor((this.interval[1] - this.interval[0])/86400000) > 60){
                        this.$message.error('众筹时长不能超过60天')
                        return false
                    }else if(isNaN(Number(this.money)) || Number(this.money) <= 0){
                        this.$message({
                            type:'warning',
                            message:'目标金额只能填入正数'
                        })
                        return
                    }
                }else{
                    this.$message({
                        type:'warning',
                        message:'所有内容都需填写完整,方能进行下一步'
                    })
                    return
                }
            }
            this.saveData()
            this.$emit('nextStep',data)
        },
        addFile(file) {
            console.log(file)
            const isLt3M = file.size / 1024 / 1024 < 3

            if(['image/png', 'image/gif', 'image/jpg','image/jpeg'].indexOf(file.raw.type) == -1){
                this.$message.error('只能上传图片')
                return false
            }
            if(!isLt3M){
                this.$message.error('上传图片大小不能超过3MB！')
                return false
            }
            this.imageUrl = file.url
        },
        saveData(){
            sessionStorage.setItem('imageUrl',this.imageUrl)
            sessionStorage.setItem('title',this.title)
            sessionStorage.setItem('shortTitle',this.shortTitle)
            sessionStorage.setItem('intro',this.intro)
            sessionStorage.setItem('category',this.category)
            sessionStorage.setItem('province',this.province)
            sessionStorage.setItem('city',this.city)
            this.saveInterval(this.interval)
            sessionStorage.money = this.money
        },
        querySearch(queryString, cb) {
            // 调用 callback 返回建议列表的数据
            cb(this.categorys);
        },
        createFilter(queryString) {
            return (categorys) => {
                return (categorys.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            }
        },
        getColorType(n){
            return this.colorType[parseInt(Math.random()*n)]
        },
        handleSelect(item) {
            this.category = item
        },
        getProvince(command){
            this.province = command
            this.$axios.post('/getCity',{
                province:command
            }).then(res => {
                this.cities = res.data
            }).catch(err => {
                this.$message.error('获取城市失败')
            })
        },
        getCity(command){
            this.city = command
        },
        getInterval(val){
            this.interval = val
        },
        saveInterval(arr){
            let one = JSON.stringify(arr[0].getTime())
            let sec = JSON.stringify(arr[1].getTime())
            sessionStorage.setItem('interval_0',one)
            sessionStorage.setItem('interval_1',sec)
        },
    }
}
</script>
<style lang="scss" scoped>
.signMessage{
    margin: 50px 10px;
    position: relative;
    h4{
        color:black;
    }
    .small-font{
        font-size: 14px;
    }
    .tips{
        margin:10px 0;
        padding: 10px 5px;
    }
    .input{
        position:relative;
        .num-limit{
            position: absolute;
            right:5px;
            top: 10px;
        }
    }
    .textarea{
        position:relative;
        .num-limit{
            position: absolute;
            right:5px;
            top: 90px;
        }
    }
    .cover{
        width: 100%;
    }
    /deep/ .el-upload-dragger{
        width: 280px;
        height: 210px;
    }
    .class{
        .el-autocomplete{
            width: 100%;
        }
    }
    .nextStep{
        margin-top: 20px;
        // position:absolute;
        // bottom:0;
        // left:0;
        .el-button{
            position: absolute;
            margin-top: 20px;
        }
        .nextBtn{
            right:0;
        }
    }
    @media screen and (max-width: 800px) {
        .el-range-editor.el-input__inner{
            width:100%;
        }
    }
}
</style>
