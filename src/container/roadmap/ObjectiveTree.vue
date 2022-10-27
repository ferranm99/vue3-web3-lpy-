<template>
 <div class="desktop-card">
    <div
      class="d-flex justify-content-center align-items-center mb-4 card-block"
    >
      <div class="d-flex align-items-center flex-column">
        <div class="blankCard"></div>
        <div v-for="(node, index) in oddSlotItems" :key="index">
          <VNodeRender :vnode="node"></VNodeRender>
          <div class="blankCard"></div>
        </div>
        <div v-if="allSlotItems.length % 2 == 0" class="blankCard"></div>
        
      </div>
      <div class="vertical-contain">
        <div
          class="vertical-line d-flex flex-column align-items-center justify-content-center"
        >
          <div class="blue-dot"></div>
          <div style="display:contents" v-for="(i, index) in allSlotItems" :key="index">
            <div class="line"></div>
            <div class="d-flex justify-content-center">
              <div v-if="index % 2 == 0" class="dotted-line">------</div>
              <div v-else class="dotted-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              <div class="dot d-flex justify-content-center align-items-center">
                <div class="black-dot"></div>
              </div>
              <div v-if="index % 2 != 0" class="dotted-line">-----</div>
              <div v-else class="dotted-line">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              
            </div>
          </div>
          <div class="line"></div>
          <div class="blue-dot"></div>
        </div>
      </div>

      <div class="d-flex align-items-center flex-column">
        <div v-if="allSlotItems.length % 2 == 0" class="blankCard"></div>
        <div class="blankCard"></div>
        <div v-for="(node, index) in evenSlotItems" :key="index">
          <VNodeRender :vnode="node"></VNodeRender>
          <div class="blankCard"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="mobile-card">
    <div class="d-flex flex-column align-items-center">
      <VNodeRender :vnode="allSlotItems"></VNodeRender>
    </div>
  </div>
</template>

<script>
//import { h } from 'vue';



export default {
  name: "ObjectiveTree",
  methods: {
    slotItems() {
      return;
    }
  },
  components: {
  },
  computed: {
    allSlotItems() {
      var slotItems = [];
      var slots = this.orderedSlots();

      for (var i = 0; i < slots.length; i++){
        var thisSlot = slots[i];
        if (typeof thisSlot.type === 'symbol' && thisSlot.children && Array.isArray(thisSlot.children)) thisSlot = thisSlot.children;
        if (Array.isArray(thisSlot)) {
          for(var s = 0; s < thisSlot.length; s++) {
            slotItems.push(thisSlot[s]);
          }
        }
        else {
          slotItems.push(thisSlot);
        }
      }
      return slotItems;
    },
    evenSlotItems() {
      return this.allSlotItems.filter((val, index) => index %2 != 0);    
    },
    oddSlotItems() {
      return this.allSlotItems.filter((val, index) => index %2 == 0);    
    }
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
