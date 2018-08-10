import Vue from 'vue'
import Router from 'vue-router'
import personalRoute from '../components/mainModule/personalCenter/router'

Vue.use(Router)

const vueRouter = new Router({
    // mode: 'hash',
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
    }, {
        path: '/user/:id',
        component: resolve => require(['../components/user/user'], resolve)
    }, {
        path: '/project/:id',
        component: resolve => require(['../components/project/project'], resolve)
    }, {
        path: '/activity/:id',
        component: resolve => require(['../components/activity/activity'], resolve)
    }, {
        path: '/search',
        component: resolve => require(['../components/search/search'], resolve)
    },{
        path: '/writeArticle',
        component: resolve => require(['../components/writeArticle/writeArticle'], resolve)
    }]
})

export default vueRouter