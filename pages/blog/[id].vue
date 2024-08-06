<script setup lang="ts">
const route = useRoute();
definePageMeta({
  title: 'blog'
});
const id = route.params.id;
</script>

<template>
	<div>
    Стаття {{ id }}
  </div>
</template>
