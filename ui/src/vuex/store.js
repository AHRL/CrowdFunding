import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //共用数据
    username: ''
}

const mutations = {
    //方法 第一个参数为state
}

const actions = {
    //进行一些异步操作
}

const getters = {
    //对数据进行监听，count:function(){}监听count数据，变化就执行函数
}

const moduleA = {
    state,
    mutations,
    getters,
    actions
}

const store = new Vuex.Store({
    modules: {
        a: moduleA
    }
})

export default store