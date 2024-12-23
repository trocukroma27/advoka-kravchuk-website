<script setup lang="ts">
definePageMeta({
  title: "contacts",
});

const localePath = useLocalePath();
const { t } = useI18n();

const links = computed(() => [
  {
    label: t("home"),
    to: localePath("/"),
  },
  {
    label: t("contacts"),
  },
]);
</script>

<template>
  <div class="w-full">
    <section
      class="bg-[url('/images/contacts_bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-min"
    >
      <div
        class="py-16 bg-gray-100 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70"
      >
        <UContainer class="max-w-2xl flex flex-col items-center gap-8">
          <h1
            class="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100"
          >
            {{ $t("contacts_page.contact_us") }}
          </h1>
          <UBreadcrumb :links="links" />
        </UContainer>
      </div>
    </section>
    <section>
      <UContainer class="py-16 flex flex-col md:flex-row gap-12">
        <div
          class="basis-2/5 flex flex-col gap-6 my-12 text-gray-700 dark:text-gray-400 text-sm sm:text-base"
        >
          <div class="flex gap-4 flex-nowrap">
            <div class="size-12 min-w-12 flex items-center justify-center">
              <UIcon
                class="text-primary"
                name="i-fa6-regular-envelope-open"
                size="34"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h2
                class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100"
              >
                {{ $t("contacts") }}
              </h2>
              <a
                :href="'tel:' + $t('phone')"
                class="hover:text-gray-900 dark:hover:text-gray-100"
              >
                <span class="font-semibold">{{ $t("phone_title") }}:</span>
                {{ $t("phone_formatted") }}
              </a>
              <a
                href="mailto:advokat287@ukr.net"
                class="hover:text-gray-900 dark:hover:text-gray-100"
              >
                <span class="font-semibold">Email:</span>
                advokat287@ukr.net
              </a>
              <a
                :href="'https://t.me/' + $t('telegram')"
                class="hover:text-gray-900 dark:hover:text-gray-100"
              >
                <span class="font-semibold">Telegram:</span>
                @{{ $t("telegram") }}
              </a>
            </div>
          </div>
          <UDivider />
          <div class="flex gap-4 flex-nowrap">
            <div class="size-12 min-w-12 flex items-center justify-center">
              <UIcon
                class="text-primary"
                name="i-fa6-regular-calendar-check"
                size="38"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h2
                class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100"
              >
                {{ $t("work_schedule") }}
              </h2>
              <p>
                <span class="font-semibold">{{ $t("mon-fri") }}:</span>
                9:00-17:00
              </p>
              <p>
                <span class="font-semibold">{{ $t("sat-sun") }}:</span>
                {{ $t("day-off") }}
              </p>
            </div>
          </div>
          <UDivider />
          <div class="flex gap-4 flex-nowrap">
            <div class="size-12 min-w-12 flex items-center justify-center">
              <UIcon
                class="text-primary"
                name="i-heroicons-map-pin"
                size="40"
              />
            </div>
            <div class="flex flex-col gap-2">
              <h2
                class="text-lg sm:text-xl font-bold text-gray-900 dark:text-gray-100"
              >
                {{ $t("address_title") }}
              </h2>
              <p>
                {{ $t("address") }}
              </p>
            </div>
          </div>
        </div>
        <AppContactForm class="basis-3/5" />
      </UContainer>
    </section>
  </div>
</template>
