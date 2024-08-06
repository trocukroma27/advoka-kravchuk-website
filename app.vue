<script lang="ts" setup>
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
  :root {
    --header-height: 3.5rem;
  }

  @media (min-width: 768px) {
    :root {
      --header-height: 4rem;
    }
  }

  .light {
    background-color: rgb(var(--color-gray-100));
  }

  .dark {
    background-color: rgb(var(--color-gray-900));
  }
</style>
