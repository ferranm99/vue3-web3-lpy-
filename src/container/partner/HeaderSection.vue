<template>
  <div class="contain partner">
    <Navbar />
    <div class="d-flex justify-content-between flex-column flex-md-row mt-4">
      <div class="mt-5 item w-50">
        <p class="big text-white fw-bold Montserrat">{{PartnersHeader.title}}</p>
        <p class="mininum Montserrat text-white">{{PartnersHeader.body}}</p>
      </div>
      <div class="mt-5 item w-50 d-flex justify-content-center justify-content-md-end">
        <img src="../../assets/images/LaptopWithPartnerCard.png" class="token-banner" alt="">
      </div>
    </div>
  </div>
  <div class="tri-contain"></div>
</template>

<script>
import Navbar from '../../components/common/Navbar.vue'
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: 'HeaderSection',
  components: {
    Navbar
  },
  computed: {
    ...interfaceGetters({
      PartnersHeader: "getPartnersHeader",
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  background: url("../../assets/images/back14.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw;
}
.tri-contain {
  background: url("../../assets/images/back13.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.btn-quote {
  background: #3085cb;
  padding: 8px 20px;
  border-radius: 2px;
}
.token-banner {
  width: 30vw;
  min-width: 300px;
  margin-top: 0px;
}
@media screen and (max-width: 760px) {
  .item {
    width: 100% !important;
  }
}
</style>

<style>
.partner .web3Icon {
  fill: white;
}
</style>