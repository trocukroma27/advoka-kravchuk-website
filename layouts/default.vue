<template>
  <div class="relative">
    <AppHeader />
    <div class="min-h-[calc(100dvh-var(--header-height))] flex">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>
