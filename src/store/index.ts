import { createStore } from 'vuex'

type StateData = {
  searchValue: string;
}
export default createStore({
  state: {
    searchValue: '',
  },
  getters: {
    getSearchValue(state: StateData): string {
      return state.searchValue;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
