<template>
  <div
    class="contain d-flex justify-content-center flex-column align-items-center"
  >
    <img src="../../assets/icons/Heading_Logo.png" class="logo" alt="" />
    <p class="Montserrat title fw-bold text-center">
      {{UpdateContent.title}}
    </p>
    <CardBlock />
    <div class="d-flex mt-5" v-if='false'>
      <div class="pagination border d-flex justify-content-center align-items-center arrow mx-1">
        <img src="../../assets/images/whiteleftarrow.png" class="white-arrow" alt="">
      </div>
      <div class="pagination border d-flex justify-content-center align-items-center mx-1">1</div>
      <div class="pagination border d-flex justify-content-center align-items-center mx-1">2</div>
      <div class="pagination border d-flex justify-content-center align-items-center mx-1">3</div>
      <div class="pagination border d-flex justify-content-center align-items-center mx-1">4</div>
      <div class="pagination border d-flex justify-content-center align-items-center mx-1">5</div>
      <div class="pagination border d-flex justify-content-center align-items-center mx-1">6</div>
      <div class="pagination border d-flex justify-content-center align-items-center arrow mx-1">
        <img src="../../assets/images/whiterightarrow.png" class="white-arrow" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import CardBlock from './CardBlock.vue'

import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "ContentSection",
  components: {
    CardBlock
  },
  computed: {
    ...interfaceGetters({
      UpdateContent: "getUpdateContent",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  /* padding: 0 150px; */
  margin-top: 80px;
  margin-bottom: 100px;
}
.logo {
  width: 40px;
}
.title {
  font-size: 30px;
}
.small-font {
  font-size: 12px;
}
.pagination {
  width: 30px;
  height: 30px;
}
.arrow {
  background: #3285ca;
}
.white-arrow {
  width: 10px;
}
</style>
