<template>
  <div class="p-2 border card position-relative m-3">
    <div v-if="image" class="imgBlock center">
      <img :src="image" alt="" style="width:100%"/>
    </div>
    <p :class="titleClass" class="Montserrat fw-bold mt-4 small-font">
      {{title}}
    </p>
    <p class="Montserrat content small-font linebreaks" >
      {{description.replaceAll('\\n','\n')}}
    </p>
    <div class="d-flex" v-if="link">
      <a :href="link" target="_new" class="bland-link">
        <p class="Montserrat fw-bold small-font">Read More</p>
        <div>
          <img src="../../assets/images/arrow.png" class="arrow" alt="" />
        </div>
      </a>
    </div>
    <div
      class="date-right d-flex flex-column align-items-center position-absolute"
    >
      <p class="text-white m-0 Montserrat">{{day}}</p>
      <p class="text-white small-font month Montserrat">{{month}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsArticle",
  props: {
    title: String,
    description: String,
    day: Number,
    month: String,
    image: String,
    link: String,
  },
  computed: {
    titleClass() {
      if (this.image) return null;
      return "smallTitle"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.linebreaks {
  white-space: pre-line;
}
.smallTitle {
  width: 80%;
}
.imgBlock {
  min-height: 150px;
  
}
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
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
