import { createStore } from 'vuex'
import {Library, PopupData} from "@/types/libraries";

type StateData = {
  searchValue: string;
  popupRowData: PopupData
};
export default createStore({
  state: {
    searchValue: '',
    popupRowData: {} as PopupData
  },
  getters: {
    getSearchValue(state: StateData): string {
      return state.searchValue;
    },
    getPopupRowData(state: StateData): PopupData {
      return state.popupRowData;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
