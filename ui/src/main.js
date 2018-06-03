// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/display.css'
import {
    Row,
    Col,
    Container,
    Header,
    Footer,
    Main,
    Menu,
    Submenu,
    MenuItem,
    Input,
    Button,
    Tabs,
    TabPane,
    Form,
    FormItem,
    Switch,
    Steps,
    Step,
    Carousel,
    CarouselItem
} from 'element-ui'
Vue.use(Vuex)
Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Footer)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})