const routers = [{
        path: '/',
        name: 'myMessage',
        redirect: 'myMessage'
    },
    {
        path: 'myMessage',
        name: 'myMessage',
        component: resolve => require(['../children/myMessage'], resolve)
    },
    {
        path: 'myActivity',
        name: 'myActivity',
        component: resolve => require(['../children/myActivity'], resolve)
    },
    {
        path: 'myProject',
        name: 'myProject',
        component: resolve => require(['../children/myProject'], resolve)
    },
    {
        path: 'mySetting',
        name: 'mySetting',
        component: resolve => require(['../children/mySetting'], resolve)
    }
]
export default routers