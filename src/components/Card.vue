<template>
  <div class="item d-flex">
    <div
      class="date-contain d-flex flex-column justify-content-center align-items-center"
    >
      <p class="big-font Montserrat text-white m-0 fw-bold">{{day}}</p>
      <p class="big-font Montserrat text-white m-0 fw-bold">{{month}}</p>
      <p class="small-font Montserrat text-white m-0">{{year}}</p>
    </div>
    <div class="p-2">
      <p class="text mininum Montserrat fw-bold">
        {{content}}
      </p>
      <p class="text mininum text-grey Montserrat">
        {{extra}}
      </p>
      <p v-if='false' class="text mininum Montserrat fw-bold">Read More</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
      day: String,
      month: String,
      year: String,
      content: String,
      extra: String,
      list: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  border: 1px solid rgb(214, 210, 210);
  width: 48%;
  margin-bottom: 30px;
}
.date-contain {
  background: url("../assets/images/arrowright.png") no-repeat;
  background-size: 100% 100%;
  min-width: 100px;
}
.big-font {
  font-size: 25px;
}
.small-font {
  font-size: 10px;
}
.text {
  margin: 1vw;
}
.text-grey {
  color: grey;
}
@media screen and (max-width: 990px) {
  .item {
    width: 100%;
  }
}
</style>
