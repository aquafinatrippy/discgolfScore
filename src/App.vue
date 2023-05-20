<template>
  <v-app>
    <router-view style="z-index: 1" />
    <particles-bg
      style="z-index: 0"
      :canvas="{ backgroundColor: '#888' }"
      type="polygon"
      :num="5"
      :bg="true"
    />
  </v-app>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  components: { ParticlesBg },
};
</script>

<style lang="scss">
.theme--light.v-application {
  background: rgba(0, 0, 0, 0.53);
  color: white;
}
.ratinBtns {
  display: flex;
  flex-direction: column;
  button {
    margin: auto 0;
  }
}
canvas {
  z-index: 1;
}
.content {
  z-index: 2;
}
</style>
