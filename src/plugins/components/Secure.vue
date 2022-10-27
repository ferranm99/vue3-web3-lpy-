

<script>
import { h } from 'vue';
import $ from 'jquery';
$ == $

const BooleanString = {
  type:[Boolean, String],
  default: null,
  required: false,
  validator: (p) => {
    if (typeof p === 'boolean') return true;
    if (typeof p === 'string' && (p === 'true' || p === 'false')) return true;
    if (p === undefined) return true;
    return false; 
  }
}
export default {
  name: 'Secure',
  data() {
    return {
    }
  },
  props: {
    loggedIn: BooleanString,
    noPass: BooleanString,
    noFail: BooleanString,
    anyPermissions: String,
    allPermissions: String,
    hidden: Boolean
  },
  mounted(){
    //console.log("loggedIn:", typeof this.loggedIn, " == ", this.loggedIn)
  },
  render() {
    var children = this.childrenRender();
    if (children) {
      if (children.children) return children.children;
      return h('div', children);
    }
    return null;
  },
  methods:{
    passFallback(){
      if (this.propIsTrue(this.noPass)) return null;
      if (this.propIsTrue(this.noFail) || (!this.propIsTrue(this.noPass) && !this.propIsTrue(this.noFail))) return this.$slots.default;
      return "Permissions passed. Use <pass> component to replace this add noPass to remove this";
    },
    failFallback(){
      if (this.propIsTrue(this.noFail)) return null;
      if (this.propIsTrue(this.noPass)) return this.$slots.default;
      return "Permissions failed. Use <fail> component to replace this add noFail to remove this"
    },
    childrenRender(){
      if (!this.$slots || !this.$slots.default || !this.$slots.default().reduce) return;

      var pass = this.namedSlot('pass');
      var fail = this.namedSlot('fail');

      if (this.permissionsMatch()) {
        return (pass) || this.passFallback();
      }
      else {
        var failData = (fail) || this.failFallback();
        return failData;
      }
    },
    propIsTrue(val, found)  {
      var result = val;
      if (result != void 0) {
        if (typeof result === 'string') {
          result = (result === 'true');
        }
        if (typeof result === 'boolean') {
          if (typeof found === 'function') {
            found(result);
          }
        }
      }
      return result === true;
    },
    permissionsMatch(){
      var result = !this.hidden;
     
      var loginChecked = false;
      this.propIsTrue(this.loggedIn, found => {
        if (found != this.userLoggedIn) {
          return false;
        }
        loginChecked = true;
      });

      if (result == false){
        return false;
      }

      var permissions = null;
      if ( this.allPermissions == void 0 && this.anyPermissions == void 0 && loginChecked == false) {
        result = false;
      }
      
      if (result && this.anyPermissions != void 0)
      {
        result = false;
        permissions = this.anyPermissions.split(',').map(p => p.trim());
        permissions.forEach(permission => {
          console.log("Result:", result, "Permission:", permission)
          result = result || this.hasPermission(permission);
        });
      }

      if (result && this.allPermissions != void 0)
      {
        permissions = this.allPermissions.split(',').map(p => p.trim());
        permissions.forEach(permission => {
          result = result && this.hasPermission(permission);
        });
      }
      
      return result;
    }
  },
  computed:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
</style>

-->