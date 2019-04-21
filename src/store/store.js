import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import * as user from '@/store/modules/user.js'
import * as item from '@/store/modules/item.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    item
  },
  state: {
    categories: ['dropdown', 'Applicance', 'Clothes', 'Funiture', 'Toys']
  }
})
