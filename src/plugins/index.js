import AuthenticationPlugin from './AuthenticationPlugin';
import Misc from './Misc'

const MiscPlugin = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.use(AuthenticationPlugin);
    Vue.use(Misc);
    Vue.mixin({
      created: function () {
        
        //this.hello()
      },
      methods: {

      },
      computed:{
        // ...userModule.mapGetters({
        //   userDetails: "userDetails",
        //   userLoggedIn: "userLoggedIn",
        // }),
      }
    });
    // Vue.component('conditional-div', ConditionalDiv);

    // Vue.component('secure', Secure);
    // Vue.component('is', Secure);
    // Vue.component('has', Secure);

    // Vue.component('login', Login);
    
  }
};

export default MiscPlugin;