<template>
  <router-view />
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

var { 
  mapActions: tokenActions,
} = createNamespacedHelpers("token-interface");

window.timeout = 10000;
if (process.env.NODE_ENV === "production") {
  window.timeout = 1000;
}

export default {
  name: "App",
  mounted() {
    this.initWeb3();
  },
  methods: {
    ...tokenActions({
      initWeb3:"init",
    })
  }
};
</script>

<style>
body {
  margin: 0;
}
img {
  pointer-events: none;
}
@font-face {
  font-family: "Gotham";
  src: local("Gotham"), url(./assets/fonts/Gotham-book.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url(./assets/fonts/Montserrat-Medium.ttf) format("truetype");
}
@font-face {
  font-family: "Arboria";
  src: local("Arboria"), url(./assets/fonts/Arboria-Book.ttf) format("truetype");
}
@font-face {
  font-family: "Montserrat-Light";
  src: local("Montserrat-Light"),
    url(./assets/fonts/Montserrat-Light.ttf) format("truetype");
}
.Arboria {
  font-family: "Arboria";
}
.Montserrat {
  font-family: "Montserrat";
}
.Montserrat-Light {
  font-family: "Montserrat-Light";
}
.Gotham {
  --font-family: "Gotham";
}
.big {
  font-size: 30px;
}
.medium {
  font-size: 20px;
}
.mininum {
  font-size: 12px;
}
</style>
