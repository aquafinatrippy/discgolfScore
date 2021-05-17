<template>
  <v-container class="startCont">
    <v-card max-width="600" max-height="600">
      <v-card-title class="headline warning lighten-2" primary-title
        >Vali rada või loo enda rada</v-card-title
      >

      <v-card-text style="height: 100%;">
        <div class="cardContent">
          <h3>Raja loomine</h3>
          <strong>Vali mitu korvi on ja alusta skoori lugemist.</strong>

          <v-btn v-if="!create" color="primary" @click="create = true">
            <v-icon left>
              mdi-pencil </v-icon
            >Loo rada</v-btn
          >
          <br />
          <div v-if="create">
            <CreateTrack />
          </div>
          <v-divider></v-divider>

          <h3>Raja valimine</h3>
          <strong
            >Vali ette lisatud rada kus mängida sooviksid ja alusta soori
            lugemist.</strong
          >

          <v-btn color="primary">
            <v-icon left> mdi-pencil</v-icon>
            VALI RADA</v-btn
          >
          <br />
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import CreateTrack from "@/components/CreateTrack";

export default {
  name: "Start",
  components: {
      CreateTrack
  },
  data: () => ({
    create: false
  })
};
</script>

<style lang="scss" scoped>
.startCont {
  display: flex;
  justify-content: center;
  height: 100%;
}
.cardContent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
