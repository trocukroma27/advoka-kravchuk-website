<script lang="ts" setup>
const { setLocale, locales, locale } = useI18n()

const anotherLocale = computed(() => {
  return locales.value.find(i => i.code !== locale.value)
})
</script>

<template>
  <UButton
    color="gray"
    variant="ghost"
    :label="anotherLocale?.code.toUpperCase()"
    @click="setLocale(anotherLocale?.code!)"
  />
</template>
