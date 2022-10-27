<template>
  <div class="contain roadmap">
    <Navbar />
    <div class="d-flex justify-content-between flex-column flex-md-row mt-4">
      <div class="mt-5 item w-50">
        <p class="big text-white fw-bold Montserrat">{{RoadmapHeader.title}}</p>
        <p class="mininum Montserrat text-white">{{RoadmapHeader.body}}</p>
      </div>
      <div class="mt-5 item w-50 d-flex justify-content-center justify-content-md-end">
        <div>
          <div style="display:none;e overflow:visible; height: 0px; width: 0px;">
            <img src="../../assets/images/Graphic_1.png" class="token-banner" alt="">
          </div>
          <RoadmapImage>
            <RoadmapIcon 
              v-for="card in cards"
              :key="card.number"
              :number="card.number"
              :year="card.year"
              :content="card.content"
              :bgColor="card.bgColor">
            </RoadmapIcon>
          </RoadmapImage>
        </div>
      </div>
    </div>
  </div>
  <div class="tri-contain"></div>
</template>

<script>
import Navbar from '../../components/common/Navbar.vue'

import { createNamespacedHelpers } from "vuex";
import RoadmapImage from './RoadmapImage.vue';
import RoadmapIcon from './RoadmapIcon.vue';

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: 'HeaderSection',
  components: {
    Navbar,
    RoadmapImage,
    RoadmapIcon
  },
  computed: {
    ...interfaceGetters({
      cards: "getRoadmapCards",
      RoadmapHeader: "getRoadmapHeader",
    }),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contain {
  background: url("../../assets/images/back14.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw;
}
.tri-contain {
  background: url("../../assets/images/back13.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.btn-quote {
  background: #3085cb;
  padding: 8px 20px;
  border-radius: 2px;
}
.token-banner {
  width: 30vw;
  min-width: 300px;
  margin-top: 0px;
}
@media screen and (max-width: 760px) {
  .item {
    width: 100% !important;
  }
}
</style>

<style>
.roadmap .web3Icon {
  fill: white;
}
</style>