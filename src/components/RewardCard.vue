<template>
  <div class="d-flex justify-content-center align-items-center p-4 bg-white flex-column mx-3 mt-3">
    <div class="d-flex justify-content-center align-items-center round fw-bold text-white mb-3" :style="{backgroundColor:color}">{{number}}</div>
    <p class="Montserrat title fw-bold">{{StakingContent.rewardMonthlyStaking}}</p>
    <p class="Montserrat yearly m-0">{{StakingContent.rewardYearlyRewards}}</p>
    <p class="percent fw-bold">{{percent}}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

var { 
  //mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "RewardCard",
  props: {
    number: String,
    color: String,
    percent: String
  },
  computed: {
    ...interfaceGetters({
      StakingContent: "getStakingContent",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round {
    width: 40px;
    height: 40px;
    border-radius: 40px;
    font-size: 22px;
}
.title {
    font-size: 20px;
}
.percent {
    color: #96d35f;
}
.yearly {
    font-size: 12px;
}
</style>
