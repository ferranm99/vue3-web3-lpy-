

<template>
  <b-form @submit="loginPressed" inline>
    <label class="sr-only" for="inline-form-input-username">Username</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-input-group-prepend is-text>
        <b-icon icon="person"/>
      </b-input-group-prepend>
      
      <b-form-input
        v-model="username"
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Username"
      >
      
      </b-form-input>
    </b-input-group>

    <label class="sr-only" for="inline-form-input-username">Password</label>
    <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
      <b-input-group-prepend is-text>
        <b-icon icon="key"/>
      </b-input-group-prepend>
      <b-form-input v-model="password" id="inline-form-input-password" type="password" placeholder="Password"></b-form-input>
    </b-input-group>

    <!-- <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox> -->

    <b-button type="submit" variant="primary">Login</b-button>
  </b-form>
</template>

<script>
import $ from 'jquery';

import { createNamespacedHelpers } from "vuex";
var userModule = createNamespacedHelpers("user");

export default {
  name: 'Login',
  props: {
  },
  data(){
    return {
      username:null,
      password:null
    }
  },
  mounted(){
    $ == $
    //this.$refs.top.$attrs = this.$attrs;
    //debugger;
  },
  methods:{
    async loginPressed(event) {
      event.preventDefault();
      var authenticate = await this.authenticate({ Username: this.username, Password: this.password });
      console.log("Auth:", authenticate);
    },
    ...userModule.mapActions({
      authenticate: "authenticate",
      viewUserDetails: "viewUserDetails",
      userCreate: "create",
    }),
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
</style>

-->