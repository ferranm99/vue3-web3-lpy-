<template>
  <div class="chart-contain d-flex flex-column bg-white position-relative">
    <div>
      <button class="btn-smith bg-black d-flex justify-content-center text-white position-absolute border-0">
        <img src="../assets/images/user.png" class="user" alt="" />
        <p class="smith Gotham fw-bold">ANDREW</p>
        <p class="subcrine Gotham">SMITH</p>
      </button>
    </div>
    <div class="d-flex">
      <img src="../assets/images/blacklogo.png" class="logo" alt="" />
      <div class="d-flex flex-column justify-content-center ms-3">
        <p class="Gotham m-0">Total Suppy</p>
        <p class="billion Gotham fw-bold m-0">10 Billion</p>
      </div>
      <div class="dot">...</div>
    </div>
    <div class="chart d-flex align-items-end">
      <div class="green"></div>
      <div class="blue"></div>
      <div class="orange"></div>
      <div class="purple"></div>
      <div class="yellow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChartBlock",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart-contain {
  min-width: 300px;
  max-width: 320px;
  padding: 20px;
  z-index: 10;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.logo {
  width: 70px;
}
.billion {
  font-size: 25px;
}
.chart {
  margin: 20px 0 50px 0;
}
.green {
  width: 8px;
  height: 100px;
  background: #dcec82;
  margin: 0 30px 0 0;
}
.blue {
  width: 8px;
  height: 80px;
  background: #bde1e6;
  margin: 0 30px 0 0;
}
.orange {
  width: 8px;
  height: 60px;
  background: #fae6c9;
  margin: 0 30px 0 0;
}
.purple {
  width: 8px;
  height: 40px;
  background: #e8e3f6;
  margin: 0 30px 0 0;
}
.yellow {
  width: 8px;
  height: 20px;
  background: #f9fcbd;
  margin: 0 30px 0 0;
}
.btn-smith {
  bottom: -10px;
  padding: 10px 10px;
}
.smith {
  margin: 6px 10px 0 6px;
  font-size: 13px;
}
.subcrine {
  margin: 6px 10px 0 0;
  font-size: 13px;
}
.user {
  width: 30px;
}
.dot {
  font-size: 50px;
  margin-top: -50px;
  margin-left: 30px;
}
</style>
