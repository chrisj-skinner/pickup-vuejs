import ItemService from '@/services/ItemService.js'

export const namespaced = true

export const state = {
  items: [],
  inView: 0,
  total: 0,
  item: {},
  loadingStatus: 'notLoading'
}
export const mutations = {
  ADD_ITEM(state, item) {
    state.items.push(item)
  },
  // merges each API call array of items into the state.items []
  SET_ITEMS(state, items) {
    if (state.items.length !== 0) {
      state.items = state.items.concat(items)
    } else {
      state.items = items
    }
  },
  // used to calculate when to disabled the show more button
  SET_TOTAL(state, total) {
    state.total = total
  },
  // this sets the current number of items in view
  // used to calculate a _start point in API call
  SET_INVIEW(state, start) {
    state.inView = start
  },
  SET_ITEM(state, item) {
    state.item = item
  },
  SET_LOADING_STATUS(state, status) {
    state.loadingStatus = status
  }
}
export const actions = {
  createItem({ commit }, item) {
    return ItemService.postItem(item).then(() => {
      commit('ADD_ITEM', item)
    })
  },
  fetchItems({ commit }, { percall }) {
    let start = 0
    const increment = 2
    if (state.inView !== start) {
      start = state.inView
    }
    commit('SET_LOADING_STATUS', 'loading')
    ItemService.getItems(start, percall)
      .then(response => {
        commit('SET_LOADING_STATUS', 'notLoading')
        commit('SET_ITEMS', response.data)
        commit('SET_INVIEW', start + increment)
        commit('SET_TOTAL', response.headers['x-total-count'])
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  },
  fetchItem({ commit, getters }, id) {
    // first try to get the current item from the store
    // saves an API call
    const item = getters.getItemById(id)
    if (item) {
      commit('SET_ITEM', item)
    } else {
      commit('SET_LOADING_STATUS', 'loading')
      ItemService.getItem(id)
        .then(response => {
          commit('SET_LOADING_STATUS', 'notLoading')
          commit('SET_ITEM', response.data)
        })
        .catch(() => {
          console.log('There was an error getting item #:' + id)
        })
    }
  }
}
export const getters = {
  getItemById: state => id => {
    return state.items.find(item => item.id === id)
  }
}
