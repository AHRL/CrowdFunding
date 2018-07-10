<template>
    <div class="top">
        <el-row>
            <el-card class="box-card">
                <h4>日榜</h4>
                <el-row>
                    <el-table
                    :data="projects"
                    style="width: 100%">
                    <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        :filters="filterDate()"
                        :filter-method="filterHandler"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="publisher"
                        label="发起人">
                    </el-table-column>
                    <el-table-column
                        prop="projectName"
                        label="项目名"
                        width="180"
                        :show-overflow-tooltip="true"
                        :formatter="formatter">
                    </el-table-column>
                    <el-table-column
                        prop="progress"
                        label="进度">
                    </el-table-column>
                    <el-table-column
                        prop="support"
                        sortable
                        label="支持量">
                    </el-table-column>
                    <el-table-column
                        prop="money"
                        sortable
                        label="金额">
                        <template slot-scope="scope">
                            {{ fmoney(scope.row.money,2) }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="statu"
                        label="状态"
                        :filters="[{ text: '已完成', value: '已完成' }, { text: '进行中', value: '进行中' },{ text: '失败', value: '失败' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                            :type="tagStyle(scope.row.statu)"
                            disable-transitions>{{scope.row.statu}}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
                </el-row>
            </el-card>
        </el-row>
        <el-row>
            <el-card class="box-card">
                <h4>月榜</h4>
            </el-card>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            projects: [{
                    date: '2016-05-02',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434333',
                    statu: '已完成'
                }, {
                    date: '2016-05-04',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434355',
                    statu: '进行中'
                }, {
                    date: '2016-05-02',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434355',
                    statu: '失败'
                }, {
                    date: '2016-05-02',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434355',
                    statu: '已完成'
                }]
        }
    },
    methods: {
      filterDate(){
          let afterArr = []
          let preArr = []
          this.projects.map(n => {
              preArr.push(n.date)
          })
          preArr = [...new Set(preArr)]
          preArr.map(n => {
              let item = {}
              item.text = n
              item.value = n
              afterArr.push(item)
          })
          return afterArr
      },
      formatter(row, column) {
        return row.projectName;
      },
      filterTag(value, row) {
        return row.statu === value;
      },
      tagStyle(statu){
          if(statu === '已完成') return 'success'
          if(statu === '进行中') return 'warning'
          if(statu === '失败') return 'danger'
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      fmoney(s, n) {
            /*
            * 参数说明：
            * s：要格式化的数字
            * n：保留几位小数
            * */
            n = n > 0 && n <= 20 ? n : 2;
            s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
            let l = s.split(".")[0].split("").reverse(),
                r = s.split(".")[1];
            let t = "";
            for (let i = 0; i < l.length; i++) {
                t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");
            }
            return t.split("").reverse().join("") + "." + r;
        }
    }
}
</script>
<style scoped>
    .top{
        padding: 10px;
    }
    h4{
        border-left: 3px solid #7097c9;
        padding-left: 5px;
        margin: 10px;
    }
    .top>.el-row{
        margin-bottom: 10px;
    }
</style>
