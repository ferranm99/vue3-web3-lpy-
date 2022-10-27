<template>
  <div
    class="d-flex card-contain align-items-center px-3 py-3"
  >
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="round text-white d-flex justify-content-center align-items-center fw-bold Gotham"
        :style="{ backgroundColor: bgColor }"
      >
        {{ number }}
      </div>
    </div>
    <div class="ms-3 d-flex justify-content-center flex-column">
      <p class="fw-bold m-0">{{ year }}</p>
      <p class="m-0 w-100">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RoadCard",
  props: {
    number: String,
    year: String,
    content: String,
    bgColor: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.round {
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #30b4e4;
  font-size: 20px;
}
.card-contain {
  width: 300px;
  height: 120px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media screen and (max-width: 750px) {
  .card-contain {
    margin-top: 20px;
  }
}
</style>
