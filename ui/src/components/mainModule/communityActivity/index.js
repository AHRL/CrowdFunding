import publish from '@/components/children/publish'
import activity from '@/components/children/activityItem'
export default {
    name: 'communityActivity',
    data() {
        return {
            pubText: '',
            lastestAct: [{
                userImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                userName: '艾米',
                publishTime: '4小时前',
                publishType: '长文',
                publishContent: '地方撒范德萨发的说法是',
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
                    com:{
                        comImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                        comName:'反攻倒算',
                        comTime:'4小时前',
                        comCont:'的范德萨发大幅度是',
                        supportNum:5,
                    },
                    reply:[
                        {
                            repImg:'https://p.moimg.net/ico/2018/05/08/20180508_1525760164_9772.jpg?imageMogr2/auto-orient/strip',
                            repName:'地方',
                            repTime:'4小时前',
                            repCont:'大法师打发是范德萨',
                            supportNum:5,
                        }
                    ]
                }]
            }],
            theLastest:[]
        }
    },
    methods: {
        getLastest(data){
            console.log(data)
        }
    },
    components: {
        publish,
        activity
    }
}