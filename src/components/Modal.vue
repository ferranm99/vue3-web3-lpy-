<template>
  <transition name="modal">
    <div v-show="show" :class="classLabel('-surround')">
      <div class="clickableBackground" @click="fireBackgroundClick()"></div>
      <div :class="classLabel('-wrapper')" >
        <div :class="classLabel('-container')">
          <div v-if="header" :class="classLabel('-header')">
            {{header}}
          </div>
          <div :class="classLabel('-body')">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show:  Boolean,
    onBackgroundClick: Function,
    header: String,
    footer: String,
    classPrep: String,
  },
  methods: {
    fireBackgroundClick() {
      if (typeof this.onBackgroundClick === 'function') this.onBackgroundClick();
    },
    classLabel(appended) {
      return (this.classPrep || "mod") + appended
    }
  },
  computed: {
  }

  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.clickableBackground {
  position: absolute;
  top:0px;
  left: 0px;
  background-color: rgb(255,255,255,.3);
  height: 100vh;
  width: 100vw;
}


.mod-surround {
  position: fixed; 
  background-color: rgb(0,0,0,.6); 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
}
.mod-end {
  clear: both;
}

.mod-wrapper {
  --display: table-cell;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80vw;
  transform: translate(-50%, -50%);
  vertical-align: middle;
}

.mod-container {
  height: 100%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.mod-body {
  margin: 10px 0;
  height: 100%;
}

.mod-default-button {
  float: right;
}

/*
 * the following styles are auto-applied to elements with
 * v-transition="modal" when their visiblity is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.mod-enter, .mod-leave {
  opacity: 0;
}

.mod-enter .mod-container,
.mod-leave .mod-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

@media screen and (max-width: 990px) {
  .mod-wrapper {
    width:95vw;
  }
}
</style>





