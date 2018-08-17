<template>
  <div class="news">
    <h2>最新消息 <span>(共{{ pageTotal }}条消息</span><span>{{ notReadNews }}未读)</span></h2>
    <div>
        <!-- <div class="nothing"><span>暂时还没有信息</span></div> -->
        <el-table
            :cell-style="rowsStyle"
            ref="multipleTable"
            :data="message"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="sendMan"
            label="姓名"
            width="120">
            </el-table-column>
            <el-table-column
            prop="content"
            label="主要内容"
            show-overflow-tooltip>
            </el-table-column>
            <el-table-column
            label="编辑"
            width="180">
            <template slot-scope="scope">
                <div class="btnGroup">
                    <el-button type="primary" icon="el-icon-view" circle @click="watchMsg(scope.row.id)"></el-button>
                    <el-button v-if="scope.row.isRead" type="warning" icon="el-icon-star-off" circle @click="markRead(scope.row.id)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="deleteNews(scope.row.id)"></el-button>
                </div>
            </template>
            </el-table-column>
        </el-table>
        <el-row class="btnBox">
            <el-button type="primary" plain @click="allMarkRead">标为已读</el-button>
            <el-button type="danger" plain @click="allDeleteNews">批量删除</el-button>
            <el-button-group>
                <el-button type="button" icon="el-icon-arrow-left" @click="goToPage(-1)">上一页</el-button>
                <el-button type="button" @click="goToPage(1)">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
        </el-row>
        <el-dialog
            title="消息"
            :visible.sync="msgDialog"
            width="30%">
            <div>
                <span><i class="fa fa-paper-plane"></i>&nbsp;发件人：{{ curMsg.sendMan }}</span>
                <p>内容：</p>
                <div class="newsCont" v-if="curMsg.type=='动态'||'项目'"><a href="javascript:;"> {{ curMsg.content }} </a></div>
                <div class="newsCont" v-else> {{ curMsg.content }} </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="watchMsg(curMsg.id)">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</div>
</template>
<script>
export default {
  data () {
      return {
          message: [{
                    id:0,
                    date: '2016-05-03',
                    sendMan: '王小虎',
                    type:'动态',
                    itemId:'11',
                    content: '评论了你的动态"好好好好好好的首付好好好好好好的首付好好好好好好的首付好好好好好好的首付款的设计费水电费发"',
                    isRead:1
                }, {
                    id:1,
                    date: '2016-05-02',
                    sendMan: '系统',
                    type:'动态',
                    itemId:'11',
                    content: '恭喜您，抽中超值大礼包',
                    isRead:1
                }, {
                    id:2,
                    date: '2016-05-04',
                    sendMan: '王小虎',
                    type:'通知',
                    itemId:'',
                    content: '上海市普陀区金沙江路 1518 弄',
                    isRead:0
                }, {
                    id:3,
                    date: '2016-05-01',
                    sendMan: '王小虎',
                    type:'通知',
                    itemId:'',
                    content: '上海市普陀区金沙江路 1518 弄',
                    isRead:0
                }],
                msgDialog:false,
                curMsg:{},
                multipleSelection: [],
                page:0,
                pageTotal:20,
                notReadNews:2
      }
  },
  methods: {
      toggleSelection(rows) {
        if (rows) {
            rows.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            } else {
            this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        watchMsg(id){
            this.curMsg = this.message.filter((val,index) => val.id == id)[0]
            this.msgDialog = !this.msgDialog
        },
        markRead(id){
            let i = this.message.map((val,index) => {
                if(val.id == id) return index
            })
            this.$axios.post('/markRead',{
                name:this.$store.state.user.name,
                newsId:id
            }).then(res => {
                if(res.data){
                    this.message[i].isRead=0
                    this.notReadNews --
                }else{
                    this.$message.warning('操作失败')
                }
            }).catch(err => console.log(err))
        },
        deleteNews(id){
            this.$axios.post('/deleteNews',{
                name:this.$store.state.user.name,
                newsId:id
            }).then(res => {
                this.message = res.data.message
                this.pageTotal = res.data.pageTotal
            }).catch(err => console.log(err))
        },
        allMarkRead(){
            if(this.multipleSelection.length>0){
                let arr = []
                this.multipleSelection.map((val,index) => {
                    if(val.isRead == 1) arr.push(val.id)
                })
                if(arr.length === 0){
                    this.$message.warning('已标为已读')
                }else{
                    this.$axios.post('/markRead',{
                        name:this.$store.state.user.name,
                        newsIdArr:arr
                    }).then(res => {
                        this.message = res.data.message
                        this.notReadNews = res.data.notReadNews
                    }).catch(err => console.log(err))
                }
            }
        },
        allDeleteNews(){
            if(this.multipleSelection.length>0){
                let arr = []
                this.multipleSelection.map((val,index) => arr.push(val.id))
                this.$axios.post('/deleteNews',{
                    name:this.$store.state.user.name,
                    newsIdArr:arr
                }).then(res => {
                    this.message = res.data.message
                    this.pageTotal = res.data.pageTotal
                }).catch(err => console.log(err))
            }
        },
        rowsStyle({row, column, rowIndex, columnIndex}){
            if(this.message[rowIndex].isRead){ //指定坐标
                return 'color:#000'
            }else{
                return ''
            }
        },
        goToPage(num){
            if(this.page==0 && num == -1){
                this.$message.warning('已经是第一页了')
            }else if(this.page == this.pageTotal && num == 1){
                this.$message.warning('已经是最后一页了')
            }else{
                this.page = this.page + num
                init()
            }
        },
        init(){
            this.$axios.post('/goToPage',{
                name:this.$store.state.user.name,
                page:this.page
            }).then(res => {
                this.message = res.data.message
                this.pageTotal = res.data.pageTotal
            }).catch(err => console.log(err))
        }
  },
  mounted () {
      this.init()
  }
}
</script>
<style lang="scss" scoped>
.news{
    margin-bottom: 40px;
    h2{
        color: black;
        span{
            color:rgb(141, 141, 141);
            font-size: 14px;
            font-weight: 500;
            margin-left: 20px;
        }
    }
    .nothing{
        height: 180px;
        position: relative;
        background: url('/static/news2.png') no-repeat center center;
        &>span{
            text-align: center;
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .btnGroup{
        /deep/ .el-button.is-circle{
            padding: 6px;
        }
    }
    .btnBox{
        margin-top: 10px;
        position: relative;
        /deep/ .el-button-group{
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    .el-dialog{
        .newsCont{
            text-indent:2em;
            a{
                color:rgb(99, 160, 201);
            }
        }
    }
}
</style>
