import Vue from 'vue'
import Vuex from 'vuex'

// Services
import ItemService from '@/services/ItemService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    inView: 0,
    total: 0,
    categories: ['dropdown', 'Applicance', 'Clothes', 'Funiture', 'Toys']
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.items.push(item)
    },
    SET_ITEMS(state, items) {
      if (state.items.length !== 0) {
        state.items = state.items.concat(items)
      } else {
        state.items = items
      }
    },
    SET_TOTAL(state, total) {
      state.total = total
    },
    SET_INVIEW(state, start) {
      state.inView = start
    }
  },
  actions: {
    createItem({ commit }, item) {
      return ItemService.postItem(item).then(() => {
        commit('ADD_ITEM', item)
      })
    },
    fetchItems({ commit }, { percall }) {
      let start = 0
      const increment = 2
      if (this.state.inView !== start) {
        start = this.state.inView
      }
      ItemService.getItems(start, percall)
        .then(response => {
          commit('SET_ITEMS', response.data)
          commit('SET_INVIEW', start + increment)
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
