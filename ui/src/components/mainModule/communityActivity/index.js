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
            theLastest:[]
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
        }
    },
    components: {
        publish,
        activity
    }
}