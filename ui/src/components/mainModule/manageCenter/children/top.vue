<template>
    <div class="top">
        <el-row>
            <el-card class="box-card">
                <h4>日榜</h4>
                <el-row>
                    <el-table
                    :data="projects"
                    :cell-style="cellStyle"
                    style="width: 100%">
                    <el-table-column
                        width="70"
                        prop="ranking"
                        label="排名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        width="100"
                        label="日期"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="publisher"
                        width="100"
                        :show-overflow-tooltip="true"
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
                        width="50"
                        label="进度">
                    </el-table-column>
                    <el-table-column
                        prop="support"
                        width="80"
                        label="支持量">
                    </el-table-column>
                    <el-table-column
                        prop="money"
                        width="120"
                        label="金额">
                        <template slot-scope="scope">
                            {{ fmoney(scope.row.money,2) }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="percent"
                        width="80"
                        label="上升率">
                    </el-table-column>
                </el-table>
                </el-row>
            </el-card>
        </el-row>
        <el-row>
            <el-card class="box-card">
                <h4>月榜</h4>
                <el-row>
                    <el-table
                    :data="projects"
                    :cell-style="cellStyle"
                    style="width: 100%">
                    <el-table-column
                        width="70"
                        prop="ranking"
                        label="排名"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="date"
                        width="100"
                        label="日期"
                        >
                    </el-table-column>
                    <el-table-column
                        prop="publisher"
                        width="100"
                        :show-overflow-tooltip="true"
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
                        width="50"
                        label="进度">
                    </el-table-column>
                    <el-table-column
                        prop="support"
                        width="80"
                        label="支持量">
                    </el-table-column>
                    <el-table-column
                        prop="money"
                        width="120"
                        label="金额">
                        <template slot-scope="scope">
                            {{ fmoney(scope.row.money,2) }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop="percent"
                        width="80"
                        label="上升率">
                    </el-table-column>
                </el-table>
                </el-row>
            </el-card>
        </el-row>
    </div>
</template>
<script>
export default {
    data () {
        return {
            projects: [{
                    ranking:'Top1',
                    date: '2016-05-02',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434333',
                    percent: '4%'
                }, {
                    ranking:'Top2',
                    date: '2016-05-04',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434355',
                    percent: '4%'
                }, {
                    ranking:'Top3',
                    date: '2016-05-02',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434355',
                    percent: '4%'
                }, {
                    ranking:'Top4',
                    date: '2016-05-02',
                    publisher: '王小虎',
                    projectName: '创意大赛打度快放假的说法大三',
                    support:203,
                    progress: '60%',
                    money: '434355',
                    percent: '4%'
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
        },
        cellStyle({row, column, rowIndex, columnIndex}){
            let style = ''
            if(columnIndex === 0){
                style = 'text-align:right;font-weight:600;'
            }
            if(rowIndex === 0 && (columnIndex === 0 || columnIndex === 7)){ //指定坐标
                return style+'color:red;font-size:1.2em;'
            }else if(rowIndex === 1 && (columnIndex === 0 || columnIndex === 7)){
                return style+'color:#f76826;font-size:1.1em;'
            }else if(rowIndex === 2 && (columnIndex === 0 || columnIndex === 7)){
                return style+'color:#f38d18;font-size:1.1em;'
            }else{
                return style
            }
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
