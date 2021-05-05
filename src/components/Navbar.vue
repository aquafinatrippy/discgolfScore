<template>
  <div>
    <div class="text-center" style="padding-bottom: 5%;">
      <v-btn class="mx-2" fab dark large color="error" @click="reload()">
        <v-icon dark>mdi-refresh</v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        large
        color="primary"
        @click="infoDialog = true"
        ><v-icon dark>mdi-information-outline</v-icon>
      </v-btn>
    </div>
    <v-dialog v-model="infoDialog" width="500">
      <About />
    </v-dialog>
  </div>
</template>

<script>
import About from "@/components/About";
export default {
  name: "Navbar",
  data: () => ({
    infoDialog: false,
  }),
  components: {
    About,
  },
  methods: {
    reload() {
      location.reload();
    },
  },
};
</script>
