<template>
    <div class="survey">
        <el-card class="allProgress">
            <el-col :span="10">
                <h5 class="yearIncrease"><i class="el-icon-caret-top"></i>年增长率</h5>
                <el-col class="circleProgress" :span="12">
                    <div>
                        <el-progress :show-text="false" :stroke-width="15" type="circle" :percentage="growthRate.fund.yearRate" color="#409EFF"></el-progress>
                        <div class="increaseMsg">
                            <p>{{ growthRate.fund.yearRate }}}%</p>
                            <span>总资金</span>
                        </div>
                    </div>
                </el-col>
                <el-col class="circleProgress" :span="12">
                    <div>
                        <el-progress :stroke-width="15" :show-text="false" type="circle" :percentage="growthRate.user.yearRate" color="#8e71c7"></el-progress>
                        <div class="increaseMsg">
                            <p>{{ growthRate.user.yearRate }}%</p>
                            <span>注册量</span>
                        </div>
                    </div>
                </el-col>
            </el-col>
            <el-col class="progress" :span="14">
                <div>
                    <el-row>
                        <el-col :span="6">
                            <span>资金日增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="growthRate.fund.dayRate"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span>资金月增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="growthRate.fund.monthRate" color="#8e71c7"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span>用户日增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="growthRate.user.dayRate" color="#dc5771"></el-progress>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="6">
                            <span>用户月增长</span>
                        </el-col>
                        <el-col :span="18">
                            <el-progress :percentage="growthRate.user.monthRate" color="#da9c63"></el-progress>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-card>
        <el-row class="projects">
            <el-card class="box-card">
                <div class="head">
                    <h4>全部项目<span>共20个项目</span></h4>
                    <el-button-group>
                        <i class="el-icon-arrow-left" @click="goToPage(-1)"></i>
                        <i class="el-icon-arrow-right" @click="goToPage(1)"></i>
                    </el-button-group>
                </div>
                <el-table
                    :data="projects"
                    :header-cell-style="{textAlign:'center'}"
                    :cell-style="{textAlign:'center'}"
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
            </el-card>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageNum:0,
            growthRate:{
                fund:{
                    yearRate:50,
                    monthRate:30,
                    dayRate:60
                },
                user:{
                    yearRate:50,
                    monthRate:30,
                    dayRate:15
                }
            },
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
                }],
            page:1
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
        },
        goToPage(data){
            if(data == -1 && this.page+data <= 0){
                this.$message.warning('已经是第一页了')
            }else if(data == 1 && this.page+data >= this.pageNum){
                this.$message.warning('已经是最后一页了')
            }else{
                this.page = this.page+data
                this.$axios.post('/survey_goToPage',{
                    page:this.page
                }).then(res => this.projects = res.data).catch(err => this.$message.error('获取失败'))
            }
        }
    },
    mounted () {
        this.$axios.get('/getSurvey').then(res => {
            this.growthRate = res.data.growthRate
            this.projects = res.data.projects
            this.pageNum = res.data.pageNum
        }).catch(err => this.$message.error('获取失败，请重试'))
    }
}
</script>
<style scoped>
.survey{
    color: #000;
    padding: 10px;
}
.allProgress{
    background: white;
}
.allProgress .el-col{
    padding: 10px;
}
.yearIncrease{
    margin:0; 
}
.circleProgress div{
    text-align: center;
    position: relative;
}
.circleProgress .increaseMsg{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size: 14px;
}
.circleProgress .increaseMsg p{
    font-weight: 600;
    margin:5px 0;
}
.progress>div{
    border-left: 1px solid rgb(245, 242, 242);
    font-size: 14px;
    padding-left: 20px;
}
.projects{
    margin-top: 20px;
}
.head{
    background: rgb(235, 239, 243);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
h4{
    font-size: 18px;
    padding: 10px;
    margin: 0;
    width: 200px;
}
h4>span{
    font-size: 14px;
    font-weight: 400;
    margin-left: 20px;
}
.el-button-group{
    margin-right: 20px;
}
.el-button-group i{
    cursor: pointer;
}
.el-button-group i:hover{
    color: rgb(139, 187, 231);
}
</style>