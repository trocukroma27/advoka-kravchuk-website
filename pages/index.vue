<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div
    class="bg-[url('/images/main_bg.jpg')] bg-cover bg-no-repeat bg-center bg-opacity-10 w-full h-min"
  >
    <div
      class="py-16 bg-gray-100 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 bg-cover"
    >
      <UContainer class="max-w-2xl flex flex-col items-center gap-8">
        <h1
          class="text-2xl text-gray-800 dark:text-gray-200 md:text-3xl font-bold text-center"
        >
          {{ $t("main.title") }}
        </h1>
        <p
          class="text-center text-gray-700 dark:text-gray-300 font-light text-sm md:text-md"
        >
          {{ $t("main.description") }}
        </p>
        <p
          class="text-center text-gray-700 dark:text-gray-300 font-extralight italic text-xs md:text-sm"
        >
          {{ $t("main.address_short") }}
        </p>
        <UButton
          color="primary"
          variant="solid"
          :ui="{ rounded: 'rounded-full' }"
          class="mt-4 md:mt-8 py-3 px-6 text-sm md:text-base"
          :to="localePath('/contacts')"
        >
          {{ $t("main.get_consultation") }}
        </UButton>
      </UContainer>
    </div>
  </div>
</template>
