<template>
  <div class="roadmapIcon">
    <svg class="cardBubble" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 131.7 175.7" style="enable-background:new 0 0 131.7 175.7;" xml:space="preserve">
      <path :style="{fill:bgColor}" class="bg" d="M130.3,87.9l-13.3-7.4c0.4-5.6,1.2-11.8,2.5-18.4c1.2-6.3,2.6-12,4.2-17.1C88.5,30.4,53.4,15.8,18.2,1.2
        C11.2,19.2,1.8,50,2.5,89c0.7,37.2,10.2,66.5,17.5,84c35-14.9,70-29.8,104.9-44.7c-2-5.2-3.9-11.5-5.4-18.6
        c-1.1-5.4-1.7-10.4-2-14.8C121.8,92.5,126.1,90.2,130.3,87.9z"/>
      <path class="bar" d="M97.3,88.6c0.3,8.2,1.3,18,3.8,28.8c1.6,7,3.6,13.3,5.6,18.8c6.1-2.6,12.1-5.2,18.2-7.7
        c-2-5.3-3.9-11.5-5.4-18.7c-1.1-5.3-1.7-10.3-2-14.7c4.3-2.3,8.5-4.6,12.8-7l-13.3-7.4c0.4-5.6,1.2-11.8,2.5-18.5
        c1.2-6.2,2.6-11.9,4.2-17c-6-2.5-11.9-4.9-17.9-7.4c-2.3,6.2-4.4,13.6-6,22C97.7,70.7,97.2,80.5,97.3,88.6z"/>
    </svg>
    <span class="text"><div :style="'transform: rotate(' + -rotation + 'deg);'">{{number}}<br/>{{yearNumber()}}</div></span>
  </div>
</template>
<script>
//import { h } from 'vue';

export default {
  name: "RoadmapIcon",
  props: {
    rotation: Number,
    number: String,
    year: String,
    content: String,
    bgColor: String,
  },
  methods: {
    slotItems() {
      return;
    },
    yearNumber() {
      return parseInt(this.year);
    }
  },
  components: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.roadmapIcon {
  position: absolute;
  top: 50%;
  left: 50%;
}
.text {
  display: relative;
  text-align: center;
  position: absolute;
  font-family: "Gotham";
  font-weight: 600;
  color: white;
  transform: translate(-213%, -50%);
  width: 180px;
}
.cardBubble {
  transform: scale(.49) translate(-222%, -100%) rotate(-.5deg);
  opacity: .9;
  width:180px;
}
.bg {
  fill: white;
}
.bar {
  opacity: 0.3;
}
</style>
