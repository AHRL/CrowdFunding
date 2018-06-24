<template>
    <div class="mySetting">
        <h2>我的设置</h2>
        <!-- <div class="step" data-content="实名认证">
            <h4>实名认证</h4>
            <div>
                <span>手机号码：</span>
                <span>15198262157</span>
                <a href="javascript:;">修改手机号</a>
            </div>
            <div>
                <span>身份证号码：</span>
                <span>511621199711074644</span>
            </div>
            <div>
                <span>手机号码：</span>
                <span>15198262157</span>
            </div>
        </div> -->
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="实名认证" name="1">
                <div>
                    <el-alert
                        :closable="false"
                        title="手机绑定"
                        type="success"
                        show-icon>
                        <div class="wordTip">
                            绑定手机后，您即可享受丰富的手机服务，如手机找回密码、开通手机动态密码等。
                        </div>
                        <el-button plain>修改手机号</el-button>
                    </el-alert>
                    <el-alert
                        :closable="false"
                        title="身份认证"
                        type="warning"
                        show-icon>
                        <div class="wordTip">身份认证后，将立即增加您的信任度。</div>
                        <el-button plain>立即认证</el-button>
                    </el-alert>
                </div>
            </el-collapse-item>
            <el-collapse-item title="账号验证" name="2">
                <div>
                    <span>当前安全等级：</span>
                    <el-rate
                        disabled
                        v-model="value2"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                </div>
            </el-collapse-item>
            <el-collapse-item title="消息通知" name="3">
                
            </el-collapse-item>
            <el-collapse-item title="权限查看" name="4">
                
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
 export default {
    data() {
      return {
        activeNames: ['1','2','3','4'],
        value2:3
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }

</script>
<style lang="scss" scoped>
    .mySetting{
        color: black;
        // .step{
        //     padding-left: 10px;
        //     background: rgb(235, 243, 243);
        //     position: relative;
        //     width: 100%;
        //     border-radius: 5px;
        //     border-left:5px solid rgb(252, 140, 88);
        //     &:after{
        //         content: attr(data-content);
        //         display: block;
        //         position: absolute;
        //         top: 0;
        //         right: 0;
        //         font-size: 18px;
        //         width: 7rem;
        //         padding: 0 1rem;
        //         overflow: hidden;
        //         text-align: right;
        //         color: rgba(255, 255, 255, .9);
        //         background: linear-gradient(45deg, transparent 0%, transparent 30%, #e5645e 30%, #e5645e 100%)
        //     }
        // }
        .el-alert{
            padding: 20px;
            margin-bottom: 10px;
            position: relative;
            .el-button{
                width: 120px;
                position: absolute;
                right: 10px;
                bottom: 25px;
            }
        }
    }
</style>