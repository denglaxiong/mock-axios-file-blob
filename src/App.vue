<template>
  <div id="app">
    
    
    <h1>本demo演示，使用axios(带验证信息)下载文件或者预览pdf</h1>
    <h1>刷新页面即可看到效果</h1>
    <p>如果项目引用了mock，mock会拦截所有请求，并且覆盖responseType:'blob',</p>
    <p>如果要解决这个问题有三个方法</p>
    <ul>
      <li>1.所以要把src\mock\index.js文件里的true改为false</li>
      <li>2.,或者把所有引用过Mock.mock(的地方都注释掉</li>
      <li>3.如果是cli3.0，把vue.config.js文件里的.add('@/mock') 注释掉</li>
    </ul>
    <el-button type="primary"  @click="downloadfile(1)">下载</el-button>
    <el-button type="success" @click="downloadfile(2)">预览</el-button>
    <br/>
    <!-- <embed :src="pdfUrl" width="1500" height="800"/> -->
    <iframe :src="pdfUrl" width="1500" height="800"> </iframe>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pdfUrl:''
    }
  },
  created(){
    
  },
  methods:{
    downloadfile(type){
      this.axios({
          method: "get",
          url: '/wicrecloud-essential-data/pdfview/getWatermarkPdfurl?classify=1&sourceUrl=https://apartment-dev.oss-cn-zhangjiakou.aliyuncs.com/1571116429311201910151313481563509918264qianmoBilin.pdf',
          // url: 'http://47.94.252.19/wicrecloud-essential-data/pdfview/getWatermarkPdfurl?classify=1&sourceUrl=https://apartment-dev.oss-cn-zhangjiakou.aliyuncs.com/1571116429311201910151313481563509918264qianmoBilin.pdf',
          responseType: 'blob',
          //data: data //需要传的字段
          headers: {'Blade-Auth': ' bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJ1c2VyX25hbWUiOiJiYWlsaXpoZSIsImF2YXRhciI6Imh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9CaWF6ZmFueG1hbU5Sb3h4VnhrYS5wbmciLCJhdXRob3JpdGllcyI6WyJjb21wZXRlbnRfYWNjb3VudGluZyIsIumihOeul-e8luWItuW8gOWPkeinkuiJsiIsImNhc2hpZXIiLCLooYzmlL_nrqHnkIYiLCIwYmUyNWUzMS1kNjE1LTQyZDItYmRlOC1jMTkzMDFlMDU4MDQiLCJhZG1pbiIsInByb2plY3RfbWFuYWdlciIsIumjjumTg-a1i-ivlSIsIjBlMzUxZWI3LTZmZGEtNDRmNC1hMWUyLTkzZTlhNzYyZDJmOSIsImFzc2lzdGFudF9hY2NvdW50YW50Il0sImNsaWVudF9pZCI6InNhYmVyIiwicm9sZV9uYW1lIjoiYWRtaW4sMGUzNTFlYjctNmZkYS00NGY0LWExZTItOTNlOWE3NjJkMmY5LDBiZTI1ZTMxLWQ2MTUtNDJkMi1iZGU4LWMxOTMwMWUwNTgwNCxjb21wZXRlbnRfYWNjb3VudGluZyxjYXNoaWVyLGFzc2lzdGFudF9hY2NvdW50YW50LOmjjumTg-a1i-ivlSzooYzmlL_nrqHnkIYs6aKE566X57yW5Yi25byA5Y-R6KeS6ImyLHByb2plY3RfbWFuYWdlciIsImxpY2Vuc2UiOiJwb3dlcmVkIGJ5IGJsYWRleCIsInVzZXJfaWQiOjExNjE0NzU3MDQ3MzYzMjk3MjksInJvbGVfaWQiOiIxMTM1NDE5NjkyNzYyMDk1NjE4LDIyNDcxOTc2MzM0NzczNTA0MTAsMTE2NTE3NTQzMzIwMTg0ODMyMSwxMTY1MTc1NTgyMTc1MTM3Nzk0LDExNjUxODc1NTk4MDcxMjc1NTQsMTE2NjI0NDU4NDgxMzEwNTE1MywxMTYxNDc1NzM5NTI4MDgxNDA5LDExNjE0NzU3NDMxOTgwOTc0MTAsMTE2ODM2MjA0MDAxMjc0MjY1NywxMTY5MTk1MzAzMDA2NTQzODczIiwic2NvcGUiOlsiYWxsIl0sIm5pY2tfbmFtZSI6IueZveWIqeWTsuW5u-iFvuaZuuiDvSIsImp0aSI6IjliMjZjYzM3LTZlOWEtNDhiYy1iY2YwLWVjNDk3MDRhNTI0MSIsImFjY291bnQiOiJiYWlsaXpoZSJ9.VzrnvN6VjZz3LX3sF2HVf1N35GnaG-Om13RyUTgVv5I'
          ,'Content-Type':'application/json'
          },//使用headers模拟登陆信息
        }).then((res) => {
          console.log(res)
          let blob = new Blob([res.data], {
            type: `application/pdf` //word文档为msword,pdf文档为pdf
          });
          let objectUrl = URL.createObjectURL(blob);
          let link = document.createElement("a");
          let fname = `到底可以吗pdf`; //下载文件的名字
          link.href = objectUrl;
          // this.url=objectUrl
          this.urlpdf=objectUrl.toString()
          // this.urlpdf = 'https://apartment-dev.oss-cn-zhangjiakou.aliyuncs.com/1571116429311201910151313481563509918264qianmoBilin.pdf'
          console.log('sdfdfd',this.urlpdf)
          // this.urlpdf = 'https://apartment-dev.oss-cn-zhangjiakou.aliyuncs.com/1571116429311201910151313481563509918264qianmoBilin.pdf'
          if(type == 1 ){
            link.setAttribute("download", fname);
            // window.URL.revokeObjectURL(link.href);
            document.body.appendChild(link);
            link.click();
          }else{
            this.pdfUrl=objectUrl
          }
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
