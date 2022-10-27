<template>
  <div class="roadmapImage">
    <img class="bulb" src="../../assets/images/LightBulb.png"/>
    <div v-for="(node, index) in lastSixComponents" :key="index" class="icon">
      <VNodeRender v-if="index < 6" :vnode="node" :class="'icon' + index" :childProps="nodeProps(index)"></VNodeRender>
    </div>
  </div>
</template>
<script>
//import { h } from 'vue';

export default {
  name: "RoadmapImage",
  data() {
    return {
      rotations: [-33,17,66,115,163,212,]
    }
  },
  methods: {
    slotItems() {
      return;
    },
    nodeProps(index) {
      return {
        rotation: this.rotations[index]
      }
    },
  },
  components: {
  },
  computed: {
    lastSixComponents() {
      return this.allSlotItems.slice(-6);
    },
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
.roadmapImage {
  display:flex;
  position: relative;
  
  height: 300px;
  width: 300px;
  text-align: center;
  vertical-align: middle;
}
.bulb {
  width: 87px;
  position: absolute;
  top: 32%;
  left: 50%;
  transform: translate(-50%, 10%);
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: blue;
  height: 0px;
  width: 0px;

}
.icon0 {
  transform: rotate(-33deg);
}
.icon1 {
  transform: rotate(17deg );
}
.icon2 {
  transform: rotate(66deg);
}
.icon3 {
  transform: rotate(115deg);

}
.icon4 {
  transform: rotate(163deg);
}
.icon5 {
  transform: rotate(212deg);
}
</style>
