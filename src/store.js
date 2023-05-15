
import Vuex from 'vuex'
const store = new Vuex.Store({
  state() {
    return {
        answer1: '',
    }
  },
  mutations: {
    setAnswer1(state, answer) {
      state.answer1 = answer;
    }
  },
  actions: {
    setAnswer1(context, answer) {
      context.commit('setAnswer1', answer)
    }
  },
  getters: {
    getAnswer1(state) {
      return state.answer1;
    }
  }
})

export default store