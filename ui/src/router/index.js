import Vue from 'vue'
import Router from 'vue-router'
import findProject from '../components/mainModule/findProject'
import communityActivity from '../components/mainModule/communityActivity'
import publishProject from '../components/mainModule/publishProject'
import personalCenter from '../components/mainModule/personalCenter'
import manageCenter from '../components/mainModule/manageCenter'
import login from '../components/mainModule/login'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '*',
        redirect: '/findProject'
    }, {
        path: '/findProject',
        name: 'findProject',
        component: findProject
    }, {
        path: '/communityActivity',
        name: 'communityActivity',
        component: communityActivity
    }, {
        path: '/publishProject',
        name: 'publishProject',
        component: publishProject
    }, {
        path: '/personalCenter',
        name: 'personalCenter',
        component: personalCenter
    }, {
        path: '/manageCenter',
        name: 'manageCenter',
        component: manageCenter
    }, {
        path: '/login',
        name: 'login',
        component: login
    }]
})