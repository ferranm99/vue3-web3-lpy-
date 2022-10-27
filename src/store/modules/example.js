
// Store Modules are used to organize Vuex store contents.
// Create a new module by duplicating this component and giving it a meaningful name

import axios from "../../../utils/axios";

const state = {
  stateContents: { data:["contents here"]},
};

// getters
const getters = {
  // These are the getter functions used to obtain state contents in a clean way.
  getStateContents: state => state.stateContents,
  getFirstContentElement: state => state.stateContents && state.stateContents.data && state.stateContents.data[0],
};

// actions
const actions = {
  // These are the action functions. They are considered middleware and allow async callbacks/promises to perform long/remote operations. 
  // Module has access to the namespaced vuex functionality, payload is the single payload object sent in when calling the function.
  fetchStateContents: async (module, payload) => { /* eslint-disable-line */
    //let { commit, dispatch, getters, state, rootGetters, rootState } = module;

    // async action will await
    var randomResult = await axios.get('http://jservice.io/api/random');
    console.log("Blah", randomResult);

    // Commit will send mutation command.
    module.commit("updateStateContents", { stateContents:randomResult });

  }
};

// mutations
const mutations = {
  // Mutations are the only place that state should be updated, and they should be performed relatively fast.
  updateStateContents(state, mergeInfo) {
    if (mergeInfo && mergeInfo.stateContents) {
      state.stateContents = mergeInfo.stateContents;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};