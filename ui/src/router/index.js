import Vue from 'vue'
import Router from 'vue-router'
import findProject from '../components/mainModule/findProject/findProject'
import communityActivity from '../components/mainModule/communityActivity/communityActivity'
import publishProject from '../components/mainModule/publishProject/publishProject'
import personalCenter from '../components/mainModule/personalCenter/personalCenter'
import manageCenter from '../components/mainModule/manageCenter/manageCenter'
import login from '../components/mainModule/login/login'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    routes: [{
        path: '*',
        redirect: '/findProject'
    }, {
        path: '/findProject',
        name: 'findProject',
        component: resolve => require(['../components/mainModule/findProject/findProject'], resolve)
    }, {
        path: '/communityActivity',
        name: 'communityActivity',
        component: resolve => require(['../components/mainModule/communityActivity/communityActivity'], resolve)
    }, {
        path: '/publishProject',
        name: 'publishProject',
        component: resolve => require(['../components/mainModule/publishProject/publishProject'], resolve)
    }, {
        path: '/personalCenter',
        name: 'personalCenter',
        component: resolve => require(['../components/mainModule/personalCenter/personalCenter'], resolve)
    }, {
        path: '/manageCenter',
        name: 'manageCenter',
        component: resolve => require(['../components/mainModule/manageCenter/manageCenter'], resolve)
    }, {
        path: '/login',
        name: 'login',
        component: resolve => require(['../components/mainModule/login/login'], resolve)
    }]
})