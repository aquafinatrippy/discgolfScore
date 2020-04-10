<template>
  <v-app>
    <v-container>
      <div class="text-center" style="padding-bottom: 5%;">
        <v-btn class="mx-2" fab dark large color="error" @click="reload()">
          <v-icon dark>mdi-refresh</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark large color="primary" @click="infoDialog = true">
          <v-icon dark>mdi-information-outline</v-icon>
        </v-btn>
        <v-btn class="mx-2" fab dark large color="success" @click="dialog = true">
          <v-icon dark>mdi-account-multiple-plus</v-icon>
        </v-btn>
      </div>
      <div v-if="players.length > 0">
        <v-row dense v-for="(player, i) in players" :key="i">
          <v-col cols="8">
            <v-card color="#009933" dark>
              <v-card-title class="headline">{{player.name}}</v-card-title>

              <v-card-subtitle>
                <h1>{{player.score}}</h1>
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
        <v-alert outlined type="warning" prominent border="left">Lisa mängija, et punkte lisada.</v-alert>
      </div>

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Lisa mängija</v-card-title>

          <v-card-text>
            <v-text-field v-model="playerName" label="Nimi"></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="addPlayer()">Lisa</v-btn>
            <v-btn color="danger" text @click="dialog = false">sulge</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="infoDialog" width="500">
        <v-card>
          <v-card-title class="headline grey lighten-2" primary-title>Rakenduse info</v-card-title>

          <v-card-text>Rakendus on loodud, et meeles pidada mugavalt oma discgolfi mängu skoori.</v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="danger" text @click="infoDialog = false">sulge</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    dialog: false,
    players: [],
    playerName: "",
    infoDialog: false
  }),
  methods: {
    addPlayer() {
      let players = this.players;
      let player = {
        name: this.playerName,
        score: 0
      };
      players.push(player);
      this.dialog = false;
    },
    reload() {
      location.reload();
    },
    playerRem(i) {
      this.players.splice(i, 1);
    }
  }
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
</style>
