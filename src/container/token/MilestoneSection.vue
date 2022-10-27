<template>
  <div class="contain position-relative mt-5">
    <img
      src="../../assets/images/Group.png"
      class="position-absolute bg-img"
      alt=""
    />
    <p class="Montserrat medium text-center fw-bold">{{TokenContent.progress.title}}</p>
    <div
      class="d-flex flex-wrap flex-column flex-lg-row justify-content-between mt-5"
    >
      <Card
        v-for="item in TokenContent.progress.milestones"
        :key="item"
        :day="item.day"
        :month="item.month"
        :year="item.year"
        :content="item.content"
        />
    </div>
    <div class="d-flex justify-content-center mt-1">
      <button v-if="false" class="btn-view text-white border-0 Montserrat">
        {{TokenContent.progress.viewBlogsButtonText}}
      </button>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card.vue";
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "MilestoneSection",
  components: {
    Card,
  },
  computed: {
    ...interfaceGetters({
      TokenContent: "getTokenContent",
    }),
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  padding: 0 10vw;
}
.bg-img {
  width: 80vw;
  top: 0;
  left: 0;
}
.title {
  font-family: "Montserrat";
  font-size: 30px;
}
.btn-view {
  background: #3085cb;
  padding: 10px 20px;
  border-radius: 3px;
}
</style>
