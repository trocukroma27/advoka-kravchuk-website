<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section class="w-full">
    <UContainer class="max-w-4xl py-8">
      <h3 class="my-2 text-lg font-bold text-gray-900 dark:text-gray-100">
        {{ title }}
      </h3>
      <div
        class="mt-4 content font-light text-gray-700 dark:text-gray-300 leading-6"
      >
        <ContentSlot :use="$slots.description" />
      </div>
    </UContainer>
  </section>
</template>
