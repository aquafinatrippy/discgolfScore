<template>
  <v-app>
    <router-view  style="z-index:1;" />
    <particles-bg style="z-index:0;" :canvas="{backgroundColor:'#888'}" type="fountain" :num="5" :bg="true" />
  </v-app>
</template>

<script>

import { ParticlesBg } from "particles-bg-vue";
export default {
  components: {ParticlesBg}
};
</script>

<style lang="scss">
.ratinBtns {
  display: flex;
  flex-direction: column;
  button {
    margin: auto 0;
  }
}
canvas{
  z-index: 1;
}
.content{
  z-index: 2;
}
</style>
