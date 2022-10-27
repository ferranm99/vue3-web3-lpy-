<template>
  <div class="contain">
    <div class="content">
      <p class="Montserrat text-white text-center m-0">{{BrandContact.title}}</p>
      <p class="title Montserrat text-white text-center fw-bold">
        {{BrandContact.content}}
      </p>
      <div class="d-flex justify-content-center">
        <button class="btn-start Montserrat bg-white border-0" @click="showModal('https://docs.google.com/forms/d/e/1FAIpQLSc5rKbbdkCqXxSwCcW18BP-VsqCgC8THwk_msDbka0VSrWzeg/viewform?embedded=true')">
          <p class="m-0 px-3 py-1 border border-dark">{{BrandContact.getStartedButtonText}}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

var { 
  mapActions: interfaceActions,
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "ContactSection",
  methods: {
    ...interfaceActions({
      showModal:"showModal"
    })
  },
  computed: {
    ...interfaceGetters({
      BrandContact: "getBrandContact",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  padding: 0 10vw;
  margin-top: 50px;
  margin-bottom: 120px;
}
.content {
  background: url("../../assets/images/Discover_BG.png") no-repeat;
  background-size: 100% 100%;
  padding: 50px;
}
.title {
  font-size: 25px;
}
.btn-start {
  padding: 6px;
  color: black;
  border-radius: 3px;
}
</style>
