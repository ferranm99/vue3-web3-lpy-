<template>
  <div class="contain">
    <div class="d-flex flex-column flex-md-row">
      <div class="d-flex justify-content-center align-items-center together-item w-50">
        <!-- <div> -->
          <img
            src="../../assets/images/About_Img.png"
            class="about-img"
            alt=""
          />
        <!-- </div> -->
      </div>
      <div class="d-flex align-items-center align-items-md-start flex-column mt-5 together-item w-50">
        <!-- <img src="../../assets/icons/Heading_Logo.png" class="logo" alt="" /> -->
        <p class="big mt-2 mb-0 Montserrat">{{HomeContent.solution.title}}</p>
        <p class="mininum fw-bold Montserrat">
          {{HomeContent.solution.content}}
        </p>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-5">
      <!-- <img src="../../assets/icons/Heading_Logo.png" class="logo" alt="" /> -->
    </div>
    <p class="text-center big mt-2 mb-0 Montserrat">
      {{HomeContent.process.title}}
    </p>
    <p class="text-center mininum Montserrat mt-2">
      {{HomeContent.process.content}}
    </p>
    <div class="d-flex justify-content-center align-items-center align-items-md-stretch flex-column flex-md-row mt-2">
      <div class="d-flex align-items-center flex-column item mx-2 mt-3">
        <div>
          <img src="../../assets/icons/24-HOUR.png" class="item-img" alt="" />
        </div>
        <p class="text-title mt-2 px-1 text-center fw-bold Montserrat">
          {{HomeContent.process.offers[0].title}}
        </p>
        <p class="text-center Montserrat small-font">
          {{HomeContent.process.offers[0].content}}
        </p>
      </div>
      <div class="d-flex align-items-center flex-column item mx-2 mt-3">
        <div>
          <img src="../../assets/icons/UNMATCHED.png" class="item-img" alt="" />
        </div>
        <p class="text-title mt-2 px-1 text-center fw-bold Montserrat">
          {{HomeContent.process.offers[1].title}}
        </p>
        <p class="text-center Montserrat small-font">
          {{HomeContent.process.offers[1].content}}
        </p>
      </div>
      <div class="d-flex align-items-center flex-column item mx-2 mt-3">
        <div>
          <img src="../../assets/icons/DEDICATED.png" class="item-img" alt="" />
        </div>
        <p class="text-title mt-2 px-1 text-center fw-bold Montserrat">
          {{HomeContent.process.offers[2].title}}
        </p>
        <p class="text-center Montserrat small-font">
          {{HomeContent.process.offers[2].content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import HomeCard from '../../components/HomeCard.vue'
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "PowerSection",
  // components: {
  //   HomeCard
  // }
  computed: {
    ...interfaceGetters({
      HomeContent: "getHomeContent",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  padding: 0 10vw;
  margin-bottom: 100px;
}
.about-img {
  margin-top: 50px;
  width: 80%;
  max-width: 500px;
}
.item-img {
  width: 100px;
}
.small-font {
  font-size: 12px;
}
.logo {
  width: 40px;
}
.item {
  width: 30%;
  max-width: 350px;
  border: 1px solid rgb(206, 200, 200);
  padding: 20px;
}
.text-title {
  font-size: 25px;
}
@media screen and (max-width: 760px) {
  .together-item {
    width: 100% !important;
  }
  .item {
    width: 100% !important;
  }
}
</style>
