<template>
    <el-col class="myActivity" :span="22" :offset="1" data-content="动态管理">
        <publish></publish>
        <div class="activity">
            <h2>我的动态</h2>
            <div class="nothing" v-if="myActivity==''"><span>暂时还没有发布动态</span></div>
            <activityItem v-else  v-for="(item,i) in myActivity" :key="i" :item="item"></activityItem>
            <div class="watchMore">
                <el-button type="danger" @click="getMore">查看更多</el-button>
            </div>
        </div>
    </el-col>
</template>
<script>
import publish from '@/components/children/publish'
import activityItem from '@/components/children/activityItem'
export default {
    data(){
        return {
            pubText:'',
            myActivity:[{
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
                publishType: '动态',
                publishContent: '地方撒范德萨发的说法是',
                zanActive:true,
                timer:null,
                img: [
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
                    'http://p.moimg.net/project/project_20180605_1528140951_6031_crop.jpg?imageMogr2/auto-orient/strip',
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
            page:1
        }
    },
    methods: {
        getMore(){
            this.page ++
            this.$axios.post('/getMore',{
                page:this.page,
                userName:this.$store.state.user.name
            }).then(res => this.myActivity.push(...res.data)).catch(err => this.$message.error('获取失败，请重试'))
        },
    },
    components: {
        publish,
        activityItem
    }
}
</script>
<style lang="scss" scoped>
    .myActivity{
        color: rgb(151, 151, 151);
        h2 {
            color: black;
        }
        .activity{
            .nothing{
                height: 180px;
                position: relative;
                background: url('/static/word.png') no-repeat center center;
                &>span{
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
            .watchMore{
                margin:20px auto;
                text-align: center;
            }
        }
    }
</style>