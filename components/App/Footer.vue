<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

const links = computed(() => [
  {
    label: t("home"),
    to: localePath("/"),
  },
  {
    label: t("practices"),
    to: localePath("/practices"),
  },
  {
    label: t("blog"),
    to: localePath("/blog"),
  },
  {
    label: t("contacts"),
    to: localePath("/contacts"),
  },
  {
    label: t("documents"),
    to: localePath("/documents"),
  },
  {
    label: t("legal"),
    to: localePath("/legal"),
  },
]);
</script>

<template>
  <footer
    class="py-8 md:py-12 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
  >
    <UContainer class="flex flex-wrap gap-12 md:gap-16">
      <div class="flex flex-col items-start justify-between basis-64 grow">
        <div
          class="flex flex-col font-bold text-lg md:text-xl leading-6 items-center"
        >
          <span>{{ $t("lawyer") }}</span>
          <span class="text-sm md:text-base">{{
            $t("oleksandr_kravchuk")
          }}</span>
        </div>

        <i18n-t
          tag="div"
          keypath="copyright"
          class="font-light text-xs text-gray-700 dark:text-gray-400"
        >
          <template #year>
            {{ new Date().getFullYear() }}
          </template>
        </i18n-t>
      </div>
      <div class="flex flex-col items-start basis-64 grow">
        <h4
          class="w-full relative text-md md:text-lg after:block after:content-[''] after:h-[1px] after:w-full after:bg-gray-200 dark:after:bg-gray-800 after:absolute after:top-[31px] before:block before:content-[''] before:h-[2px] before:w-12 before:bg-primary-500 before:absolute before:top-[30px] before:z-10"
        >
          {{ $t("navigation") }}
        </h4>
        <ul class="mt-6 flex flex-col gap-3">
          <li
            v-for="(link, index) in links"
            :key="index"
            class="flex gap-3 items-center text-sm md:text-md font-normal text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <div class="bg-primary w-2 h-2 rounded-full" />
            <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-start basis-64 grow">
        <h4
          class="w-full relative text-md md:text-lg after:block after:content-[''] after:h-[1px] after:w-full after:bg-gray-200 dark:after:bg-gray-800 after:absolute after:top-[31px] before:block before:content-[''] before:h-[2px] before:w-12 before:bg-primary-500 before:absolute before:top-[30px] before:z-10"
        >
          {{ $t("contacts") }}
        </h4>
        <div
          class="mt-6 flex flex-col gap-3 text-sm md:text-md font-light text-gray-700 dark:text-gray-400"
        >
          <a
            :href="'tel:' + $t('phone')"
            class="hover:text-gray-900 dark:hover:text-gray-100"
          >
            <span class="font-semibold">{{ $t("phone_title") }}:</span>
            {{ $t("phone_formatted") }}
          </a>
          <p>
            <span class="font-semibold">{{ $t("work_schedule") }}:</span>
            {{ $t("mon-fri") }} 9:00-17:00
          </p>
          <p class="whitespace-pre-line">
            <span class="font-semibold">{{ $t("address_title") }}:</span>
            {{ $t("address") }}
          </p>
        </div>
        <div class="mt-4 flex grow items-end">
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
            :to="'https://t.me/' + $t('telegram')"
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
    </UContainer>
  </footer>
</template>
