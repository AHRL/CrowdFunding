<template>
    <div class="messageList">
        <el-row class="apply">
            <el-card class="box-card">
                <div class="head">
                    <h4>项目申请<span>({{ projectReply.notRead }}条未回复)</span></h4>
                    <el-button-group>
                        <i class="el-icon-arrow-left" @click="reply_goToPage(-1)"></i>
                        <i class="el-icon-arrow-right" @click="reply_goToPage(-1)"></i>
                    </el-button-group>
                </div>
                <el-table
                    :data="projectReply.item"
                    :header-cell-style="{textAlign:'center'}"
                    :cell-style="{textAlign:'center'}"
                    style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="项目标题">
                                <span>{{ props.row.title }}</span>
                            </el-form-item>
                            <el-form-item label="项目短标题">
                                <span>{{ props.row.shortTitle }}</span>
                            </el-form-item>
                            <el-form-item label="项目类别">
                                <span>{{ props.row.classify }}</span>
                            </el-form-item>
                            <el-form-item label="发起城市">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="目标金额">
                                <span>{{ props.row.moneyTarget }}</span>
                            </el-form-item>
                            <el-form-item label="众筹时长">
                                <span>{{ props.row.interval }}</span>
                            </el-form-item>
                            <el-form-item label="项目简介">
                                <span>{{ props.row.introduction }}</span>
                            </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="日期"
                        prop="date">
                    </el-table-column>
                    <el-table-column
                        label="发起人"
                        prop="publisher">
                    </el-table-column>
                    <el-table-column
                        label="项目名称"
                        prop="shortTitle">
                    </el-table-column>
                    <el-table-column
                        label="类别"
                        prop="classify">
                    </el-table-column>
                    <el-table-column
                        label="批复">
                            <template slot-scope="scope">
                                <!-- <i class="el-icon-success"></i>
                                <i class="el-icon-error"></i> -->
                                <el-button size="mini" type="primary" v-if="scope.row.statu == '已通过'">{{ scope.row.statu }}</el-button>
                                <el-button size="mini" type="danger" v-else-if="scope.row.statu == '已拒绝'">{{ scope.row.statu }}</el-button>
                                <div v-else>
                                    <el-button
                                    size="mini"
                                    @click="replyResult(scope.row.id,'通过')"><i class="el-icon-check"></i></el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="replyResult(scope.row.id,'拒绝')"><i class="el-icon-close"></i></el-button>
                                </div>
                            </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-row>
        <el-row class="identification">
            <el-card class="box-card">
                <div class="head">
                    <h4>用户认证<span>({{ identify.notRead }}条未回复)</span></h4>
                    <el-button-group>
                        <i class="el-icon-arrow-left" @click="identify_goToPage(-1)"></i>
                        <i class="el-icon-arrow-right"  @click="identify_goToPage(1)"></i>
                    </el-button-group>
                </div>
                <el-table
                    :data="identify.item"
                    :header-cell-style="{textAlign:'center'}"
                    :cell-style="{textAlign:'center'}"
                    style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="认证人">
                                <span>{{ props.row.identifyPerson }}</span>
                            </el-form-item>
                            <el-form-item label="认证类型">
                                <span>{{ props.row.identifyType }}</span>
                            </el-form-item>
                            <el-form-item label="相关信息">
                                <div class="imgList" v-for="(item,i) in props.row.img" :key="i">
                                    <img @click="imgPlay(item)" :src="item"/>
                                    <!-- {{item}} -->
                                </div>
                            </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="日期"
                        prop="date">
                    </el-table-column>
                    <el-table-column
                        label="认证人"
                        prop="identifyPerson">
                    </el-table-column>
                    <el-table-column
                        label="联系电话"
                        prop="phone">
                    </el-table-column>
                    <el-table-column
                        label="认证类型"
                        prop="identifyType">
                    </el-table-column>
                    <el-table-column
                        label="批复">
                            <template slot-scope="scope">
                                <!-- <i class="el-icon-success"></i>
                                <i class="el-icon-error"></i> -->
                                <el-button size="mini" type="primary" v-if="scope.row.statu == '已通过'">{{ scope.row.statu }}</el-button>
                                <el-button size="mini" type="danger" v-else-if="scope.row.statu == '已拒绝'">{{ scope.row.statu }}</el-button>
                                <div v-else>
                                    <el-button
                                    size="mini"
                                    @click="identifyResult(scope.row.id,'通过')"><i class="el-icon-check"></i></el-button>
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="identifyResult(scope.row.id,'拒绝')"><i class="el-icon-close"></i></el-button>
                                </div>
                            </template>
                    </el-table-column>
                </el-table>
            </el-card>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            replyPage:0,
            identifyPage:0,
            projectReply:{
                notRead:5,
                pageNum:3,
                item: [{
                    id:1,
                    statu:'',
                    date: '12987122',
                    publisher: '田宇',
                    title: '的说法是范德萨的说法大三',
                    introduction: '范德萨发生发撒范德萨范德萨发放黄金卡舒服就对会撒娇发大水返回键萨法回到家撒回复绝对是范德萨',
                    shortTitle: '好滋好味鸡蛋仔',
                    classify: '动漫',
                    address: '上海市 xx区',
                    interval: '2018-07-11 13:34:31 至 2018-7-11 19:23:11',
                    moneyTarget: '10333'
                }, {
                    id:2,
                    statu:'已通过',
                    date: '12987122',
                    publisher: '田宇',
                    title: '的说法是范德萨的说法大三',
                    introduction: '范德萨发生发撒范德萨范德萨发放黄金卡舒服就对会撒娇发大水返回键萨法回到家撒回复绝对是范德萨',
                    shortTitle: '好滋好味鸡蛋仔',
                    classify: '动漫',
                    address: '上海市 xx区',
                    interval: '2018-07-11 13:34:31 至 2018-7-11 19:23:11',
                    moneyTarget: '10333'
                }, {
                    id:3,
                    statu:'已拒绝',
                    date: '12987122',
                    publisher: '田宇',
                    title: '的说法是范德萨的说法大三',
                    introduction: '范德萨发生发撒范德萨范德萨发放黄金卡舒服就对会撒娇发大水返回键萨法回到家撒回复绝对是范德萨',
                    shortTitle: '好滋好味鸡蛋仔',
                    classify: '动漫',
                    address: '上海市 xx区',
                    interval: '2018-07-11 13:34:31 至 2018-7-11 19:23:11',
                    moneyTarget: '10333'
                }, {
                    id:4,
                    statu:'已拒绝',
                    date: '12987122',
                    publisher: '田宇',
                    title: '的说法是范德萨的说法大三',
                    introduction: '范德萨发生发撒范德萨范德萨发放黄金卡舒服就对会撒娇发大水返回键萨法回到家撒回复绝对是范德萨',
                    shortTitle: '好滋好味鸡蛋仔',
                    classify: '动漫',
                    address: '上海市 xx区',
                    interval: '2018-07-11 13:34:31 至 2018-7-11 19:23:11',
                    moneyTarget: '10333'
                }]
            },
            identify:{
                notRead:3,
                pageNum:3,
                item:[{
                    id:2,
                    statu:'已通过',
                    date:'2018-2-1',
                    identifyPerson:'田宇',
                    identifyType:'身份认证',
                    phone:'15198xxxx',
                    img:[require('./../../../../assets/2.jpg'),require('./../../../../assets/2.jpg')]
                },{
                    id:3,
                    statu:'已通过',
                    date:'2018-2-1',
                    identifyPerson:'田宇',
                    identifyType:'身份认证',
                    phone:'15198xxxx',
                    img:[require('./../../../../assets/2.jpg'),require('./../../../../assets/2.jpg')]
                },{
                    id:5,
                    statu:'已通过',
                    date:'2018-2-1',
                    identifyPerson:'田宇',
                    identifyType:'身份认证',
                    phone:'15198xxxx',
                    img:[require('./../../../../assets/2.jpg'),require('./../../../../assets/2.jpg')]
                }]
            }
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        enlargeImg(){
            const body = document.getElementsByTagName('body')[0]
            const cover = document.createElement('div')
            cover.className = "big"
            cover.style.width = document.body.clientWidth+'px'
            cover.style.height = document.body.clientHeight+'px'
            body.appendChild(cover)
            const img = document.createElement('img')
            img.className = 'enlargeImage'
            cover.appendChild(img)
            cover.onclick = () => {
                cover.style.display = "none"
            }
        },
        imgPlay(url){
            document.querySelector('.big').style.display = "block"
            let img = document.querySelector('.big .enlargeImage')
            img.src = url
        },
        replyResult(id,result){
            this.$axios.post('/replyResult',{
                itemId:id,
                result:result
            }).then(res => this.projectReply = res.data).catch(err => this.$message.error('操作失败，请重试'))
        },
        identifyResult(id,result){
            this.$axios.post('/identifyResult',{
                itemId:id,
                result:result
            }).then(res => this.identify = res.data).catch(err => this.$message.error('操作失败，请重试'))
        },
        reply_goToPage(data){
            if(data == -1 && this.replyPage+data <= 0){
                this.$message.warning('已经是第一页了')
            }else if(data == 1 && this.replyPage+data >= this.projectReply.pageNum){
                this.$message.warning('已经是最后一页了')
            }else{
                this.replyPage = this.replyPage+data
                this.$axios.post('/reply_goToPage',{
                    page:this.page
                }).then(res => this.projectReply = res.data).catch(err => this.$message.error('获取失败'))
            }
        },
        identify_goToPage(data){
            if(data == -1 && this.identifyPage+data <= 0){
                this.$message.warning('已经是第一页了')
            }else if(data == 1 && this.identifyPage+data >= this.identify.pageNum){
                this.$message.warning('已经是最后一页了')
            }else{
                this.identifyPage = this.identifyPage+data
                this.$axios.post('/identify_goToPage',{
                    page:this.page
                }).then(res => this.identify = res.data).catch(err => this.$message.error('获取失败'))
            }
        }
    },
    mounted () {
        this.enlargeImg()
    }
}
</script>
<style lang="scss" scoped>
.messageList{
    padding: 10px;
    .apply{
        .demo-table-expand {
            font-size: 0;
        }
        .demo-table-expand label {
            width: 90px;
            color: #99a9bf;
        }
        .demo-table-expand{
            .el-form-item:not(:last-child){
                margin-right: 0;
                margin-bottom: 0;
                width: 50%;
            }
        }
        .demo-table-expand{
            .el-form-item:nth-last-child(2){
                width:100%;
            }
        }
        .el-icon-success{
            color: #67C23A;
        }
        .el-icon-error{
            color: #F56C6C;
        }
    }
    /deep/ .el-form-item__label{
        color: #99a9bf;
    }
    .identification{
        margin:10px 0;
        .imgList{
            width:30%;
            display: inline-block;
            margin-right: 10px;
            img{
                width:100%;
                cursor: pointer;
            }
        }
    }
    .head{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &>div{
            margin-right: 20px;
            cursor: pointer;
        }
        h4{
            border-left: 3px solid #7097c9;
            padding-left: 5px;
            margin: 10px;
            span{
                font-size:0.8em;
                color:#707275;
            }
        }
    }
}
</style>