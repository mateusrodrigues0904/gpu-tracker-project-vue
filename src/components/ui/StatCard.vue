<script setup>

const props = defineProps({
    titulo: String,
    valor: String,
    subtitulo: String,
})

</script>




<template>
    <div>
        <p>{{ titulo }}</p>
        <p>{{ subtitulo }}</p>
        <p>{{ valor }}</p>
    </div>
</template>



<style scoped></style>