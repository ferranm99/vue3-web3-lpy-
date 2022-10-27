<template>
  <div
    class="card-contain d-flex flex-column justify-content-top align-items-center mt-3"
  >
    <div class="item">
      <div class="dot"></div>
      <div class="round">
        <div class="blue-round"></div>
      </div>
      <div class="dot"></div>
    </div>
    <div class="vertical"></div>
    <div class="big-round d-flex justify-content-center align-items-center">
      Q{{quarter}}
    </div>
    <div class="item-content">
      <p class="text-white text-center Montserrat-Light mt-3 mb-0 mininum">{{year}}</p>
      <p class="text-white text-center Montserrat-Light m-0 mininum">{{content}}</p>
      <!-- <p class="text-white text-center Montserrat-Light m-0 mininum">Coin Private Sale</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BlackCard",
  props: {
    quarter: String,
    content: String,
    year: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-contain {
  min-width: 140px;
  width: 20%;
}
.item {
  display: flex;
  width: 100%;
}
.dot {
  -border: 1px dotted white;
  border: 0;
  background: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3cline x1='0%25' y1='10%25' x2='100%25' y2='10%25' fill='none' stroke='white' stroke-width='2' stroke-dasharray='0%2c 8' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  -border-bottom: 0;
  -border-left: 0;
  -border-right: 0;
  width: 50%;
  margin-top: 4px;
}
.round {
  width: 10px;
  height: 10px;
  background: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.blue-round {
  width: 6px;
  height: 6px;
  background: #3085cb;
  border-radius: 5px;
}
.vertical {
  border: 1px dotted white;
  border-bottom: 0;
  border-top: 0;
  border-right: 0;
  height: 20px;
}
.big-round {
  width: 50px;
  height: 50px;
  border-radius: 50px;
  border: 1px dotted white;
  color: #3085cb;
  font-family: "Montserrat";
  font-size: 20px;
  z-index: 3;
  background: black;
}
.item-content {
  padding: 30px 10px;
  margin-top: -25px;
  width: 95%;
  border-radius: 8px;
  background: #171717;
}
</style>
