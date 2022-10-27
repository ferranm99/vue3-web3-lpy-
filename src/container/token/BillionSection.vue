<template>
  <div class="contain d-flex position-relative">
    <img
      src="../../assets/images/effect1.png"
      class="effect position-absolute"
      alt=""
    />
    <img
      src="../../assets/images/round.png"
      class="round-img position-absolute"
      alt=""
    />
    <div class="d-flex justify-content-center">
      <ChartBlock />
    </div>
    <div class="content w-100">
      <p class="fund m-0 Montserrat fw-bold">{{TokenContent.supply.title}}</p>
      <p class="ten m-0 Montserrat">{{TokenContent.supply.body}}</p>
      <p class="lpy Montserrat fw-bold">{{TokenContent.supply.tagline}}</p>
      <div class="d-flex justify-content-between flex-wrap">
        <Badge v-for="item in TokenContent.allocations" :key="item.percent" :title="item.title" :bgColor="item.bgColor" :percent="item.percent" />
      </div>
    </div>
  </div>
</template>

<script>
import ChartBlock from "../../components/ChartBlock.vue";
import Badge from "../../components/Badge.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "BillionSection",
  components: {
    ChartBlock,
    Badge,
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
  margin-top: 80px;
  flex-direction: row;
}
.content {
  padding: 30px;
}
.fund {
  font-size: 15px;
}
.ten {
  font-size: 30px;
  color: #3085cb;
}
.lpy {
  font-size: 15px;
}
.effect {
  left: -10px;
  top: -130px;
  width: 120px;
}
.round-img {
  left: 6vw;
  top: -40px;
  width: 320px;
}
@media screen and (max-width: 760px) {
  .effect {
    display: none;
  }
}
@media screen and (max-width: 1020px) {
  .contain {
    flex-direction: column;
  }
  .round-img {
    left: 24vw;
  }
}
</style>
