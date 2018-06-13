import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'
import Home from '@/components/home/home'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: "/",
      component: Home
    },
  ]
})

export default router

//添加路路由守卫拦截器(导航钩子,拦截器)
router.beforeEach ((to, from, next) => {
  //拿到当前请求的视图路径标识
  //如果是登录组件,则直接放行通过
  //如果是非登陆组件,则检查 Token 令牌
    //有令牌则通过
    ///无令牌则让他去登陆组件 '/login' 
    // console.log(from)
    // console.log(to)
    if(to.name === 'login') {
      next()
    }else{
      const token = window.sessionStorage.getItem('token')
      if(!token) {
        next({
          name: 'login'
        })
      }else {
        next()
      }
    }
})







