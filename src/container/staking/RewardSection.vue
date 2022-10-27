<template>
  <div class="top-contain mt-5"></div>
  <div class="contain">
    <div class="d-flex justify-content-center">
      <img v-if="false" src="../../assets/images/logotext.png" class="logo" alt="" />
    </div>
    <p class="my-2 Montserrat title text-white text-center">
      {{StakingContent.title}} 
    </p>
    <div class="d-flex justify-content-center">
      <p class="text-white Montserrat-Light px-2 text-center description">
        {{StakingContent.description}}
      </p>
    </div>

    <div class="d-flex justify-content-center">
      <div class="d-flex justify-content-center flex-wrap card-contain">
        <RewardCard v-for="item in StakingContent.rewards" :key="item.description" :percent="item.percent" :color="item.color" :number="item.number" />
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <p class="text-white Montserrat-Light px-2 text-center description">
        {{StakingContent.footer}}
      </p>
    </div>
  </div>
  <div class="down-contain"></div>
</template>

<script>
import RewardCard from "../../components/RewardCard.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "RewardSection",
  components: {
    RewardCard,
  },
  methods: {
    ...interfaceActions({
      showModal: "showModal"
    })
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
.contain {
  background: url("../../assets/images/back9.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw;
  margin-top: -2px;
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
.card-contain {
  max-width: 950px;
}
.logo {
  width: 40px;
}
.title {
  font-size: 30px;
}
.description {
  font-size: 12px;
  width: 800px;
}
</style>
