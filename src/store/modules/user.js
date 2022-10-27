import axios from '../../../utils/axios'



const state = {
  userDetails: null,
  userCreated: null,
  userCreatedError: null,
  passwordUpdateResponse: null,
};

// getters
const getters = {
  passwordUpdateResponse: state => state.passwordUpdateResponse,
  userDetails: state => state.userDetails,
  userLoggedIn: state => {

    if (state.userDetails && state.userDetails.apiKey) {
      return true;
    }
    //var urlParams = new URLSearchParams(window.location.search);
    return false;
    //"5329dfbf-ff68-497a-a52e-2f0146120180"
  }
};

// actions
const actions = {
  updatePassword: async function (module, payload) {
    await module.commit("setPasswordUpdateResponse", null);
    var passwordUpdated = await axios.post("/Users/UpdatePassword", payload).catch(x => {
      return x.response;
    }).finally(x => x);
    
    if (passwordUpdated && passwordUpdated.data) {
      await module.commit("setPasswordUpdateResponse", passwordUpdated.data)
      return passwordUpdated.data;
    }
    return passwordUpdated;
  },
  create: async function (module, payload) {
    var userCreated = await axios.post("/Users/AddUser", payload).catch(x => {
      console.log("Error with Add User:", x);
      return x.response;
    }).finally(x => x);
    
    if (userCreated && userCreated.data) {
      module.commit("setUserCreated", userCreated.data)
    }
  },
  viewUserDetails: async function (module, payload) {
    var userResult = await axios.post("/Users/ViewUserDetails", payload).catch(x => { console.log("Error With View User details:", x) }).finally(x => x);
    if (userResult && userResult.data) {
      module.commit("userDetailsResult", userResult.data);
    }
  },
  authenticate: async function (module, payload) {
    var userResult = await axios.post("/Users/Authenticate", payload).catch(x => { console.log("Error With Authenticate:", x) }).finally(x => x);
    if (userResult && userResult.data) {
      module.commit("updateUser", userResult.data);
    }
  }
};

// mutations
const mutations = {
  userDetailResult(state, mergeInfo) {
    console.log("MergeInfo:", mergeInfo);
  },
  updateUser(state, mergeInfo) {
    state.userDetails = { ...state.userDetails, ...mergeInfo };
  },
  setPasswordUpdateResponse(state, mergeInfo) {
    state.passwordUpdateResponse = mergeInfo;
  },
  setUserCreated(state, mergeInfo) {
    state.userCreated = null;
    state.userCreatedError = null;
    if (mergeInfo && mergeInfo.error) {
      state.userCreatedError = mergeInfo.error;
    }
    else {
      state.userCreated = mergeInfo;
    }

  }
};

export default {
  state,
  getters,
  actions,
  mutations
}


