<template>
  <div class="contain position-relative">
    <img
      src="../../assets/images/effect1.png"
      class="position-absolute effect"
      alt=""
    />
    <div class="d-flex justify-content-center">
      <div
        class="d-flex justify-content-center flex-wrap mt-5 position-relative content-group"
      >
        <img
          src="../../assets/images/curve.png"
          class="position-absolute curve1"
          alt=""
        />
        <img
          src="../../assets/images/curve.png"
          class="position-absolute curve2"
          alt=""
        />
        <div class="d-flex align-items-center flex-column item">
          <div class="position-relative">
            <img
              src="../../assets/icons/GetStakingAssets.png"
              class="item-img"
              alt=""
            />
            <div
              class="black d-flex justify-content-center align-items-center bg-black text-white position-absolute"
            >
              01
            </div>
          </div>
          <p class="text-hour mt-2 mb-0 px-1 text-center fw-bold Montserrat">
            {{StakingContent.easy[0].title}} 
          </p>
        </div>
        <div class="d-flex align-items-center flex-column item">
          <div class="position-relative">
            <img
              src="../../assets/icons/SelectAnAssetToStake.png"
              class="item-img"
              alt=""
            />
            <div
              class="black d-flex justify-content-center align-items-center bg-black text-white position-absolute"
            >
              02
            </div>
          </div>
          <p class="text-hour mt-2 mb-0 px-1 text-center fw-bold Montserrat">
            {{StakingContent.easy[1].title}}  
          </p>
        </div>
        <div class="d-flex align-items-center flex-column item">
          <div class="position-relative">
            <img
              src="../../assets/icons/EarnRewards.png"
              class="item-img"
              alt=""
            />
            <div
              class="black d-flex justify-content-center align-items-center bg-black text-white position-absolute"
            >
              03
            </div>
          </div>
          <p class="text-hour mt-2 mb-0 px-1 text-center fw-bold Montserrat">
            {{StakingContent.easy[2].title}}  
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "ContentSection",
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
  padding: 0 10vw;
  margin-top: 80px;
  margin-bottom: 100px;
}
.effect {
  left: -10px;
  top: -100px;
  width: 120px;
}
.black {
  width: 24px;
  height: 24px;
  border-radius: 20px;
  font-size: 12px;
  top: 0;
  right: 10px;
}
.content-group {
  min-width: 900px;
}
.curve1 {
  top: -10px;
  left: 140px;
}
.curve2 {
  top: -10px;
  left: 450px;
}
.text-hour {
  font-size: 20px;
}
.text-complete {
  font-size: 12px;
}
.item-img {
  width: 100px;
}
.item {
  padding: 20px;
  width: 270px;
}
@media screen and (max-width: 900px) {
  .curve1 {
    display: none;
  }
  .curve2 {
    display: none;
  }
  .content-group {
    min-width: 300px;
  }
}
</style>
