<script setup lang="ts">
import { PracticeCard } from "#components";

const { locale } = useI18n();
const localePath = useLocalePath();

const { data: practices } = await useAsyncData(`practices`, () =>
  queryContent("/practices").where({ _locale: locale.value }).find(),
);
</script>

<template>
  <!-- Main section -->
  <div class="w-full">
    <section
      class="bg-[url('/images/main_bg.jpg')] bg-cover bg-no-repeat bg-center bg-opacity-10 w-full h-min"
    >
      <div
        class="py-16 bg-gray-100 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70"
      >
        <UContainer class="max-w-2xl flex flex-col items-center gap-8">
          <h1
            class="text-2xl text-gray-800 dark:text-gray-200 md:text-3xl font-bold text-center"
          >
            {{ $t("main.title") }}
          </h1>
          <p
            class="text-center text-gray-700 dark:text-gray-300 font-light text-sm md:text-base"
          >
            {{ $t("main.description") }}
          </p>
          <p
            class="text-center text-gray-700 dark:text-gray-300 font-extralight italic text-xs md:text-sm"
          >
            {{ $t("main.address_short") }}
          </p>
          <UButton
            color="primary"
            variant="solid"
            :ui="{ rounded: 'rounded-full' }"
            class="mt-4 md:mt-8 py-3 px-6 text-sm md:text-base"
            :to="localePath('/contacts')"
          >
            {{ $t("main.get_consultation") }}
          </UButton>
        </UContainer>
      </div>
    </section>
    <section>
      <UContainer class="flex flex-col items-center gap-8 py-16">
        <div class="w-full flex gap-8 justify-around flex-wrap">
          <template v-for="(practice, index) in practices" :key="index">
            <div class="basis-72 grow max-w-96">
              <ContentRenderer :value="practice">
                <ContentRendererMarkdown
                  :value="practice"
                  :components="{ practice: PracticeCard }"
                />
              </ContentRenderer>
            </div>
          </template>
        </div>
      </UContainer>
    </section>
  </div>
</template>
