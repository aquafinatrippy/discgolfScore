<template>
    <div>
        <v-text-field
        label="Korvide arv"
        :rules="[numberRule]"
        ></v-text-field>
    </div>
</template>

<script>
export default {
    name: "CreateTrack",
    data: () => ({
        numberRule: v  => {
            if (!v.trim()) return true;
            if (!isNaN(parseFloat(v)) && v >= 0 && v <= 999) return true;
            return 'Number has to be between 0 and 999';
        }, 
    })
}
</script>