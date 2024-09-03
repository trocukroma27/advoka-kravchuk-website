<script setup lang="ts">
const route = useRoute();
definePageMeta({
  title: "practices",
});
const id = route.params.id;
</script>

<template>
  <div>Практикa {{ id }}</div>
</template>
