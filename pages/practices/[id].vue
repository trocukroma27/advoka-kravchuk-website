<script setup lang="ts">
import { Practice, PracticeCard } from "#components";
import type { ParsedContent } from "@nuxt/content";

definePageMeta({
  title: "practices",
});
const { locale } = useI18n();
const route = useRoute();
const id: string = route.params.id as string;

const { data: practice } = await useAsyncData("practice", () =>
  queryContent("/practices").where({ _locale: locale.value, id }).findOne(),
);

const bgImageUrl = computed(() => {
  if (practice.value?.image) {
    return practice.value?.image;
  }
  return "/images/practice_bg.jpg";
});

const { data: otherPractices } = await useAsyncData("otherPractices", () =>
  queryContent("/practices")
    .where({ _locale: locale.value })
    .findSurround({ id }, { before: 2, after: 2 }),
);

function filterOtherPractices(practices: ParsedContent[]): ParsedContent[] {
  if (practices[1] && practices[2]) {
    return practices.slice(1, 3);
  }

  return practices.filter((el) => !!el).slice(0, 2);
}
</script>

<template>
  <div v-if="practice" class="w-full">
    <section
      class="bg-cover bg-no-repeat bg-center w-full h-min"
      :style="`background-image: url('${bgImageUrl}');`"
    >
      <div
        class="py-24 bg-gray-100 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70"
      >
        <h1
          class="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100"
        >
          {{ practice.title }}
        </h1>
      </div>
    </section>
    <ContentRenderer :value="practice">
      <ContentRendererMarkdown
        :value="practice"
        :components="{ practice: Practice }"
      />
    </ContentRenderer>
    <section class="w-full">
      <UContainer class="max-w-4xl">
        <div
          class="p-4 bg-gray-200 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-md font-light text-gray-700 dark:text-gray-300 leading-6"
        >
          {{ $t("order_services_long_instruction") }}
        </div>
      </UContainer>
    </section>
    <section>
      <UContainer class="max-w-4xl flex flex-col items-center gap-16 py-16">
        <div class="w-full flex gap-8 justify-around flex-wrap">
          <template
            v-for="(otherPractice, index) in filterOtherPractices(
              otherPractices || [],
            )"
            :key="index"
          >
            <div
              v-if="otherPractice"
              class="basis-72 grow max-w-96"
              data-animation="fade-up"
              :data-animation-delay="index * 300"
            >
              <ContentRenderer :value="otherPractice">
                <ContentRendererMarkdown
                  :value="otherPractice"
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
