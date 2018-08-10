<template>
  <div class="news">
    <h2>最新消息</h2>
    <div>
        <!-- <div class="nothing"><span>暂时还没有信息</span></div> -->
        <el-table
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
                    <el-button v-if="scope.row.isRead" type="warning" icon="el-icon-star-off" circle></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle></el-button>
                </div>
            </template>
            </el-table-column>
        </el-table>
        <el-row class="btnBox">
            <el-button type="primary" plain>标为已读</el-button>
            <el-button type="danger" plain>批量删除</el-button>
            <el-button-group>
                <el-button type="button" icon="el-icon-arrow-left">上一页</el-button>
                <el-button type="button">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </el-button-group>
        </el-row>
        <el-dialog
            title="消息"
            :visible.sync="msgDialog"
            width="30%">
            <div>
                <span><i class="fa fa-paper-plane"></i>发件人：{{ curMsg.name }}</span>
                <p>内容：</p>
                <div> {{ curMsg.content }} </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="msgDialog = false">取 消</el-button>
                <el-button type="primary" @click="msgDialog = false">确 定</el-button>
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
                    content: '评论了你的动态"好好好好好好的首付好好好好好好的首付好好好好好好的首付好好好好好好的首付款的设计费水电费发"',
                    isRead:1
                }, {
                    id:1,
                    date: '2016-05-02',
                    sendMan: '系统',
                    content: '恭喜您，抽中超值大礼包',
                    isRead:1
                }, {
                    id:2,
                    date: '2016-05-04',
                    sendMan: '王小虎',
                    content: '上海市普陀区金沙江路 1518 弄',
                    isRead:0
                }, {
                    id:3,
                    date: '2016-05-01',
                    sendMan: '王小虎',
                    content: '上海市普陀区金沙江路 1518 弄',
                    isRead:0
                }],
                msgDialog:false,
                curMsg:{},
                multipleSelection: []
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
            console.log(this.multipleSelection)
        },
        watchMsg(id){
            this.curMsg = this.message[id]
            this.msgDialog = !this.msgDialog
        }
  }
}
</script>
<style lang="scss" scoped>
.news{
    margin-bottom: 40px;
    h2{
        color: black;
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
}
</style>
