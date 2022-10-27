<template>
  <div class="top-contain mt-5"></div>
  <div class="contain">
    <p class="title medium text-white mt-0 text-center Montserrat">
      {{TokenContent.journey.title}}
    </p>
    <p class="mininum Arboria text-white text-center">
      {{TokenContent.journey.description}}
    </p>
    <div class="content d-flex flex-wrap justify-content-center">
      <BlackCard v-for="item in TokenContent.journey.timeline" :key="item.content" :quarter="item.quarter" :year="item.year" :content="item.content"/>
    </div>
  </div>
  <div class="down-contain"></div>
</template>

<script>
import BlackCard from "../../components/BlackCard.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "JourneySection",
  components: {
    BlackCard,
  },
  computed: {
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
  margin-top: -2px;
  background: url("../../assets/images/back12.png") no-repeat;
  background-size: 100% 100%;
}
.top-contain {
  background: url("../../assets/images/back10.png") no-repeat;
  background-size: 100% 100%;
  height: 10vw;
}
.down-contain {
  background: url("../../assets/images/back11.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.title {
  margin: 20px;
}
.content {
  padding-top: 50px;
}
</style>
