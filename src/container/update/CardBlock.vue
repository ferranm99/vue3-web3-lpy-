<template>
  <div class="d-flex justify-content-between">
    <div class="d-flex justify-content-center align-items-stretch flex-wrap">
      <NewsArticle
        v-for="item in UpdateContent.articles"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :day="item.day"
        :month="item.month"
        :image="this.images[item.image]"
        :link="item.link"
      />

      <!-- <div v-if='false' class="p-2 border card position-relative m-3">
        <img src="../assets/images/Dreamstme_684240851.png" alt="" />
        <p class="Montserrat fw-bold mt-4 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-right d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">22</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <p class="Montserrat fw-bold mt-5 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <p class="Montserrat content small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry. Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-left d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">23</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <p class="Montserrat fw-bold mt-5 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <p class="Montserrat content small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry. Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-left d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">24</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <img src="../assets/images/girl.png" alt="" />
        <p class="Montserrat fw-bold mt-4 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <p class="Montserrat content small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry. Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-right d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">25</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <img src="../assets/images/About_Img.png" alt="" />
        <p class="Montserrat fw-bold mt-4 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-right d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">26</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <img src="../assets/images/Dreamstme_103336231.png" alt="" />
        <p class="Montserrat fw-bold mt-4 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-right d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">27</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <p class="Montserrat fw-bold mt-5 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <p class="Montserrat content small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry. Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-left d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">28</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div>
      <div class="p-2 border card position-relative m-3">
        <p class="Montserrat fw-bold mt-5 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <p class="Montserrat content small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
          industry. Lorem lpsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-left d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">29</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div> -->
      <!-- <div class="p-2 border card position-relative m-3">
        <img src="../assets/images/Dreamstme_1547420181.png" alt="" />
        <p class="Montserrat fw-bold mt-4 small-font">
          Lorem lpsum is simply dummy text of the printing and typesetting
        </p>
        <div class="d-flex">
          <p class="Montserrat fw-bold small-font">Read More</p>
          <div>
            <img src="../assets/images/arrow.png" class="arrow" alt="" />
          </div>
        </div>
        <div
          class="date-right d-flex flex-column align-items-center position-absolute"
        >
          <p class="text-white m-0 Montserrat">30</p>
          <p class="text-white small-font month Montserrat">NOV</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import NewsArticle from "./NewsArticle.vue";

import newswireImage from "../../assets/images/newswire.png";
import mediumImage from "../../assets/images/Medium.png";
import { createNamespacedHelpers } from "vuex";

var { mapGetters: interfaceGetters } =
  createNamespacedHelpers("interface-controls");

export default {
  data: () => {
    return {
      images:{
        "newswire": newswireImage,
        "medium": mediumImage,
      }
    };
  },
  components: { NewsArticle },
  name: "CardBlock",
  computed: {
    ...interfaceGetters({
      UpdateContent: "getUpdateContent",
    }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bland-link {
  display: inherit;
}
.small-font {
  font-size: 12px;
}
.card {
  width: 250px;
}
.content {
  color: grey;
}
.arrow {
  width: 6px;
  margin-top: -10px;
  margin-left: 6px;
}
.date-right {
  width: 40px;
  height: 40px;
  background: #3285ca;
  right: 8px;
}
.date-left {
  width: 40px;
  height: 40px;
  background: #3285ca;
  left: 8px;
}
.month {
  margin-top: -5px;
}
</style>
