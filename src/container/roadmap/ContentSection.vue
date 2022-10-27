<template>
  <div
    class="contain d-flex justify-content-center flex-column align-items-center"
  >
    <img src="../../assets/icons/Heading_Logo.png" class="logo" alt="" />
    <p class="Montserrat title text-center">
      {{RoadmapContent.title}}
    </p>
    <p class="Montserrat small-font text-center">
      {{RoadmapContent.body}}
    </p>
  </div>
  <ObjectiveTree>
    <RoadCard
      v-for="card in cards"
      :key="card.number"
      :number="card.number"
      :content="card.content"
      :year="card.year"
      :bgColor="card.bgColor"
    />
  </ObjectiveTree>
</template>

<script>
import RoadCard from "../../components/RoadCard.vue";
import ObjectiveTree from "./ObjectiveTree.vue";
import { createNamespacedHelpers } from "vuex";

var { mapGetters: interfaceGetters } =
  createNamespacedHelpers("interface-controls");

export default {
  name: "ContentSection",
  data() {
    return {
      // cards: [],
    };
  },
  components: {
    RoadCard,
    ObjectiveTree,
  },
  computed: {
    ...interfaceGetters({
      cards: "getRoadmapCards",
      RoadmapContent: "getRoadmapContent",
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
.logo {
  width: 40px;
}
.title {
  font-size: 30px;
}
.small-font {
  font-size: 12px;
}
.roadmap {
  width: 80vw;
  max-width: 800px;
  min-width: 320px;
}
.blankCard {
  width: 300px;
  height: 120px;
}
.card-block {
  margin-top: -80px;
}
.dot {
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: #30b4e4;
}
.blue-dot {
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: #30b4e4;
  margin-left: 4px;
}
.black-dot {
  width: 9px;
  height: 9px;
  border-radius: 10px;
  background: black;
}
.dotted-line {
  margin-top: -5px;
  height: 2px;
}
.line {
  width: 5px;
  height: 105px;
  margin-left: 4px;
  background: grey;
}
.mobile-card {
  display: none;
  margin-top: -80px;
  margin-bottom: 80px;
}
@media screen and (max-width: 750px) {
  .blankCard {
    display: none;
  }
  .vertical-contain {
    display: none;
  }
  .desktop-card {
    /* flex-direction: column; */
    display: none;
  }
  .mobile-card {
    display: block;
  }
}
</style>
