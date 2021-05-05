<template>
  
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title
        >Rakenduse info</v-card-title
      >

      <v-card-text
        >Rakendus on loodud, et meeles pidada mugavalt oma discgolfi mängu
        skoori.</v-card-text
      >

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="danger" text @click="infoDialog = false">sulge</v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      aboutDialog: false
    };
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
  }
};
</script>
