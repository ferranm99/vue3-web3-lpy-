<template>
  <div class="contain mt-5">
    <div class="content">
      <p class="Montserrat text-white text-center m-0 mininum">{{TokenContent.discover.title}}</p>
      <p class="medium Montserrat text-white text-center mt-2">{{TokenContent.discover.content}}</p>
      <div class="d-flex justify-content-center" >
        <button @click="showModal(purchaseElement)" class="btn-start Montserrat bg-white fw-bold border-0">{{TokenContent.discover.getStartedButtonText}}</button>
      </div>
    </div>
    <br/>
    <p class="medium Montserrat text-center fw-bold mt-5" v-if='false'>Purchase <span class="fw-normal">$LPY</span></p>
    <div class="d-flex justify-content-center" v-if="false">
      <p class="dollar Montserrat">$.02</p>
      <div class="price-contain">
        <p class="font-grey  mt-1 mb-0 fw-bold Montserrat">Price Before</p>
        <p class="font-grey  m-0 fw-bold Montserrat">December 28th</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { createNamespacedHelpers } from "vuex";
import TokenPurchase from '../../views/TokenPurchase.vue';

var { 
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  components: { TokenPurchase },
  name: "BlockchainSection",
  methods: {
    ...interfaceActions({
      showModal: "showModal"
    }),
  },
  computed: {
    purchaseElement() {
      return (<TokenPurchase />)
    },
    ...interfaceGetters({
      TokenContent: "getTokenContent",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  padding: 0 10vw;
}
.content {
  background: url("../../assets/images/Discover_BG.png") no-repeat;
  background-size: 100% 100%;
  padding: 50px 0;
}
.btn-start {
  padding: 4px 20px;
  color: black;
  border-radius: 3px;
}
.dollar {
  font-size: 40px;
}
.font-grey{
  color: grey;
  font-size: 12px;
}
.price-contain {
  margin-left: 10px;
  margin-top: 10px;
}
</style>
