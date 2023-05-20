<template>
  <div class="pa-4 trackCounter">
    <p class="text-bold">Mitmes rada:</p>
    <div class="d-inline-flex">
      <v-btn x-large class="mx-2" color="error" @click="basket -= 1">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <h1>{{ basket }}</h1>
      <v-btn x-large class="mx-2" color="primary" @click="basket += 1">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrackBaskets",
  data() {
    return {
      basket: 0,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.trackCounter {
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
