<template>
  <div class="contain brand">
    <Navbar />
    <div class="d-flex justify-content-between flex-column flex-md-row mt-4">
      <div class="mt-5 item w-50">
        <p class="big text-white fw-bold Montserrat">{{BrandHeader.title}}</p>
        <p class="mininum Montserrat text-white">
          {{BrandHeader.body}}
        </p>
        <button class="btn-quote text-white border-0" @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSc5rKbbdkCqXxSwCcW18BP-VsqCgC8THwk_msDbka0VSrWzeg/viewform?embedded=true')">
          <p class="m-0 px-3 border border-dark">{{BrandHeader.quoteButtonText}}</p>
        </button>
      </div>
      <div class="d-flex justify-content-center mt-5 item w-50">
        <div>
          <img
            src="../../assets/images/Card1.png"
            class="token-banner"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="tri-contain"></div>
</template>

<script>
import Navbar from "../../components/common/Navbar.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "HeaderSection",
  components: {
    Navbar,
  },
  methods: {
    ...interfaceActions({
      showModal:"showModal"
    })
  },
  computed: {
    ...interfaceGetters({
      BrandHeader: "getBrandHeader",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  background: url("../../assets/images/back6.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw;
}
.tri-contain {
  background: url("../../assets/images/back5.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.btn-quote {
  background: #26333c;
  padding: 6px;
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
.brand .web3Icon {
  fill: white;
}
</style>