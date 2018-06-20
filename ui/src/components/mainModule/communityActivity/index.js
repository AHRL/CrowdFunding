import publish from './children/publish'
export default {
    name: 'communityActivity',
    data() {
        return {
            pubText: '',
            img: [
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
                require('../../../assets/2.jpg'),
            ]
        }
    },
    components: {
        publish
    }
}