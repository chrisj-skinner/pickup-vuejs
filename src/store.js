import Vue from 'vue'
import Vuex from 'vuex'

// Services
import ItemService from '@/services/ItemService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    total: 0,
    categories: ['dropdown', 'Applicance', 'Clothes', 'Funiture', 'Toys']
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item)
    },
    SET_ITEMS(state, items) {
      state.items = items
    },
    SET_TOTAL(state, total) {
      state.total = total
    }
  },
  actions: {
    createItem({ commit }, item) {
      return ItemService.postItem(item).then(() => {
        commit('ADD_ITEM', item)
      })
    },
    fetchItems({ commit }, { perpage, page }) {
      ItemService.getItems(perpage, page)
        .then(response => {
          commit('SET_ITEMS', response.data)
          commit('SET_TOTAL', response.headers['x-total-count'])
        })
        .catch(error => {
          console.log('There was an error: ' + error.response)
        })
    }
  },
  getters: {
    getItemById: state => id => {
      return state.items.find(item => item.id === id)
    }
  }
})
