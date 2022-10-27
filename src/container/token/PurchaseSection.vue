<template>
  <div class="top-contain mt-5"></div>
  <div class="contain d-flex flex-column flex-md-row">
    <div class="w-50 w-md-100 mt-3">
      <p class="medium text-white Montserrat">{{TokenContent.purchase.title}}</p>
      <ul class="list mininum text-white Montserrat">
        <li v-for="item in TokenContent.purchase.list" :key="item" class="item">{{item}}</li>
      </ul>
      <button v-if="false" @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSdi9tuuhZU0q7cLKyLlF2rrZoVaT-eKbb5-jJPlqtJGPUldgw/viewform?embedded=true')" class="btn-signup bg-white Montserrat border-0">{{TokenContent.purchase.signUpButtonText}}</button>
      <button v-if="true" @click="showModal(purchaseElement)" class="btn-signup bg-white Montserrat border-0">{{TokenContent.purchase.signUpButtonText}}</button>
    </div>
    <div class="w-50 w-md-100 mt-3 d-flex justify-content-center justify-content-md-end align-items-center">
      <div>
        <img
          src="../../assets/images/Card1.png"
          class="card bg-transparent border-0"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="down-contain"></div>
  
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
  name: "PurchaseSection",
  methods:{
    ...interfaceActions({
      showModal: "showModal"
    })
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
  background: url("../../assets/images/back9.png") no-repeat;
  background-size: 100% 100%;
  margin-top: -2px;
  padding: 0 10vw;
}
.top-contain {
  background: url("../../assets/images/back7.png") no-repeat;
  background-size: 100% 100%;
  height: 10vw;
}
.down-contain {
  background: url("../../assets/images/back8.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.list {
  padding-left: 20px;
}
.item {
  margin: 10px 0;
}
.btn-signup {
  margin: 20px 0 0 0;
  padding: 10px 25px;
  color: #3085cb;
}
.card {
  width: 30vw;
  min-width: 320px;
  margin-top: 0;
}
@media screen and (max-width: 762px) {
  .w-md-100 {
    width: 100% !important;
  }
}
</style>
