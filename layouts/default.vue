<script lang="ts" setup>
const route = useRoute();
const { t } = useI18n();

const head = useLocaleHead({
  identifierAttribute: 'id',
  addSeoAttributes: true
});

const title = computed(() => t(route.meta.title as string | undefined ?? 'title'));
const siteName = computed(() => t('title'));

useHead({
	script: [{
		type: 'application/ld-json',
		children: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": siteName,
			"url": process.env.BASE_URL
		}),
	}]
})
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
