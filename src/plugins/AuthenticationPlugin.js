
import { createNamespacedHelpers } from "vuex";
var userModule = createNamespacedHelpers("user");

import ConditionalDiv from './components/ConditionalDiv';
import Secure from './components/Secure'; /*
var Secure = void 0; /***/
import Login from './components/Login'

const AuthenticationPlugin = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.mixin({
      created: function () {
        
        //this.hello()
      },
      methods: {
        storageGetItem(key) {
          var getItem = localStorage.getItem(key);
          if (typeof getItem === 'string') {
            try {
              var itemObj = JSON.parse(getItem);
              if (itemObj.expires.getTime() > Date.now()) {
                return itemObj.value;
              }
              else {
                localStorage.removeItem(key);
                return null;
              }
            }catch {
              return getItem;
            }
          }
          return null;
        },
        storageSetItem(key, value, expiry) {
          var expires = expiry
          if (typeof expires === 'number') {
            expires = Date.now() + expires;
          }
          else if (expires instanceof Date) {
            if (expires.getTime() <= Date.now()) {
              expires = new Date(Date.now() + 1000 * 60 * 60 * .5); 
            }
          }
          var obj = {key,value, expires};
          return localStorage.setItem(key, JSON.stringify(obj));
        },
        storageRemoveItem(key) {
          return localStorage.removeItem(key);
        },
        hasPermission(permissionNames) {
          var permissions = [];
          if (Array.isArray(permissionNames)) {
            permissions = permissionNames;
          } else {
            permissions = [permissionNames];
          }
          var result = false;
          if (this.userDetails && this.userDetails.permissionList.length > 0) {
            this.userDetails.permissionList.forEach((listItem) => {
              if (permissions.includes(listItem.permissionName)) {
                result = true;
              }
            });
          }
          return result;
        },
      },


      
      computed:{
        ...userModule.mapGetters({
          userDetails: "userDetails",
          userLoggedIn: "userLoggedIn",
        }),
      }
    });
    Vue.component('conditional-div', ConditionalDiv);

    if (Secure){
      Vue.component('secure', Secure);
      Vue.component('is', Secure);
      Vue.component('has', Secure);
    }
    Vue.component('login', Login);
    
  }
};

export default AuthenticationPlugin;