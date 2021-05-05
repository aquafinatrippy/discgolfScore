<template>
  <div v-if="players.length > 0">
    <v-row dense v-for="(player, i) in players" :key="i">
      <v-col cols="8">
        <v-card color="#009933" dark>
          <v-card-title class="headline">{{ player.name }}</v-card-title>

          <v-card-subtitle>
            <h1>{{ player.score }}</h1>
          </v-card-subtitle>

          <v-card-actions class="text-right" color="error">
            <v-btn text @click="playerRem(i)">Eemalda mängija</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="4" class="ratinBtns">
        <v-btn large class="mx-2" color="success" @click="player.score += 1">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn large class="mx-2" color="error" @click="player.score -= 1">
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
  <div v-else>
    <v-alert outlined type="warning" prominent border="left"
      >Lisa mängija, et punkte lisada.</v-alert
    >
  </div>
</template>

<script>
export default {
  name: "PlayerList",
  props: ["players"],
  methods: {
    playerRem(i) {
      this.players.splice(i, 1);
    },
  },
};
</script>
