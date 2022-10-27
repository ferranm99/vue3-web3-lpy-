// Store Modules are used to organize Vuex store contents.
// Create a new module by duplicating this component and giving it a meaningful name

import axios from "../../../utils/axios";

const state = {
  modalVisible: false,
  modalIFrameContents: null,
  language: 'EN',
  langData: {
    EN: require("../../assets/languages/EN.json")
  }
};

function lang(state, fn) { // Function to select appropriate state data based on language
  return fn(state && state.langData[state.language])
}

// getters
const getters = {
  // These are the getter functions used to obtain state contents in a clean way.
  getModalVisible: (state) => state.modalVisible,
  getModalIFrameContents: (state) => state.modalIFrameContents,

  getNavbarSignupButtonText: (state) => lang(state,state => state.navbar && state.navbar.signupButtonText),
  getNavbarMenuItems: (state) => lang(state, state => state.navbar && state.navbar.menuItems),

  getHomeHeader: (state) => lang(state, state => state.home && state.home.header),
  getHomeContent: (state) => lang(state, state => state.home && state.home.content),

  getTokenHeader: (state) => lang(state, state => state.token && state.token.header),
  getTokenContent: (state) => lang(state, state => state.token && state.token.content),

  getTokenPurchase: (state) => lang(state, state => state.tokenpurchase),

  getStakingHeader: (state) => lang(state, state => state.staking && state.staking.header),
  getStakingContent: (state) => lang(state, state => state.staking && state.staking.content),

  getBrandHeader: (state) => lang(state, state => state.brand && state.brand.header),
  getBrandContent: (state) =>lang(state, state =>  state.brand && state.brand.content),
  getBrandFaq: (state) => lang(state, state => state.brand && state.brand.faq),
  getBrandContact: (state) => lang(state, state => state.brand && state.brand.contact),

  getUpdateHeader: (state) => lang(state, state => state.update && state.update.header),
  getUpdateContent: (state) => lang(state, state => state.update && state.update.content),


  getRoadmapHeader: (state) => lang(state, state => state.roadmap && state.roadmap.header),
  getRoadmapContent: (state) => lang(state, state => state.roadmap && state.roadmap.content),
  getRoadmapCards: (state) => lang(state, state => state.roadmap && state.roadmap.cards),

  getPartnersHeader: (state) => lang(state, state => state.partners && state.partners.header),
  getPartnersContent: (state) => lang(state, state => state.partners && state.partners.content),

  getLangData: (state) => state && state.langData,
  getLanguage: (state) => state && state.language,
};

// actions
const actions = {
  // These are the action functions. They are considered middleware and allow async callbacks/promises to perform long/remote operations.
  // Module has access to the namespaced vuex functionality, payload is the single payload object sent in when calling the function.
  setLanguage: async (module, payload) => {
    if (payload && payload.language) {
      var language = payload.language;
      if (module.state.langData[language] && module.state.langData[language].home) {
        // Do Nothing if language exists.
      }
      else {
        var response = await axios.get("/Language/Payload/" + language.toUpperCase());
        payload.data = response.data;
      }
      module.commit("updateLanguage", payload);
    }
  },
  showModal: async (module, payload) => {
    module.commit("updateModal", { modalVisible: true, modalIFrameContents: payload });
  },
  hideModal: async (module) => {
    module.commit("updateModal", { modalVisible: false });
  },
};

// mutations
const mutations = {
  // Mutations are the only place that state should be updated, and they should be performed relatively fast.
  updateLanguage(state, mergeInfo) {
    console.log("MergeInfo:", mergeInfo)
    if (mergeInfo && mergeInfo.language)
    {
      var language = mergeInfo.language;
      if (mergeInfo.data && mergeInfo.data.home){
        state.langData[language] = mergeInfo.data;
        state.language = language;
      }
      else if (state.langData[language] && state.langData[language].home) {
        state.language = language;
      }
    }
  },
  updateModal(state, mergeInfo) {
    if (mergeInfo) {
      state.modalVisible = mergeInfo.modalVisible;
      state.modalIFrameContents = mergeInfo.modalIFrameContents;
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
