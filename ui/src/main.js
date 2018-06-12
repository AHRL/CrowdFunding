// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/display.css'
import { Notification } from 'element-ui';
import 'font-awesome/css/font-awesome.css'
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
    Carousel,
    CarouselItem,
    Progress,
    Collapse,
    CollapseItem,
    Card,
    Pagination,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Steps,
    Step,
    Alert,
    Checkbox,
    Radio,
    Upload,
    Autocomplete,
    DatePicker
} from 'element-ui'

Vue.use(Vuex)
Vue.prototype.router = router
Vue.prototype.$ajax = axios
Vue.prototype.$notify = Notification

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
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Progress)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Card)
Vue.use(Pagination)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Autocomplete)
Vue.use(DatePicker)
    // 设置http拦截器
    // axios.interceptors.request.use(function(config) {
    //     // 在发送请求之前做些什么
    //     config.url = 'http://127.0.0.1:7070/' + config.url
    //     return config;
    // }, function(error) {
    //     // 对请求错误做些什么
    //     return Promise.reject(error);
    // });
    // Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})