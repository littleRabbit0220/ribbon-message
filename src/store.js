
import Vuex from 'vuex'
const store = new Vuex.Store({
  state() {
    return {
      draft1: '',
      draft2: '',
      draft3: '',
      draft4: '',
      draft5: '',
      draft6: ''
    }
  },
  mutations: {
    setDraft1(state, draft) {
      state.draft1 = draft;
    },
    setDraft2(state, draft) {
      state.draft2 = draft;
    },
    setDraft3(state, draft) {
      state.draft3 = draft;
    },
    setDraft4(state, draft) {
      state.draft4 = draft;
    },
    setDraft5(state, draft) {
      state.draft5 = draft;
    },
    setDraft6(state, draft) {
      state.draft6 = draft;
    },
  },
  actions: {
    setDraft1(context, draft) {
      context.commit('setDraft1', draft)
    },
    setDraft2(context, draft) {
      context.commit('setDraft2', draft)
    },
    setDraft3(context, draft) {
      context.commit('setDraft3', draft)
    },
    setDraft4(context, draft) {
      context.commit('setDraft4', draft)
    },
    setDraft5(context, draft) {
      context.commit('setDraft5', draft)
    },
    setDraft6(context, draft) {
      context.commit('setDraft6', draft)
    }
  },
  getters: {
    getDraft1(state) {
      return state.draft1;
    },
    getDraft2(state) {
      return state.draft2;
    },
    getDraft3(state) {
      return state.draft3;
    },
    getDraft4(state) {
      return state.draft4;
    },
    getDraft5(state) {
      return state.draft5;
    },
    getDraft6(state) {
      return state.draft6;
    }
  }
})

export default store