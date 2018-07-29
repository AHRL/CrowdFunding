import publish from '@/components/children/publish'
import activity from '@/components/children/activityItem'
import $ from '@/api/axios.init'
export default {
    name: 'communityActivity',
    data() {
        return {
            pubText: '',
            nav:[{
                name:'最新',
                active:true
            },{
                name:'关注',
                active:false
            },{
                name:'图片',
                active:false
            },{
                name:'投票',
                active:false
            },{
                name:'长文',
                active:false
            }],
            lastestAct: [{
                id:12,
                userImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                userName: '田宇',
                publishTime: '2018-07-29 19:20:24',
                publishType: '投票',
                publishContent: '地方撒范德萨发的说法是',
                statu:'投票',
                zanActive:true,
                timer:null,
                commentNum:3,
                supportNum:3,
                canSelectNum:1,
                options:['范德萨范德萨的广泛地','gfdgsfdgfdsssssss','fgdsgfdgdgdfgbvcbvb'],
                voteRes:[],
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
                    ]
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
            },{
                id:12,
                userImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                userName: '艾米',
                publishTime: '2018-07-21 19:20:24',
                publishType: '长文',
                publishContent: '地方撒范德萨发的说法是',
                zanActive:true,
                timer:null,
                img: [
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
                    require('../../../assets/2.jpg'),
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
            }],
            page:0,
            hotTopic:{
                imgUrl:require('../../../assets/2.jpg'),
                topic:'你目前人生中最巅峰的时光是哪段？',
                commentNum:33,
                zanNum:65,
                statu:'进行中'
            },
            funPerson:{
                headImg:require('../../../assets/head.jpeg'),
                name:'AKin_Hon纸鬼',
                activityNum:23,
                follower:44,
                intro:'玩牛皮纸可不是吹牛皮',
                followStatu:'关注'
            },
        }
    },
    methods: {
        getLastest(data){
            this.lastestAct = data
        },
        getNavContent(value,i){
            this.nav.forEach((value) => {
                value.active = false
            })
            this.nav[i].active = true
            $.post('/getLastest',{
                itemType:value
            }).then(res => {
                this.lastestAct = res.data
            })
        },
        getMore(){
            this.page ++
            $.post('/getMore',{
                page:this.page
            }).then(res => {
                console.log(res.data)
                this.lastestAct.push(...res.data)
                console.log(this.lastestAct)
            }).catch(err => {
                this.$message({
                    type:'warning',
                    message:'获取失败，请重试'
                })
            })
        },
        topicChange(){
            this.$axios.get('/topicChange').then(res => {
                this.hotTopic = res.data
            }).catch(err => {
                this.$message({
                    type:'warning',
                    message:'获取失败，请重试'
                })
            })
        },
        funPerChange(){
            this.$axios.get('/funPerChange').then(res => {
                this.funPerson = res.data
            }).catch(err => {
                this.$message({
                    type:'warning',
                    message:'获取失败，请重试'
                })
            })
        },
        follow(){
            this.$axios.post('/follow',{
                name:this.funPerson.name
            }).then(res => {
                this.$message({
                    type:'success',
                    message:'关注成功'
                })
                this.funPerson.followStatu = '已关注'
            }).catch(err => {
                this.$message({
                    type:'warning',
                    message:'关注失败，请重试'
                })
            })
        }
    },
    components: {
        publish,
        activity
    }
}