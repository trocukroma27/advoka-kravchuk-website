<script lang="ts" setup>
const localePath = useLocalePath();

defineProps({
  name: {
    type: String,
    default: "index",
  },
});
</script>

<template>
  <NuxtLink
    class="block w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 duration-300 group hover:-translate-y-2 hover:shadow-xl dark:shadow-[rgba(0,0,0,0.2)]"
    :to="localePath(`/practices/${name}`)"
  >
    <div class="aspect-video">
      <ContentSlot :use="$slots.image" unwrap="p" />
    </div>
    <div class="py-6 px-8">
      <h3
        class="my-2 text-lg fond-medium duration-100 group-hover:text-primary"
      >
        <ContentSlot :use="$slots.title" unwrap="p" />
      </h3>
      <div class="text-gray-700 dark:text-gray-300 font-thin text-sm">
        <ContentSlot :use="$slots.description" unwrap="p" />
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
  </NuxtLink>
</template>
