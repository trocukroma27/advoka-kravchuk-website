<script setup lang="ts">
import { PracticeCard } from "#components";

definePageMeta({
  title: "practices",
});

const localePath = useLocalePath();
const { t, locale } = useI18n();

const links = computed(() => [
  {
    label: t("home"),
    to: localePath("/"),
  },
  {
    label: t("practices"),
  },
]);

const { data: practices } = await useAsyncData("practices", () =>
  queryContent("/practices").where({ _locale: locale.value }).find(),
);
</script>

<template>
  <div class="w-full">
    <section
      class="bg-[url('/images/practices/contacts_bg.jpg')] bg-cover bg-no-repeat bg-center w-full h-min"
    >
      <div
        class="py-16 bg-gray-100 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70"
      >
        <UContainer class="max-w-2xl flex flex-col items-center gap-8">
          <h1
            class="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100"
          >
            {{ $t("practices") }}
          </h1>
          <UBreadcrumb :links="links" />
        </UContainer>
      </div>
    </section>
    <section>
      <UContainer class="flex flex-col items-center gap-16 py-16">
        <div
          class="w-full flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          <h1
            class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 basis-full md:basis-1/2"
          >
            {{ $t("lawyer_practices") }}
          </h1>
          <div
            class="pl-6 border-l-2 border-primary font-light text-gray-700 dark:text-gray-300 leading-6 basis-full md:basis-1/2"
          >
            {{ $t("order_services_long_instruction") }}
          </div>
        </div>
        <UDivider />
        <div
          class="w-full grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8 align-middle align-items-baseline justify-items-center"
        >
          <template v-for="(practice, index) in practices" :key="index">
            <div
              class="max-w-96"
              data-animation="fade-up"
              :data-animation-delay="index * 300"
            >
              <ContentRenderer :value="practice">
                <ContentRendererMarkdown
                  class="h-full"
                  :value="practice"
                  :components="{ practice: PracticeCard }"
                />
              </ContentRenderer>
            </div>
          </template>
        </div>
        <UDivider />
        <div
          class="flex flex-col md:flex-row flex-wrap items-center md:items-start gap-8 md:gap-12"
        >
          <div class="flex gap-4">
            <div
              class="flex items-center justify-center w-14 h-14 shrink-0 bg-primary-200/70 dark:bg-primary-200/20 rounded-full"
            >
              <UIcon
                name="i-material-symbols-light-edit-calendar"
                size="32"
                class="text-primary"
              />
            </div>
            <div class="max-w-96">
              <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">
                {{ $t("order_services") }}
              </h3>
              <p
                class="mt-2 text-sm font-thin text-gray-700 dark:text-gray-300"
              >
                {{ $t("order_services_instruction") }}
              </p>
            </div>
          </div>
          <UButton
            trailing-icon="i-fa6-solid-angle-right"
            variant="solid"
            size="md"
            class="text-sm md:text-base px-6 py-4"
            data-animation="fade-left"
            :to="localePath('/contacts')"
          >
            {{ $t("order_now") }}
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
