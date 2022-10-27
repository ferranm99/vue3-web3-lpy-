<template>
  <div class="top-contain mt-5"></div>
  <div class="contain position-relative">
    <img
      src="../../assets/images/Effectbg.png"
      class="position-absolute effect-back"
      alt=""
    />
    <div class="d-flex justify-content-center">
      <img src="../../assets/images/logotext.png" class="logo" alt="" />
    </div>
    <p class="Montserrat fw-bold title text-center text-white mt-2">
      {{BrandFaq.title}}
    </p>
    <p class="Montserrat-Light text-white text-center mt-4 mb-5">
      {{BrandFaq.description}}
    </p>
    <div class="px-5 position-relative">
      <img
        src="../../assets/images/CompositePath.png"
        class="position-absolute composite-bottom pointer-off"
        alt=""
      />
      <img
        src="../../assets/images/CompositePath1.png"
        class="position-absolute composite-top pointer-off"
        alt=""
      />
      <QAExpandCard v-for="(item, index) in BrandFaq.qaList" :key="item.q" 
      @click="toggleQuestion(index)"
      :visible='questionVisible(index)' 
        :question="item.q" >
        <div>
          <p class="Montserrat text-white m-0" style="height:0px">
            A &nbsp; &nbsp;
          </p>
          <p class="Montserrat-Light text-white ps-4 ms-2">
            {{item.a}}
          </p>
          <ul v-if="item.details && item.details.length > 0" class="ms-2 ps-5">
            <li v-for="(detail, i) in item.details" :key="i" class="Montserrat-Light text-white font-small">
              {{detail}}
            </li>
          </ul>
        </div>
      </QAExpandCard>
    </div>
  </div>
  <div class="down-contain"></div>
</template>

<script>
import QAExpandCard from '../../components/QAExpandCard.vue';
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  components: { QAExpandCard },
  name: "FaqSection",
  data() {
    return {
      questionsVisible:{}
    }
  },
  computed: {
    ...interfaceGetters({
      BrandFaq: "getBrandFaq",
    }),
  },
  methods:{
    toggleQuestion(qNum) {
      this.questionsVisible[qNum] = this.questionsVisible[qNum] != true;
    },
    questionVisible(qNum) {
      return this.questionsVisible[qNum] == true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pointer-off {
  pointer-events: none;
}
.contain {
  background: url("../../assets/images/back9.png") no-repeat;
  background-size: 100% 100%;
  padding: 0 10vw 30px 10vw;
  margin-top: -2px;
}
.top-contain {
  background: url("../../assets/images/back7.png") no-repeat;
  background-size: 100% 100%;
  height: 10vw;
}
.down-contain {
  background: url("../../assets/images/back8.png") no-repeat;
  margin-top: -2px;
  background-size: 100% 100%;
  height: 10vw;
}
.title {
  font-size: 30px;
}
.font-small {
  font-size: 12px;
}
.composite-bottom {
  bottom: -20px;
  left: 0;
}
.composite-top {
  right: 0;
  top: -20px;
}
.logo {
  width: 40px;
}
.effect-back {
  width: 40vw;
  left: 30%;
  top: 30%;
}
@media screen and (max-width: 600px) {
  .contain {
    padding: 0 0 30px 0;
  }
}


</style>
