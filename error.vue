<script lang="ts" setup>
const error = useError();
</script>

<template>
  <div>
    <NuxtLayout>
      <UContainer
        class="grow-1 flex items-center justify-center gap-3 md:gap-6"
      >
        <h1 class="text-2xl md:text-6xl text-primary">
          {{ error.statusCode }}
        </h1>
        <UDivider class="h-10 md:h-14" size="xs" orientation="vertical" />
        <h3 class="text-lg md:text-4xl text-primary">
          {{ error.statusCode == 404 ? $t("error_404") : $t("error_unknown") }}
        </h3>
      </UContainer>
    </NuxtLayout>
  </div>
</template>
