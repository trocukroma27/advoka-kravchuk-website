<script lang="ts" setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtLinkLocale
    class="flex flex-col w-full h-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 duration-300 group hover:-translate-y-2 hover:shadow-xl dark:shadow-[rgba(0,0,0,0.2)]"
    :to="`/practices/${id}`"
  >
    <div class="aspect-video">
      <img :src="image" class="w-full h-full object-cover" />
    </div>
    <div class="flex flex-col justify-between py-6 px-8 grow">
      <h3
        class="my-2 text-lg fond-medium text-gray-900 dark:text-gray-100 duration-100 group-hover:text-primary"
      >
        {{ title }}
      </h3>
      <div class="text-gray-700 dark:text-gray-300 font-thin text-sm">
        <ContentSlot :use="$slots.shortDescription" unwrap="p" />
      </div>
      <div
        class="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 text-primary flex items-center justify-between"
      >
        {{ $t("more") }}
        <div
          class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"
        >
          <UIcon name="i-fa6-solid-angle-right" size="18" />
        </div>
      </div>
    </div>
  </NuxtLinkLocale>
</template>
