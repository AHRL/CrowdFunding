import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //共用数据
    user: {
        img:require('../assets/user.png')
    }
}

const mutations = {
    //方法 第一个参数为state
    LOGIN_IN(state, data) {
        state.user = data
    },
    LOGIN_OUT(state) {
        state.user = {}
    },
    CHANGE_IMG({user},data){
        user.img = data
    },
    CHANGE_FOCUSNUM({user},data){
        user.focusNum = data
    },
    CHANGE_FOCUS({user},data){
        user.focusNum = data.focusNum
        user.focus = data.focus
    },
    CHANGE_FANS({user},data){
        user.fansNum = data.focusNum
        user.fans = data.focus
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