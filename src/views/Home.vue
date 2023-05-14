<template>

  <v-app class="mt-10">

    <Navbar>

      <v-btn class="mx-2" fab dark large color="success" @click="dialog = true">

        <v-icon dark>mdi-account-multiple-plus</v-icon>

      </v-btn>

    </Navbar>

    <v-container>

      <PlayerList :players="players" />

      <v-dialog v-model="dialog" width="500">

        <v-card>

          <v-card-title class="headline grey lighten-2" primary-title>
             Lisa mängija
          </v-card-title>

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

    </v-container>

  </v-app>

</template>

<script>
 import Navbar from "@/components/Navbar"; import PlayerList from "@/components/PlayerList";
export default { name: "Home", components: { Navbar, PlayerList, }, data: () => ({
dialog: false, players: [], playerName: "", infoDialog: false, }), methods: { addPlayer()
{ let players = this.players; let player = { name: this.playerName, score: 0, };
players.push(player); this.dialog = false; }, }, };
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

