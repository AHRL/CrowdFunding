export default{
  install(Vue,options){
    Vue.prototype.enlargeImg = function(url){
      const body = document.getElementsByTagName('body')[0]
      const cover = document.createElement('div')
      cover.className = "enlarge"
      cover.style.width = document.body.clientWidth+'px'
      cover.style.height = document.body.clientHeight+'px'
      body.appendChild(cover)
      const close = document.createElement('i')
      close.className = 'closeImg el-icon-close'
      cover.appendChild(close)
      const img = document.createElement('img')
      img.className = 'enlargeImage'
      img.src = url
      cover.appendChild(img)
      close.onclick = () => {
          console.log('a')
          body.removeChild(cover)
      }
    }
    Vue.prototype.fmoney = function(s, n) {
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