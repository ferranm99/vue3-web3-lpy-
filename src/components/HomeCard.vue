<template>
  <div class="d-flex align-items-center flex-column item">
    <div>
      <img src="../assets/icons/24-HOUR.png" class="item-img" alt="" />
    </div>
    <p class="text-hour mt-2 px-4 text-center fw-bold Montserrat">
      {{title}}
    </p>
    <p class="text-complete text-center Montserrat">
      {{description}}
    </p>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
      img: String,
      title: String,
      description: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  width: 30%;
  max-width: 300px;
  border: 1px solid rgb(206, 200, 200);
  padding: 20px;
}
</style>
