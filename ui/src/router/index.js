import Vue from 'vue'
import Router from 'vue-router'
import personalRoute from '../components/mainModule/personalCenter/router'

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
        component: resolve => require(['../components/mainModule/personalCenter/personalCenter'], resolve),
        children: personalRoute
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