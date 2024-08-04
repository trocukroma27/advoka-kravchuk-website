<script setup lang="ts">
  const { data } = await useApi('/api/locale');
</script>

<template>
	<div>
    Головна
    {{ data }}
  </div>
</template>
