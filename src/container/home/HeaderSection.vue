<template>
  <div class="contain home">
    <Navbar />
    <div class="d-flex flex-column flex-md-row justify-content-between mt-4">
      <div class="mt-5 item w-50">
        <p class="big Montserrat text-white fw-bold">
          {{HomeHeader.title}}
        </p>
        <p class="description text-white Montserrat m-0">
          {{HomeHeader.body}}
        </p>

        <div class="d-flex mt-2" v-for="item in HomeHeader.list" :key="item">
          <div class="me-2">
            <img src="../../assets/icons/bullet.png" alt="" />
          </div>
          <p class="text-white m-0 list-text">{{item}}</p>
        </div>

        <button class="btn-quote border-0 text-white Montserrat-Light" @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSd4fL3q0vv3UxcIrq4LmrHqKQwasWOg73hDgzIn2hqrAKrcvA/viewform?embedded=true')">
          <p class="border m-0 px-3 py-1 border-dark mininum">{{HomeHeader.quoteButtonText}}</p>
        </button>
      </div>
      <div class="d-flex justify-content-center mt-5 item w-50">
        <div>
          <img
            src="../../assets/images/Home_Page_Banner1.png"
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
  computed: {
    ...interfaceGetters({
      HomeHeader:"getHomeHeader",
    }),
  },
  methods: {
    ...interfaceActions({
      showModal:"showModal"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  background: url("../../assets/images/back1.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw;
}
.tri-contain {
  background: url("../../assets/images/back2.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.dollar {
  color: #c0e6ae;
  text-decoration: underline;
  font-size: 14px;
}
.list-text {
  padding-top: 2px;
  font-size: 14px;
}
.btn-quote {
  background: #3085cb;
  padding: 6px;
  border-radius: 2px;
  margin-top: 20px;
}
.token-banner {
  min-width: 300px;
  width: 30vw;
  margin-right: -50px;
}
.description {
  font-size: 12px;
  line-height: 22px;
}
@media screen and (max-width: 760px) {
  .item {
    width: 100% !important;
  }
}
</style>

<style>
.white .web3Icon {
  fill: black;
}
</style>