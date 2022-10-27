import axios from 'axios';

// this axios module allows the components to post and get using vuex compatible user authentication when available. 
// It is used very similarly to standard axios, it merely wraps the axios object to provide 'Authorization' header.

class axiosManager {
  constructor() {
    var internalThis = this;
    this.userId = null;
    this.get = (url, params) => {
      var headers = void 0;
      if (this.userId) {
        headers = {Authorization:'bearer ' + this.userId};
      }
      return axios.get(url, { params: params, headers });
    };
    this.post = (url, data) => {
      var headers = void 0;
      if (this.userId) {
        headers = {Authorization:'bearer ' + this.userId};
      }
      return axios.post(url, data, { headers });
    };
    this.attachStore = (store) => {
      this.store = store;
      this.store.watch((state, getters) => {
        return getters.user;
      }, (newValue) => {
        internalThis.userId = newValue && newValue.apiKey;
      });
    };
  }
}

const managedAxios = new axiosManager();

export default managedAxios;