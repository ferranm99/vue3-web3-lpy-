<template>
  <div class="contain token">
      <Navbar />
      <div class="d-flex justify-content-between flex-column flex-md-row mt-4">
        <div class="mt-5">
          <p class="text-white fw-bold Montserrat big">
            {{TokenHeader.title}}
          </p>
          <p class="mininum Montserrat text-white">
            {{TokenHeader.body}}
          </p>
          <button class="btn-quote text-white border-0" @click="openWindow(TokenHeader.headerButtonUrl)">
            {{TokenHeader.headerButtonText}}
          </button>
        </div>
        <div class="mt-5 d-flex justify-content-center">
          <img
            src="../../assets/images/Token_Banner1.png"
            class="token-banner"
            alt="token"
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
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "HeaderSection",
  components: {
    Navbar,
  },
  methods: {
    openWindow(path){
      window.open(path);
    },
    ...interfaceActions({
      showModal:"showModal"
    }),
  },
  computed: {
    ...interfaceGetters({
      TokenHeader: "getTokenHeader",
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
  background: #3085cb;
  padding: 4px 20px;
  border-radius: 2px;
}
.token-banner {
  width: 35vw;
  min-width: 320px;
  margin-top: -25px;
  margin-right: -50px;
}
</style>

<style>
.token .web3Icon {
  fill: white;
}
</style>