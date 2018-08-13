<template>
    <el-row class="one">
        <el-row>
            <el-col class="authorBox">
                <img @click="goToPersonPage(item.userName)" :src="item.userImg" alt="">
                <div>
                    <span @click="goToPersonPage(item.userName)">{{ item.userName }}</span>
                    <span>{{ timeFn(item.publishTime) }} · 发布{{ item.publishType }}</span>
                </div>
            </el-col>
        </el-row>
        <el-row v-if="item.publishType=='动态'">
            <span class="content" @click="goToProject(item.id)">
                {{ item.publishContent }}
            </span>
            <div v-if="item.img.length>0" class="photoWall">
                <el-row v-if="item.img.length == 1">
                    <el-col :span="24">
                        <img :src="item.img[0]" @click="imgPlay(0)" />
                    </el-col>
                </el-row>
                <el-row v-else-if="item.img.length > 1&&item.img.length<=4">
                    <el-col :span="12" v-for="(item,i) in item.img" :key="i">
                        <img :src="item" alt=""  @click="imgPlay(i)">
                    </el-col>
                </el-row>
                <el-row v-else-if="item.img.length > 4 && item.img.length <= 9">
                    <el-col :span="8" v-for="(item,i) in item.img" :key="i">
                        <img :src="item" alt="" @click="imgPlay(i)">
                    </el-col>
                </el-row>
                <el-row v-else-if="item.img.length > 9">
                    <el-col :span="8" v-for="(item,i) in item.img" :key="i" v-if="i < 8">
                        <img :src="item" alt="" @click="imgPlay(i)" >
                    </el-col>
                    <el-col :span="8" v-if="item.img[9]">
                        <div class="moreImg">
                            <img :src="item.img[8]" alt="" @click="imgPlay(i)" >
                            <div @click="imgPlay(8)">
                                <p>+{{ item.img.length - 8 }}</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </el-row>
        <el-row v-if="item.publishType=='长文'">
            <span class="content" @click="goToProject(item.id)">
                {{ item.publishContent }}
            </span>
        </el-row>
        <el-row v-if="item.publishType=='投票'" class="vote">
            <span class="content" @click="goToProject(item.id)">
                {{ item.publishContent }}
            </span>
            <el-checkbox-group v-model="item.voteRes">
                <el-checkbox v-if="item.statu == '投票'" :label="option" name="type" v-for="(option,i) in item.options" :key="i"></el-checkbox>
                <el-checkbox v-else :label="option" name="type" disabled v-for="(option,i) in item.options" :key="i"></el-checkbox>
            </el-checkbox-group>
            <div class="voteBox">
                <span>可选数: {{ item.canSelectNum }}</span>
                <span>当前选择数: {{ item.voteRes.length }}</span>
                <el-button type="primary" @click="vote(item.id,item.canSelectNum,item.voteRes)">{{ item.statu }}</el-button>
                <p>你的投票结果为：</p>
                <ul>
                <li v-for="(val,i) in item.voteRes" :key="i"> {{ val }}</li>
                </ul>
            </div>
        </el-row>
    </el-row>
