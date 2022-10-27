<template>
  <div id="example">
      example component used to show vuex module usage <br/>
      <!-- Render stateContents from example module by accessing computed property -->
      {{ exampleStateContents }}
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

var { 
  mapGetters: exampleGetters,
  mapActions: exampleActions,
} = createNamespacedHelpers("example");

export default {
  name: 'ExampleModuleComponent',
  components: {
  },
  data: function () {
    return {
      UserGreeting: true
    }
  },
  computed:{
    ...exampleGetters({
      exampleStateContents :"getStateContents",
      exampleFirstContentElement:"getFirstContentElement",
      // propertyNameBecomesLocalComputedFunction: "stringValueIsGetterFromModule"
    }),
  },
  methods:{
     ...exampleActions({
      pullExampleStateContents:"fetchStateContents",
      // propertyNameBecomesMethod: "stringValueIsActionFromModule"
    }),
  },
  mounted(){
    this.pullExampleStateContents();// calls method from vue's "this" component
  }
}
</script>

