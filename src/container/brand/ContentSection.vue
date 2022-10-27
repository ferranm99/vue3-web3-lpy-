<template>
  <div class="contain">
    <div class="d-flex justify-content-center mt-5">
      <img src="../../assets/icons/Heading_Logo.png" class="logo" alt="" />
    </div>
    <p class="text-center text-process mt-2 mb-0 Montserrat">
      {{ BrandContent.title }}
    </p>
    <div class="d-flex justify-content-between mt-5"></div>
    <div class="d-flex justify-content-between flex-column flex-md-row">
      <div
        class="position-relative d-flex justify-content-center align-items-center item"
      >
        <div class="position-relative">
          <img
            src="../../assets/images/Card.png"
            class="card border-0"
            alt=""
          />
          <img
            src="../../assets/images/round.png"
            class="round position-absolute"
            alt=""
          />
        </div>
      </div>
      <div class="item">
        <div v-for="item in BrandContent.body" :key="item.title">
          <p class="title fw-bold Gotham">{{item.title}}</p>
          <p class="Gotham fw-bold m-0">
            {{item.description}}
          </p>
          <p class="Gotham">
            {{item.content}}
          </p>
        </div>
        <button class="btn-quote text-white border-0" @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSc5rKbbdkCqXxSwCcW18BP-VsqCgC8THwk_msDbka0VSrWzeg/viewform?embedded=true')">
          <p class="m-0 px-3 border border-dark">{{BrandContent.contactUsButtonText}}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

var { 
  mapActions: interfaceActions, 
  mapGetters: interfaceGetters 
} =
  createNamespacedHelpers("interface-controls");

export default {
  name: "ContentSection",
  methods: {
    ...interfaceActions({
      showModal:"showModal"
    })
  },
  computed: {
    ...interfaceGetters({
      BrandContent: "getBrandContent",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  padding: 0 10vw;
  margin-top: 80px;
  margin-bottom: 100px;
}
.text-does {
  font-size: 30px;
}
.text-process {
  font-size: 30px;
}
.title {
  font-size: 20px;
}
.logo {
  width: 40px;
}
.card {
  min-width: 340px;
  width: 35vw;
  z-index: 3;
  background: transparent;
}
.round {
  top: 0;
  left: 0;
  min-width: 300px;
  width: 35vw;
}
.btn-quote {
  background: #3085cb;
  padding: 6px;
  border-radius: 2px;
}
.item {
  width: 45%;
}
@media screen and (max-width: 760px) {
  .item {
    width: 100%;
  }
}
</style>
