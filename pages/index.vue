<script setup lang="ts">
import { PracticeCard } from "#components";

const { locale } = useI18n();
const localePath = useLocalePath();

const { data: practices } = await useAsyncData("practices", () =>
  queryContent("/practices").where({ _locale: locale.value }).find(),
);
</script>

<template>
  <div class="w-full">
    <!-- Main section -->
    <section
      class="bg-[url('~/assets/images/main_bg.jpg')] bg-cover bg-no-repeat bg-center bg-opacity-10 w-full h-min"
    >
      <div
        class="py-16 bg-gray-100 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70"
      >
        <UContainer class="max-w-2xl flex flex-col items-center gap-8">
          <h1
            class="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100"
          >
            {{ $t("main_page.title") }}
          </h1>
          <p
            class="text-center text-gray-700 dark:text-gray-300 font-light text-sm md:text-base"
          >
            {{ $t("main_page.description") }}
          </p>
          <p
            class="text-center text-gray-700 dark:text-gray-300 font-extralight italic text-xs md:text-sm"
          >
            {{ $t("main_page.address_short") }}
          </p>
          <UButton
            color="primary"
            variant="solid"
            class="mt-4 md:mt-8 py-3 px-6 text-sm md:text-base"
            data-animation="fade-up"
            :to="localePath('/contacts')"
          >
            {{ $t("main_page.get_consultation") }}
          </UButton>
        </UContainer>
      </div>
    </section>
    <!-- Practices section -->
    <section>
      <UContainer class="flex flex-col items-center gap-16 py-16">
        <div class="w-full flex gap-8 justify-around flex-wrap">
          <template v-for="(practice, index) in practices" :key="index">
            <div
              class="basis-72 grow max-w-96"
              data-animation="fade-up"
              :data-animation-delay="index * 300"
            >
              <ContentRenderer :value="practice">
                <ContentRendererMarkdown
                  :value="practice"
                  :components="{ practice: PracticeCard }"
                />
              </ContentRenderer>
            </div>
          </template>
        </div>
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
            variant="outline"
            size="md"
            class="text-sm md:text-base px-6 py-4"
            data-animation="fade-left"
            :to="localePath('/practices')"
          >
            {{ $t("all_services") }}
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
