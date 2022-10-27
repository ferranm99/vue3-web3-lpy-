
import { createStore } from 'vuex';
import axios from '../../utils/axios';


// namespaced module loader for store
// This file should not need to be modified
// This file auto loads files within the "modules" directory and namespaces them accordingly.
 


function loadModules() {
  const context = require.context('./modules', true, /.js$/i);
  var modules = [];
  for (var i = 0; i < context.keys().length; i++) {
    var key = context.keys()[i];
    var element = context(key).default;
    key = key.replace(/[.]\/([^.]+)[.]js/, "$1");
    element.name = key;
    element.namespaced = true;

    modules.push(element);
  }
  return modules;
}

const resourceModules = {};
loadModules().forEach((resource) => {
  resourceModules[resource.name] = resource;
});

var thisStore = createStore({
  state: {
  },
  getters:{
    // Default connection for store to have user and loggedIn status provided from authentication modules.
    user: state => state.user && state.user.userDetails,
    loggedIn: state => state.user && state.user.loggedIn
  },
  mutations: {
  },
  actions: {
  },
  modules: resourceModules

});

axios.attachStore(thisStore);

export default thisStore;
