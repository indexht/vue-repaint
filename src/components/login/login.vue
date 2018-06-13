<template>
	<div class="login-wrap">
		<el-form
			class="login-form"
			ref="form" 
			:model="userForm"
			label-position="top"
			label-width="80px">
			<h2>用户登陆</h2>
			<el-form-item
			clss="font-color"
			label="用户名">
				<el-input v-model="userForm.username"></el-input>
			</el-form-item>
				<el-form-item
					clss="font-color"
					label="密码">
				<el-input
					type="password" 
					v-model="userForm.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button class="login-btn" type="primary" @click="login">立即登陆</el-button>
  		</el-form-item>
		</el-form>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data () {
		return {
			userForm: {
				username: '',
				password: ''
			}
		}
	},
	methods: {
		async login () {
				//1.采集表单数据
				const res = await axios.post('http://localhost:8888/api/private/v1/login',this.userForm)
				const data = res.data
				if(data.meta.status ===  200) {
					//$route用来拿参数
					//$router用来跳转
					//登录成功,将服务器签发给用户的 token 身份令牌记录到sessionStorage
					//其他需要使用 Token 的都去本地存储获取
					   window.sessionStorage.setItem('token',JSON.stringify(data.data))
					this.$router.push({
						name: 'home'
					})
				}
				//2.表单验证
				//3.发送请求执行登录组件
				//4.根据响应做交互
		
		}
	}
}
</script>

<style>
.login-wrap {
	background-color: aquamarine;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items:center;
}
	.login-wrap h2{
		color: #fff;
	}
.login-wrap .login-form {
    background-color: black;
    width: 400px;
    border-radius: 5%;
    padding: 30px;
}
	.el-form-item__label{
		color: aliceblue;
	}
	.login-btn {
		width: 100%;
		background-color:blue;
	}
</style>
