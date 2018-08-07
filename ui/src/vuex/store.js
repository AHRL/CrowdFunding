import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //共用数据
    user: {
        name: '',
        img: '',
        intro:''
    }
}

const mutations = {
    //方法 第一个参数为state
    LOGIN_IN({ user }, data) {
        user.name = data.name
        user.img = data.img
    },
    LOGIN_OUT({ user }) {
        user.name = ''
        user.img = ''
    }
}

const actions = {
    //进行一些异步操作

}

const getters = {
    //对数据进行监听，count:function(){}监听count数据，变化就执行函数
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store