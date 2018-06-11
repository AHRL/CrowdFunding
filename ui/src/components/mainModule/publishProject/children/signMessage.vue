<template>
    <div class="signMessage">
        <div class="coverImg">
            <h4>项目封面图</h4>
            <el-row>
                <el-col :span="14">
                    <el-upload
                        class="upload-demo"
                        drag
                        action="https://jsonplaceholder.typicode.com/posts/"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将图片拖到此处，或<em>点击上传</em></div>
                    </el-upload>
                </el-col>
                <el-col :span="9">
                    <p>尺寸 800px*600px，格式jpg、png、gif，不大于3MB</p>
                </el-col>
            </el-row>
            <div class="small-font tips">图片应简洁清晰展示主题，图中除 Logo 外的其他介绍文字禁止出现。</div>
        </div>
        <div class="title">
            <h4>项目标题</h4>
            <div class="input">
                <el-input type="text" v-model="title" placeholder="请输入项目标题，最多26个字"></el-input>
                <span class="num-limit">{{ title.length }}/26</span>
            </div>
            <div class="small-font tips">标题中需带有产品名称及类别，可添加宣传语作为副标题。</div>
        </div>
        <div class="short-title">
            <h4>项目短标题</h4>
            <div class="input">
                <el-input type="text" v-model="shortTitle" placeholder="请输入项目短标题，最多10个字"></el-input>
                <span class="num-limit">{{ shortTitle.length }}/10</span>
            </div>
            <div class="small-font tips">用于首页推荐、榜单、短信通知等</div>
        </div>
        <div class="intro">
            <h4>项目简介</h4>
            <div class="textarea">
                <el-input type="textarea" v-model="intro" :maxlength="120" :rows="5" resize="none" placeholder="请填写项目简介，最多120个字"></el-input>
                <span class="num-limit">{{ intro.length }}/120</span>
            </div>
            <div class="small-font tips">简介需清晰准确地阐述项目核心内容，会随项目被分享到社交平台。</div>
        </div>
        <div class="class">
            <h4>项目类别</h4>
            <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state3"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect">
                <i
                    class="el-icon-edit el-input__icon"
                    slot="suffix"
                    @click="handleIconClick">
                </i>
                <template slot-scope="{ item }">
                    <div class="name">{{ item.value }}</div>
                    <span class="addr">{{ item.address }}</span>
                </template>
            </el-autocomplete>
        </div>
        <div class="city">
            <input type="text">
        </div>
        <div class="wrap">
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos labore sit vel itaque delectus atque quos magnam assumenda quod architecto perspiciatis animi.</div>
        </div>
    </div>
</template>
<script>
export default {
     data() {
      return {
        imageUrl: '',
        title:'',
        shortTitle:'',
        intro:'',
        restaurants:[],
        state3:''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
       querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
       loadAll() {
        return [
          { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
          { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
          { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
          { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
          { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
          { "value": "贡茶", "address": "上海市长宁区金钟路633号" }
        ]
       },
        handleSelect(item) {
            console.log(item);
        },
        handleIconClick(ev) {
            console.log(ev);
        }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
}
</script>
<style lang="scss" scoped>
.signMessage{
    margin: 50px 0;
    h4{
        color:black;
    }
    .small-font{
        font-size: 14px;
    }
    .tips{
        margin:10px 0;
        padding: 10px 5px;
    }
    .input{
        position:relative;
        .num-limit{
            position: absolute;
            right:5px;
            top: 10px;
        }
    }
    .textarea{
        position:relative;
        .num-limit{
            position: absolute;
            right:5px;
            top: 90px;
        }
    }
    .class{
        .el-autocomplete{
            width: 100%;
        }
        .my-autocomplete {
            li {
                line-height: normal;
                padding: 7px;

                .name {
                text-overflow: ellipsis;
                overflow: hidden;
                }
                .addr {
                font-size: 12px;
                color: #b4b4b4;
                }

                .highlighted .addr {
                color: #ddd;
                }
            }
        }
    }
    .wrap {
        width:200px;
  height: 60px;
  line-height: 20px;
  overflow: hidden;
}
.wrap .text {
  float: right;
  margin-left: -5px;
  width: 100%;
  word-break:break-all;
}
.wrap::before {
  float: left;
  width: 5px;
  content: '';
  height: 40px;
}
.wrap::after {
  float: right;
  content: "...";
  height: 20px;
  line-height: 20px;
  padding-right: 5px;
  text-align: right;
  width: 3em;
  margin-left: -3em;
  position: relative;
  left: 100%;
  top: -20px;
  padding-right: 5px;
  /* 显示更好的效果 */
  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), to(white), color-stop(50%, white));
  background: -moz-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
  background: -o-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
  background: -ms-linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%, white);
}

}
</style>
