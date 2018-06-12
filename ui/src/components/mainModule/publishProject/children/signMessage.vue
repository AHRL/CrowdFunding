<template>
    <div class="signMessage">
        <div class="coverImg">
            <h4>项目封面图</h4>
            <el-row>
                <el-col :span="14">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-col>
                <el-col :span="9">
                    <p>尺寸 800px*600px，格式jpg、png、gif，不大于3MB</p>
                </el-col>
            </el-row>
            <div class="small-font tips">图片应简洁清晰展示主题，图中除 Logo 外的其他介绍文字禁止出现。</div>
        </div>
        <div class="title">
            <h4>项目标题</h4>
            <div class="input">
                <el-input type="text" v-model="title" placeholder="请输入项目标题，最多26个字"></el-input>
                <span class="num-limit">{{ title.length }}/26</span>
            </div>
            <div class="small-font tips">标题中需带有产品名称及类别，可添加宣传语作为副标题。</div>
        </div>
        <div class="short-title">
            <h4>项目短标题</h4>
            <div class="input">
                <el-input type="text" v-model="shortTitle" placeholder="请输入项目短标题，最多10个字"></el-input>
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
                v-model="state3"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect">
                <i
                    class="el-icon-edit el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
                <template slot-scope="{ item }">
                    <div class="name">{{ item.value }}</div>
                    <span class="addr">{{ item.address }}</span>
                </template>
            </el-autocomplete>
        </div>
        <div class="address">
            <h4>发起城市</h4>
            <el-row>
                <el-col :span="11">
                    <el-input
                        placeholder="请输入省/直辖市"
                        suffix-icon="el-icon-location"
                        v-model="province">
                    </el-input>
                </el-col>
                <el-col :span="11" :offset="2">
                    <el-input
                        placeholder="请输入市/区"
                        suffix-icon="el-icon-location-outline"
                        v-model="city">
                    </el-input>
                </el-col>
            </el-row>
        </div>
        <div class="interval">
            <h4>众筹时长</h4>
            <div class="block">
                <span class="demonstration">时间段：</span>
                <el-date-picker
                v-model="value4"
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
         <div class="next">
             <el-alert
                title="请再次核查项目信息，确认后进行下一步"
                type="warning"
                show-icon>
            </el-alert>
            <el-button class="preBtn">上一步</el-button>
            <el-button class="nextBtn" type="danger">下一步</el-button>
         </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        imageUrl: '',
        title:'',
        shortTitle:'',
        intro:'',
        restaurants:[],
        state3:'',
        value4: [new Date(), new Date()]
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
       querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
       loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" }
        ]
       },
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
}
</script>
<style lang="scss" scoped>
.signMessage{
    margin: 50px 0;
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
    .class{
        .el-autocomplete{
            width: 100%;
        }
        .my-autocomplete {
            li {
                line-height: normal;
                padding: 7px;

                .name {
                text-overflow: ellipsis;
                overflow: hidden;
                }
                .addr {
                font-size: 12px;
                color: #b4b4b4;
                }

                .highlighted .addr {
                color: #ddd;
                }
            }
        }
    }
    .next{
        margin-top: 20px;
        .el-button{
            position: absolute;
            margin-top: 20px;
        }
        .nextBtn{
            right:0;
        }
    }
}
</style>