</template>
<script>
export default {
    data () {
        return {
            item:{
                id:12,
                userImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                userName: '艾米',
                publishTime: '2018-07-21 19:20:24',
                publishType: '动态',
                publishContent: '地方撒范德萨发的说法是',
                zanActive:true,
                timer:null,
                img: [
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180721_1532105817_6686_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180731_1533022365_3632.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180716_1531710250_9094_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180721_1532105817_6686_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180731_1533022365_3632.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180716_1531710250_9094_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180721_1532105817_6686_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180731_1533022365_3632.jpg?imageMogr2/auto-orient/strip',
                ],
                commentNum:3,
                supportNum:3,
                comments:[{
                    timer:null,
                    comId:0,
                    comImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                    comName:'反攻倒算',
                    comTime:'2018-07-21 19:20:24',
                    comCont:'的范德萨发大幅度是',
                    supportNum:5,
                    zanActive:false,
                    inputShow:false,
                    replyText:'',
                    reply:[
                        {
                            repImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                            repName:'地方',
                            repTime:'2018-07-21 19:20:24',
                            repCont:'大法师打发是范德萨',
                            supportNum:5,
                        }
                    ],
                },{
                    timer:null,
                    comId:1,
                    comImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                    comName:'反攻倒算',
                    comTime:'2018-07-21 19:20:24',
                    comCont:'的范德萨发大幅度是',
                    supportNum:5,
                    zanActive:false,
                    inputShow:false,
                    replyText:'',
                    reply:[
                        {
                            repImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                            repName:'地方',
                            repTime:'2018-07-21 19:20:24',
                            repCont:'大法师打发是范德萨',
                            supportNum:5,
                        }
                    ],
                }]
            },
            placehodlder:'',
            comCont:'',
            curImg:0
        }
    },
    methods: {
        timeFn(d1) {//d1作为一个变量传进来
            //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
            var dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
            var dateEnd = new Date();//获取当前时间
            var dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
            var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
            var leave1=dateDiff%(24*3600*1000)    //计算天数后剩余的毫秒数
            var hours=Math.floor(leave1/(3600*1000))//计算出小时数
            //计算相差分钟数
            var leave2=leave1%(3600*1000)    //计算小时数后剩余的毫秒数
            var minutes=Math.floor(leave2/(60*1000))//计算相差分钟数
            if(dayDiff === 0 && hours === 0){
                return minutes + '分钟前'
            }else if(dayDiff === 0 && hours !== 0){
                return hours + '小时前'
            }else if(dayDiff === 1){
                return '昨天'
            }else if(dayDiff === 2){
                return '前天'
            }else{
                return d1.slice(0,10)
            }
        },
        enlargeImg(){
            const body = document.getElementsByTagName('body')[0]
            const cover = document.createElement('div')
            cover.className = "enlarge"
            cover.style.width = document.body.clientWidth+'px'
            cover.style.height = document.body.clientHeight+'px'
            body.appendChild(cover)
            const img = document.createElement('img')
            img.className = 'enlargeImage'
            cover.appendChild(img)
            const next = document.createElement('div')
            next.className = "next fa fa-angle-right"
            cover.appendChild(next)
            const pre = document.createElement('div')
            pre.className = "pre fa fa-angle-left"
            cover.appendChild(pre)
            cover.onclick = () => {
                cover.style.display = "none"
            }
        },
        imgPlay(i){
          document.querySelector('.enlarge').style.display = "block"
          let img = document.querySelector('.enlargeImage')
          img.src = this.item.img[i]
          document.querySelector('.next').onclick = (ev) => {
              let oEvent = ev || event
              if(i < this.item.img.length - 1){
                i++
                img.src = this.item.img[i]
              }else{
                this.$message.warning('已经是最后一张了')
              }
              oEvent.cancelBubble = true;
              oEvent.stopPropagation();
            }
            document.querySelector('.pre').onclick = (ev) => {
              let oEvent = ev || event
              if(i > 0){
                i--
                img.src = this.item.img[i]
              }else{
                this.$message.warning('已经是第一张了')
              }
              oEvent.cancelBubble = true;
              oEvent.stopPropagation();
            }
        },
        isLogin(){
            if(!this.$store.state.user.name){
                this.$router.push('/login')
            }
        },
        goToPersonPage(name){
            this.$router.push('/user/'+name)
        },
        goToProject(id){
            this.$router.push('/project/'+id)
        },
        addZan(itemId,comId){
            if(comId === ''){
                this.item.zanActive = !this.item.zanActive
                if(this.item.zanActive){
                    this.item.supportNum ++
                }else{
                    this.item.supportNum --
                }
                clearTimeout(this.item.timer)
                this.item.timer = setTimeout(() => {
                    this.$axios.post('/addZan',{
                        itemId:itemId,
                        comId:comId,
                        add:this.item.zanActive
                    }).then(res => {
                        this.$emit('theLatest',res.data)
                    })
                },2000)
            }else{
                this.item.comments[comId].zanActive = !this.item.comments[comId].zanActive
                if(this.item.comments[comId].zanActive){
                    this.item.comments[comId].supportNum ++
                }else{
                    this.item.comments[comId].supportNum --
                }
                clearTimeout(this.item.comments[comId].timer)
                this.item.comments[comId].timer = setTimeout(() => {
                    this.$axios.post('/addZan',{
                        itemId:itemId,
                        comId:comId,
                        add:this.item.zanActive
                    }).then(res => {
                        console.log('b')
                        this.$emit('theLatest',res.data)
                    })
                },2000)
            }
        },
        pubCom(id,comId,text){
            if(!this.$store.state.user.name){
                this.$router.push('/login')
            }else if(!text){
                this.$message({
                    type:'info',
                    message:'评论不能为空'
                })
            }else{
                this.$axios.post('/pubCom',{
                    itemId:id,
                    comId:comId,
                    comCont:text
                }).then(res => {
                    this.$emit('theLastest',res.data)
                })
            }
        },
        comInputShow(id){
            this.item.comments[id].inputShow = !this.item.comments[id].inputShow
        },
        vote(id,num,res){
            if(res.length === num){
                this.$axios.post('/vote',{
                    itemId:id,
                    voteRes:this.item.voteRes
                }).then(res => {
                    this.$message({
                        type:'success',
                        message:'投票成功'
                    })
                    this.$emit('theLastest',res.data)
                }).catch(err => {
                    this.$message({
                        type:'warning',
                        message:'投票失败，请重试'
                    })
                })
            }else{
                this.$message.warning('请选择'+num+'个')
            }
        }
    },
    mounted () {
        if(!this.$store.state.user.name){
            this.placehodlder = '请登录后发表评论'
        }
        this.enlargeImg()
    }
}
</script>
<style lang="scss" scoped>
$black:black;
@mixin flex-style {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.zanActive{
    color: rgb(211, 61, 41)

}
img{
    cursor: pointer;
}
.one {
    margin: 80px auto;
    width: 760px;
    .authorBox {
        @include flex-style;
        >img {
            width: 40px;
            border-radius: 50%;
        }
        >div {
            margin-left: 10px;
            & :first-child {
                font-weight: 600;
                color: $black;
                cursor: pointer;
            }
            & :nth-child(2) {
                font-size: 14px;
                display: block;
                margin-top: 5px;
            }
        }
    }
    .content{
        display: inline-block;
        color: $black;
        cursor: pointer;
        margin:10px 0;
    }
    ul{
        font-size: 14px;
        li{
            margin-top: 5px;
        }
    }
    .photoWall {
        .el-col {
            padding: 5px;
            img {
                width: 100%;
            }
            .moreImg{
              position:relative;
              div{
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                cursor: pointer;
                background: rgba(0, 0, 0, 0.534);
                p{
                  padding: 0;
                  margin: 0;
                  color: rgb(230, 227, 227);
                  font-size: 3em;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                }
              }
            }
        }
    }
    .vote{
        // position: relative;
        .voteBox{
            margin: 10px 0;
            .el-button{
                margin-left: 20px;
            }
        }
        .el-checkbox{
            display: block;
            margin-left: 0;
            margin: 10px 10px;
        }
    }
}
</style>

