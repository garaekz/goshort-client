// store/index.js
import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import stack from '@/store/modules/stack'

const store = createStore({
    modules: {
        auth,
        stack
    },
})

export default store
