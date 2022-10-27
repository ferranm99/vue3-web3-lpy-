//import { createNamespacedHelpers } from "vuex";
// var userModule = createNamespacedHelpers("user");

// import ConditionalDiv from './components/ConditionalDiv';
// import Secure from './components/Secure';
// import Login from './components/Login'

import VNodeRender from './components/VNodeRender';

import "./plugin.css"

const MiscPlugin = {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.mixin({
      created: function () {
        
      },
      methods: {
        namedSlots(){
          if (typeof this.$slots.default !== 'function') return [];
          var slots = this.$slots.default().reduce((result, item) => { result[item.tag || item.type] = item; return result}, {});
          return slots;
        },
        orderedSlots() {
          if (typeof this.$slots.default !== 'function') return [];
          var slots = this.$slots.default().reduce((result, item) => { result.push(item); return result;}, [])
          return slots;

        },
        namedSlot(name) {
          return this.namedSlots()[name];
        },
        toast(title, message, variant = null, append = true, solid = true, noCloseButton = true) {
          this.counter++
          this.$bvToast.toast(message, {
            title: title,
            toaster: 'b-toaster-top-center',
            variant: variant,
            solid: solid,
            appendToast: append,
            noCloseButton: noCloseButton,
            headerClass: "hidden"
          })
        },
        lpyToast(title, message, variant = null) {

          const h = this.$createElement
          // Increment the toast count
          this.count++
          // Create the message
          const vNodesMsg = h(
            'p',
            { class: ['text-center', 'mb-0'] },
            [
              h('b-spinner', { props: { type: 'grow', small: true } }),
              ' Flashy ',
              h('strong', 'toast'),
              message,
              h('b-spinner', { props: { type: 'grow', small: true } })
            ]
          )
          // Create the title
          var vNodesTitle = h(
            'div',
            { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'], style: "display:none" },
            [
              h('strong', { class: 'mr-2' }, title),
              //h('small', { class: 'ml-auto text-italics' }, '5 minutes ago')
            ]
          )
          vNodesTitle = null
          this.toast(vNodesTitle, vNodesMsg, variant);
        },
        toastSuccess(title, message) {
          if (message == void 0) {
            message = title;
            title = void 0;
          }
          this.toast(title, message, "success");
        },
        storageGetItem(key) {
          var getItem = localStorage.getItem(key);
          if (typeof getItem === 'string') {
            try {
              var itemObj = JSON.parse(getItem);
              var expires = itemObj.expires;
              if (typeof expires === 'string') expires = new Date(expires);
              if (expires.getTime() > Date.now()) {
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
          if (typeof expires === 'undefined') {
            expires = new Date(Date.now() + 60 * 60 * 24 * 365 * 20);//20 years
          }
          else if (typeof expires === 'number') {
            expires = new Date(Date.now() + expires);
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
      },
      computed:{
        // ...userModule.mapGetters({
        //   userDetails: "userDetails",
        //   userLoggedIn: "userLoggedIn",
        // }),
      }
    });
    
    Vue.component('VNodeRender', VNodeRender);
    
  }
};

      

export default MiscPlugin;