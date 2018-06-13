<template>
		<el-container class="container">
			<el-header class="header">
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple"><img src="./image/1.jpeg" ></div></el-col>
          <el-col :span="4" :offset="16"><div class="grid-content bg-purple-light">退出</div></el-col>
        </el-row>
      </el-header>
			<el-container class="container">
				<el-aside class="aside">Aside</el-aside>
				<el-main class="main">Main</el-main>
			</el-container>
		</el-container>
</template>

<script>
	export default {
  //   beforeCreate () {
  //     //思路: token验证机制
  //     //如果没有登录则让用户跳转到登录组件
  //     //否则就什么都不做,允许进来
  //     //从本地存储中拿到 token    
  //     //如果有,则让其通过,如果没有,则跳转至登录页面
  //     const token = window.sessionStorage.getItem('token')
  //     if(!token){
  //       this.$router.push({
  //         name: 'login'
  //       })
  //     }
  // },
  // data () {
  //   return {}
  // }
  }
</script>

<style>
.container{
  height: 100%;
}
.header{
  background-color: #B3c0d1;
  padding-left: 0px;
  line-height:60px;
}
.container .header img{
  width: 300px;
  height: 60px;
}
.aside{ 
  background-color: #D3DCE6;
}
.main{
  background-color: #E9EEF3;
  height: 100%;
}
</style>
