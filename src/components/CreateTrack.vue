<template>
    <div>
        <v-text-field
        label="Korvide arv"
        :rules="[numberRule]"
        :value="caskets"
        ></v-text-field>
        <div class="btnCont">

        <v-btn color="primary">Alusta mängu</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "CreateTrack",
    data: () => ({
        numberRule: v  => {
            if (!isNaN(parseFloat(v)) && v >= 0 && v <= 99) return true;
            return 'Number has to be between 0 and 99';
        }, 
        caskets: 0
    })
}
</script>

<style lang="scss" scoped>
.btnCont{
    display: flex;
    justify-content: center;
}
</style>