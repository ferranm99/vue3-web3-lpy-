<template>
  <div class='ontop clickable'>
    <div class="d-flex justify-content-between questionbtn">
      <p class="Montserrat text-white">
        Q &nbsp; &nbsp; {{question}}
      </p>
      <p class="Montserrat text-white" v-if="visible">-</p>
      <p class="Montserrat text-white" v-if="!visible">+</p>
    </div>
    <transition name="fade" mode="in-out">
      <div v-show="visible">
      <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "QAExpandCard",
  props: {
    question: String,
    visible: Boolean
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clickable {
  cursor: pointer;
}
.ontop {
  z-index: 1;
}
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

.questionbtn {
  user-select: none;
}
@media screen and (max-width: 750px) {
  .card-contain {
    margin-top: 20px;
  }
}
</style>
