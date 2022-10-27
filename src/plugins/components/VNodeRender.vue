

<script>
import { h } from 'vue';


export default {
  name: 'VNodeRender',
  data() {
    return {
    }
  },
  props: {
    vnode: Object,
    childProps: Object
  },
  render() {
    var children = this.childrenRender();
    if (children.children) return children.children;
    return h('div', children);
  
  },
  methods:{
    childrenRender(){
      if (!this.vnode) return "add :vnode=\"\" pointed to vnode property";
      /* eslint-disable vue/no-mutating-props */
      if (this.childProps) this.vnode.props = Object.assign(this.vnode.props, this.childProps) 
      
      return this.vnode;
    },
  },
  computed:{
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only 
<style scoped>
</style>

-->