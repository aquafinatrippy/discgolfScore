<template>
    <v-container class="startCont">
         <v-card max-width="600" max-height="600">
          <v-card-title class="headline warning lighten-2" primary-title
            >Vali rada või loo enda rada</v-card-title>

          <v-card-text style="height: 100%;">
              <div class="cardContent">
                <strong>RAJA loomine </strong>
                <p>Vali mitu korvi on ja alusta skoori lugemist.</p>

                <v-btn color="primary">Loo rada</v-btn> <br>
                <v-divider></v-divider>

                <strong>Raja valimine </strong>
                <p>Vali ette lisatud rada kus mängida sooviksid ja alusta soori lugemist.</p>

                <v-btn color="primary">VALI RADA</v-btn> <br>
              </div>
             
          </v-card-text>



        </v-card>
    </v-container>
</template>


<script>
export default {
    name: "Start"
}
</script>

<style lang="scss" scoped>
.startCont{
   display: flex;
   justify-content: center;
   height: 100%;
}
.cardContent{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
</style>