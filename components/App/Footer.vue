<script setup lang="ts">
</script>

<template>
  <footer class="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
    <UContainer class="py-8 md:py-12 flex flex-wrap gap-12 md:gap-16">
      <div class="flex flex-col items-start justify-between basis-64 grow">
        <div
          class="flex flex-col font-bold text-lg md:text-xl leading-6 items-center"
        >
          <span>{{ $t('lawyer') }}</span>
          <span class="text-sm md:text-base">{{ $t('oleksandr_kravchuk') }}</span>
        </div>
        <div class="flex mt-8">
          <UButton
            icon="i-bxl-gmail"
            color="gray"
            variant="ghost"
            to="mailto:advokat287@ukr.net"
          />
          <UButton
            icon="i-fa-brands-telegram-plane"
            color="gray"
            variant="ghost"
            :to="'https://t.me/'+ $t('telegram')"
            target="_blank"
          />
          <UButton
            icon="i-fa-brands-viber"
            color="gray"
            variant="ghost"
            :to="'viber://chat?number=' + $t('phone')"
            target="_blank"
          />
          <UButton
            icon="i-fa-brands-whatsapp"
            color="gray"
            variant="ghost"
            to="https://wa.me/380975148908"
            target="_blank"
          />
        </div>
      </div>
      <div class="flex flex-col items-start basis-64 grow">
        <h4 class="w-full relative md:text-lg after:block after:content-[''] after:h-[1px] after:w-full after:bg-gray-200 dark:after:bg-gray-800 after:absolute after:top-[31px] before:block before:content-[''] before:h-[2px] before:w-12 before:bg-primary-500 before:absolute before:top-[30px] before:z-10">
          {{ $t('contacts') }}
        </h4>
      </div>
      <div class="flex flex-col items-start basis-64 grow">
        <h4 class="w-full relative md:text-lg after:block after:content-[''] after:h-[1px] after:w-full after:bg-gray-200 dark:after:bg-gray-800 after:absolute after:top-[31px] before:block before:content-[''] before:h-[2px] before:w-12 before:bg-primary-500 before:absolute before:top-[30px] before:z-10">
          {{ $t('information') }}
        </h4>
      </div>
    </UContainer>
  </footer>
</template>
