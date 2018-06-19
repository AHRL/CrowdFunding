export default {
    data() {
        return {
            isCollapse: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        onSubmit() {
            // console.log(this.$route.options.routers)
        }
    },
    mounted() {
        this.onSubmit()
    }
}