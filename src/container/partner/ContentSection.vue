<template>
  <div class="contain">
    <div class="d-flex justify-content-between flex-column flex-md-row">
      <div class="w-50 item d-flex align-items-center justify-content-center justify-content-md-start">
        <div class="">
          <img
            src="../../assets/images/PartnerCardMockup.png"
            class="card border-0"
            alt=""
          />
        </div>
      </div>
      <div class="w-50 mt-5 item">
        <img src="../../assets/icons/Heading_Logo.png" class="logo" alt="" />
        <p class="medium fw-bold Montserrat mt-2">
          {{PartnersContent.title}}
        </p>
        <p class="Gotham mininum partners-text">
          {{PartnersContent.body}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: interfaceGetters,
} = createNamespacedHelpers("interface-controls");

export default {
  name: "ContentSection",
  computed: {
    ...interfaceGetters({
      PartnersContent: "getPartnersContent",
    }),
    PartnersContentTitleSplit() {
      return this.PartnersContentTitle && this.PartnersContentTitle.split(" ");
    },
    PartnersContentTitleFirst() {
      var split = this.PartnersContentTitleSplit;
      if (split.length > 0) {
        return split[0];
      }
      return '';
    },
    PartnersContentTitleLast() {
      var split = this.PartnersContentTitleSplit;
      if (split.length > 0) {
        return split.filter((v, i) => i > 0).join(" ");
      }
      return '';
    }
  }
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
.card {
  width: 30vw;
  min-width: 300px;
  z-index: 3;
  background: transparent;
}
.partners-text {
  white-space: pre-line;
}
@media screen and (max-width: 760px) {
  .item {
    width: 100% !important;
  }
}
</style>
