<template>
  <div class="writeArticle">
    <div>
      <div style="text-align:center">
        <img :src="require('@/assets/write.png')">
        <img :src="require('@/assets/feather_write.png')">
      </div>
      <el-form>
        <el-form-item label="">
          <el-col :span="20">
            <el-input type="text" v-model="title" placeholder="输入标题"></el-input>
          </el-col>
          <el-col :span="3" :offset="1">
            <el-button type="danger" @click="pubArticle">发表长文</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
    <div id="editor">
      <span>请输入文章正文</span>
    </div>
  </div>
</template>
<script>
var E = require('wangeditor')
var editor = new E('#editor')
export default {
  data () {
    return {
      title:''
    }
  },
  mounted () {
    editor.create()
  },
  methods: {
    pubArticle(){
      if(!this.title){
        this.$message({
          type:'info',
          message:'请输入文章标题'
        })
      }else if(!editor.txt.text()){
        this.$message({
          type:'info',
          message:'请输入文章正文'
        })
      }else{
        this.$axios.post('/pubArticle',{
          title:this.title,
          content:editor.txt.text()
        }).then((res) => {
          this.$router.push('/communityActivity')
        })
      }
    }
  }
}
</script>
<style scoped>
.writeArticle{
  width:80%;
  margin: 100px auto;
}
#editor{
  min-width: 500px;
}
.el-form{
  margin: 20px auto;
}
/* .wavy-line {
    display: inline-block;
    width: 20rem;
    height: 7.5px;
    background-size: 15px 15px;
    background-repeat: repeat-x;
    background-image: linear-gradient(135deg,transparent 45%,black 55%,transparent 60%),
    linear-gradient(45deg,transparent 45%,black 55%,transparent 60%);
} */
</style>
