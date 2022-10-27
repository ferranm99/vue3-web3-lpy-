<template>
  <div class="contain staking">
    <Navbar />
    <div class="d-flex justify-content-between flex-column flex-md-row mt-4">
      <div class="mt-5 item w-50">
        <p class="big text-white fw-bold Montserrat">
          {{StakingHeader.title}}
        </p>
        <p class="mininum Montserrat text-white">
          {{StakingHeader.body}}
        </p>
        <button class="btn-quote text-white border-0" @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSf8HP0UW99uqKY3C-Q2nh51JqfLOT1c8xckiQv6w8JgdWJ7CA/viewform?embedded=true')">
          <p class="m-0 px-2 border border-dark">{{StakingHeader.quoteButtonText}}</p>
        </button>
      </div>
      <div class="d-flex justify-content-center item w-50">
        <img
          src="../../assets/images/PhoneLPY.png"
          class="token-banner"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="tri-contain"></div>
</template>

<script>
import Navbar from "../../components/common/Navbar.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
  mapActions: interfaceActions,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "HeaderSection",
  components: {
    Navbar,
  },
  methods: {
    ...interfaceActions({
      showModal: "showModal",
      hideModal: "hideModal"
    }),
  },
  computed: {
    ...interfaceGetters({
      StakingHeader: "getStakingHeader",
    }),
  }
};
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
.staking .web3Icon {
  fill: white;
}
</style>