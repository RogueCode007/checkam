<template>
  <div id="app">
    <router-view/>
    <Loading v-if="$store.state.loading"/>
  </div>
</template>

<script>
import Loading from "@/components/Loading"
export default {
  components: {Loading}
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.l-modal{
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0, 0.3);
}
.loading-modal{
  min-height: 350px; 
}

</style>
