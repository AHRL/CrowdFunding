import contract from './children/contract'
import signMessage from './children/signMessage'
import editMore from './children/editMore'
import wait from './children/wait'
import team from './children/team'
export default {
    name: 'publishProject',
    data() {
        return {
            activeIndex: 3
        }
    },
    methods: {
        changeIndex: () => {

        }
    },
    components: {
        contract,
        signMessage,
        editMore,
        wait,
        team
    }
}