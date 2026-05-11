<script setup>
const props = defineProps({
  id: Number,
  fotoGpu: String,
  nome: String,
  fabricante: String,
  precoMedio: Number,
  variacao7dias: Number,
});

const emit = defineEmits(["selecionar-gpu"]);

function aoClicar() {
  emit("selecionar-gpu", props);
}
</script>

<template>
  <div>
    <p>{{ id }}</p>
    <p>{{ fotoGpu }}</p>
    <p>{{ nome }}</p>
    <p>{{ fabricante }}</p>
    <p>{{ precoMedio }}</p>
    <p>{{ variacao7dias }}</p>
    <button @click="aoClicar">Histórico</button>
  </div>
</template>

<style scoped></style>
