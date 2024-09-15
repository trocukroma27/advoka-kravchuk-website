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
      class="bg-[url('~/assets/images/contacts_bg.jpg')] bg-cover bg-no-repeat bg-center bg-opacity-10 w-full h-min"
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
        <div class="basis-2/5">Контактна інформація</div>
        <AppContactForm class="basis-3/5" />
      </UContainer>
    </section>
  </div>
</template>
