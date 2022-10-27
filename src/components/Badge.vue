<template>
  <div class="item">
    <div
      class="round d-flex justify-content-center align-items-center"
      :style="{ backgroundColor: bgColor }"
    >
      {{ percent }}<span class="percent">%</span>
    </div>
    <p class="round-title m-0 fw-bold text-center">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    title: String,
    bgColor: String,
    percent: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  width: 90px;
}
.round-title {
  font-family: "Montserrat";
  font-size: 13px;
}
.round {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: bold;
  font-size: 28px;
}
.percent {
  font-size: 15px;
}
</style>
