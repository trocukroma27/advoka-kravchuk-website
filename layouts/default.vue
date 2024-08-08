<script lang="ts" setup>
const route = useRoute();
const { t } = useI18n();

const head = useLocaleHead({
  identifierAttribute: 'id',
  addSeoAttributes: true
});

const title = computed(() => t(route.meta.title as string | undefined ?? 'title'));

const jsonLd = computed(() => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": `https://advokat-kravchuk.nuxt.dev`,
    "name": 'Адвокат Олександр Кравчук',
    "alternateName": "Lawyer Oleksandr Kravchuk"
  };
});
useHead(() => ({
	script: [{
		type: 'application/ld-json',
		textContent: JSON.stringify(jsonLd.value),
	}]
}));
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <Meta name="description" :content="$t('description')" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:site_name" :content="$t('title')" />
        <Meta property="og:description" :content="$t('description')" />
        <Meta property="og:type" content="website" />
        <!-- TODO: Забрати цей мета тег після того як сайт буде готовий до публікації -->
        <Meta name="robots" content="noindex" />
        <template v-for="meta in head.meta" :key="meta.id">
			    <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body class="relative">
        <AppHeader />
        <div class="min-h-[calc(100dvh-var(--header-height))] flex">
          <slot />
        </div>
        <AppFooter />
      </Body>
    </Html>
  </div>
</template>
