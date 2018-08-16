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
                    <el-col :span="8" v-for="(item,i) in item.img.slice(0,8)" :key="i">
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
        <div class="zan">
          <div @click="zan">
            <img v-show="!isZan" class="notZan" :src="require('../../assets/zan.png')">
            <img v-show="isZan" :src="require('../../assets/赞.png')">
          </div>
        </div>
        <div class="zanPersons">
          <img v-for="(one,i) in zanPersons.slice(0,14)" :key="i" :src="one.img" alt="">
          <span @click="zanDialog = !zanDialog">{{ zanPersons.length }}赞<i class="el-icon-caret-right"></i></span>
        </div>
        <el-dialog
            class="teamMember"
            title="关注"
            :visible.sync="zanDialog"
            width="500px">
                <el-row v-for="(item,i) in zanPersons" :key="i">
                    <el-col :span="3" :offset="1">
                        <img :src="item.img" @click="goPersonPage(item.name)">
                    </el-col>
                    <el-col :span="15" :offset="1">
                        <h3 @click="goPersonPage(item.name)">{{item.name}}</h3>
                    </el-col>
                    <el-col :span="4">
                        <el-button @click="isFocus(item.name,i)" size="small" type="danger" round>{{ item.isFocus }}</el-button>
                    </el-col>
                </el-row>
                <el-pagination
                    layout="prev, pager, next"
                    :page-size="15"
                    @current-change="currentChange"
                    :total="zanPersonsTotal">
                </el-pagination>
        </el-dialog>
        <div class="comments">
            <h2>{{item.comments.length}}条评论</h2>
            <div>
                <el-row>
                    <el-col :span="2">
                        <img class="headImg" :src="require('../../assets/user.png')">
                    </el-col>
                    <el-col :span="22">
                        <el-input type="textarea" @focus="isLogin"  cols="3" :rows="5" resize="none" :placeholder="placeholder" v-model="pubCom"></el-input>
                    </el-col>
                </el-row>
                <div class="pub">
                    <el-button type="primary" @click="sendCom(pubCom,item.id)">发表</el-button>
                </div>
            </div>
            <div class="comment">
                <el-row class="com" v-for="(obj,i) in item.comments" :key="i">
                    <el-col :span="2">
                        <img class="headImg" :src="obj.comImg">
                    </el-col>
                    <el-col :span="22">
                        <span>{{ obj.comName }}</span>
                        <span>{{ timeFn(obj.comTime) }}</span>
                        <p>{{ obj.comCont }}</p>
                        <div class="box">
                            <div @click="isInputShow(true,i)"><img :src="require('../../assets/评论.png')"><sup>3</sup></div>
                            <div @click="addZan(item.id,obj.comId)">
                                <img v-show="!obj.zanActive" :src="require('../../assets/zan.png')">
                                <img v-show="obj.zanActive" :src="require('../../assets/赞.png')">
                                <sup>{{obj.supportNum}}</sup>
                            </div>
                        </div>
                        <div class="addCom" v-show="obj.reply.length > 0 || _inputShow(i)">
                            <div v-for="(rep,j) in obj.reply" :key="j">
                                <p><span>{{ rep.from }}</span> 回复 <span>{{ rep.to }}</span>: {{ rep.repCont }}</p>
                                <div>
                                    <span>{{ timeFn(rep.repTime) }}</span>
                                    <img @click="isInputShow(false,i,j)" :src="require('../../assets/评论.png')">
                                </div>
                            </div>
                            <el-input @focus="isLogin" @keyup.enter.native="sendCom(obj.replyTxt,item.id,comId)" class="replyInput" type="text" v-show="_inputShow(i)" :placeholder="item.placeholder" v-model="obj.replyTxt"></el-input>
                            <div v-show="obj.reply.length > 1" class="allComments">全部评论<i class="el-icon-caret-bottom"></i></div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
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
                placeholder:'',
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
                    replyTxt:'',
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
                    reply:[],
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
                            from:'aa',
                            to:'bb',
                            repTime:'2018-07-21 19:20:24',
                            repCont:'大法师打发是范德萨',
                            inputShow:false,
                        }
                    ],
                }]
            },
            isZan:true,
            placeholder:'',
            curImg:0,
            to:'',
            comId:'',
            pubCom:'',
            zanDialog:false,
            zanPersons:[{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            },{
              name:'ttt',
              img:'https://p.moimg.net/ico/1281521_1487473673.jpg',
              isFocus:'关注'
            }],
            zanPersonsTotal:60,
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
                return d1.slice(0,16)
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
        sendCom(text,id,comId){
            if(!this.$store.state.user.name){
                this.$router.push('/login')
            }else if(!text){
                this.$message({
                    type:'info',
                    message:'评论不能为空'
                })
            }else{
                console.log(this.$store.state.user.name,this.to,id,comId,text)
                this.$axios.post('/pubCom',{
                    from:this.$store.state.user.name,
                    to:this.to,
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
        },
        goPersonPage(name){
            this.$router.push('/user/'+name)
        }, 
        isFocus(val,i){
            let focus = this.zanPersons       
            focus[i].isFocus === '已关注' ? focus[i].isFocus = '+ 关注': focus[i].isFocus = '已关注'
            if(focus[i].isFocus === '已关注'){
                this.$store.commit('CHANGE_FOCUSNUM',this.$store.state.user.focusNum + 1)
            }else{
                this.$store.commit('CHANGE_FOCUSNUM',this.$store.state.user.focusNum - 1)
            }
            clearTimeout(focus.timer)
            focus.timer = setTimeout(() => {
                this.$axios.post('/isFocus',{
                    user:this.$store.state.user.name,
                    name:val,
                    ifFocus:focus[i].isFocus
                }).then(res => {
                    this.$store.commit('CHANGE_FOCUS',res.data)
                }).catch(err => {
                    console.log(err)
                })
            },2000)
        },
        currentChange(curPage){
            this.$axios.post('/getZanPersons',{
                curPage:curPage
            }).then(res => {
                this.zanPersons = res.data
            }).catch(err => {
                this.$message.error('获取失败，请重试')
            })
        },
        zan(){
            this.isZan = !this.isZan
            this.$axios.post('/isZan',{
                isZan:isZan
            }).then(res => this.isZan = res.data).catch(err => console.log(err))
        },
        isLogin(){
            if(!this.$store.state.user.name){
                this.$router.push('/login')
            }
        },
        isInputShow(isFirstCom,i,j){
            this.comId = this.item.comments[i].comId
            if(isFirstCom){
                this.to = this.item.comments[i].comName
                this.item.placeholder = '@'+this.item.comments[i].comName
                this.item.comments[i].inputShow = !this.item.comments[i].inputShow
                this.item.comments.map(function(val,index){
                    if(index != i){
                        val.inputShow = false
                        val.reply.map(function(val,index){
                            val.inputShow = false
                        })
                    }
                })
            }else{
                this.to = this.item.comments[i].reply[j].from
                this.item.placeholder = '@'+this.item.comments[i].reply[j].from
                this.item.comments[i].inputShow = false
                this.item.comments[i].reply[j].inputShow = !this.item.comments[i].reply[j].inputShow
                this.item.comments.map(function(val,index){
                    val.inputShow = false
                    val.reply.map(function(val,_index){
                        if(index != i || _index != j){
                            val.inputShow = false
                        }
                    })
                })
            }
        },
        _inputShow(i){
            return this.item.comments[i].inputShow || (() => this.item.comments[i].reply.some((val,index) => val.inputShow))()
        }
    },
    mounted () {
        if(!this.$store.state.user.name){
            this.placeholder = '请先登录再发表评论'
        }
        this.enlargeImg()
        this.currentChange(1)
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
    color:black;
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
    .zan{
      margin: 50px 0;
      &>div{
        width: 30px;
        height: 30px;
        padding: 20px;
        border-radius: 50%;
        border:2px solid rgb(161, 159, 159);
        margin: 0 auto;
        &>img{
            width: 100%;
        }
        &>.notZan{
          opacity: .7;
          filter: opacity(70%)
        }
      }
    }
    .zanPersons{
        background: rgba(234, 237, 238, 0.616);
        padding:20px;
        position:relative;
        img{
          width:40px;
          border-radius: 50%;
          border:3px solid #fff;
          @for $i from 1 through 999 {
                &:nth-child(#{$i}){
                    position:relative;
                    left:$i*-10px;
                    z-index: 999-$i;
                }
            }
        }
        span{
            position:absolute;
            right: 20px;
            top: 33px;
            cursor: pointer;
        }
      }
      .teamMember{
        text-align: left;
        .el-row{
            margin: 10px 0;
        }
        img{
            width: 45px;
            border-radius: 50%;
            cursor:pointer;
        }
        h3{
            line-height: 45px;
            margin: 0;
            cursor:pointer;
        }
        .el-button{
            margin-top: 7px;
        }
        .el-pagination{
            text-align: center;
        }
    }
    .comments{
        margin-top:100px;
        h2{
            color:#000;
            margin-bottom: 40px;
            padding:20px 0;
            border-bottom: 1px solid #dcdfe6;
        }
        .headImg{
            width:60%;
            min-width:40px;
            margin: 0 auto;
            border-radius:50%;
        }
        .pub{
            margin-top: 10px;
            text-align: right;
        }
        .comment{
            margin-top: 30px;
            .com{
                position:relation;
                margin: 20px 0;
                .el-col:nth-child(2){
                    &>span:first-child{
                        font-weight: 600;
                    }
                    &>span:nth-child(2){
                        margin-top:5px;
                        font-size:0.9em;
                        display: block;
                        color:rgb(139, 136, 136);
                    }
                    .box{
                        position:absolute;
                        right:20px;
                        top:20px;
                        div{
                            margin-right:20px;
                            display:inline-block;
                            img{
                                width:20px;
                                opacity:0.8;
                                filter:opacity(80%);
                                margin-right: 5px;
                            }
                        }
                    }
                    .addCom{
                        color:rgb(139, 136, 136);
                        font-size:0.9em;
                        background:rgba(234, 237, 238, 0.616);
                        padding:20px;
                        p{
                            margin-top:0;
                            &>span{
                                color:#000;
                                font-weight:600;
                            }
                        }
                        &>div{
                            position:relative;
                            img{
                                position:absolute;
                                right:0;
                                top:0;
                                width:20px;
                                opacity:0.8;
                                filter:opacity(80%);
                            }
                        }
                    }
                    .replyInput{
                        margin: 10px 0;
                    }
                    .allComments{
                        font-size:1.1em;
                        color:rgb(49, 87, 112);
                        text-align:center;
                        margin-top:10px;
                    }
                }
            }
        }
    }
}
</style>

