// Import options
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
const state = {
  dataContainer: [],
};

export default {
  namespaced: true,
  getters: getters,
  mutations: mutations,
  actions: actions,
  state,
};
