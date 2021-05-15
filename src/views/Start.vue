<template>
    <v-container>
         <v-card max-width="600">
          <v-card-title class="headline grey lighten-2" primary-title
            >Vali rada või loo enda rada</v-card-title>

          <v-card-text>
              <strong>RAJA loomine </strong>
              <p>Vali mitu korvi on ja alusta skoori lugemist.</p>

             <v-btn>Loo rada</v-btn> <br>
               <strong>Raja valimine </strong>
              <p>Vali ette lisatud rada kus mängida sooviksid ja alusta soori lugemist.</p>

             <v-btn>VALI RADA</v-btn> <br>
          </v-card-text>

          <v-divider></v-divider>

        </v-card>
    </v-container>
</template>


<script>
export default {
    name: "Start"
}
</script>