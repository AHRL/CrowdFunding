import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //共用数据
    user: {
        name: '',
        img: ''
    },
    search: ''
}

const mutations = {
    //方法 第一个参数为state
    LOGIN_IN({ user }, name, img) {
        user.name = name
        user.img = img
    },
    LOGIN_OUT({ user }) {
        user.name = ''
        user.img = ''
    },
    SEARCH({ search }) {
        this.$axios.post('', {
            search: search
        }).then((response) => {
            this.$router.push({
                path: '/search',
                params: {
                    response
                }
            })
        })
    }
}

const actions = {
    //进行一些异步操作

}

const getters = {
    //对数据进行监听，count:function(){}监听count数据，变化就执行函数
}

const common = {
    state,
    mutations,
    getters,
    actions
}

const store = new Vuex.Store({
    modules: {
        common: common
    }
})

export default store