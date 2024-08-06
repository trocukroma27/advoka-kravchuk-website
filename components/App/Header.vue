<script lang="ts" setup>
const localePath = useLocalePath()
const { t } = useI18n()

const isMenuOpen = ref(false)

defineShortcuts({
  escape: {
    usingInput: true,
    whenever: [isMenuOpen],
    handler: () => { isMenuOpen.value = false }
  }
})

const click = () => {
  isMenuOpen.value = false
}

const links = computed(() => [
  {
    label: t('home'),
    to: localePath('/'),
    click
  },
  {
    label: t('practices'),
    to: localePath('/practices'),
    click
  },
  {
    label: t('blog'),
    to: localePath('/blog'),
    click
  },
  {
    label: t('contacts'),
    to: localePath('/contacts'),
    click
  },
  {
    label: t('documents'),
    to: localePath('/documents'),
    click
  }
])
</script>

<template>
  <header class="z-50 bg-gray-100 dark:bg-gray-900 h-[--header-height] sticky top-0 w-full border-b border-gray-200 dark:border-gray-800">
    <UContainer class="flex items-center justify-between gap-5 h-full">
      <NuxtLink to="/" class="flex flex-col flex-shrink-0 font-bold text-lg md:text-xl leading-6 text-primary-700 dark:text-primary-400 items-center">
        <span>{{ $t('lawyer') }}</span>
        <span class="text-sm md:text-base">{{ $t('oleksandr_kravchuk') }}</span>
      </NuxtLink>
      <UHorizontalNavigation
        :links="links"
        class="hidden lg:flex"
      />
      <div class="flex gap-2">
        <UButton
          icon="i-heroicons-phone-16-solid"
          color="primary"
          variant="link"
          :label="$t('phone_formatted')"
          :to="'tel:' + $t('phone')"
          :trailing="false"
          class="hidden xl:flex"
        />
        <AppLangButton />
        <AppThemeButton />
        <div class="flex lg:hidden">
          <UButton
            icon="i-heroicons-bars-3-20-solid"
            color="gray"
            variant="ghost"
            aria-label="Menu"
            @click="isMenuOpen = true"
          />
          <USlideover
            v-model="isMenuOpen"
            class="flex lg:hidden"
          >
            <div class="p-8 flex-1 flex flex-col gap-10">
              <UButton
                icon="i-heroicons-x-mark-20-solid"
                color="gray"
                variant="ghost"
                aria-label="Close Menu"
                class="self-end"
                @click="isMenuOpen = false"
              />
              <UVerticalNavigation :links="links" />
              <UButton
                icon="i-heroicons-phone-16-solid"
                color="primary"
                variant="link"
                :label="$t('phone_formatted')"
                :to="'tel:' + $t('phone')"
                :trailing="false"
              />
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400 font-light">
                  <span class="font-semibold">Адреса:</span> Україна, Волинська область,<br>
                  м. Нововолинськ, вулиця Грушевського, буд. 17
                </p>
                <div class="flex mt-4">
                  <UButton
                    icon="i-bxl-gmail"
                    color="gray"
                    variant="link"
                    to="mailto:advokat287@ukr.net"
                  />
                  <UButton
                    icon="i-fa-brands-telegram-plane"
                    color="gray"
                    variant="link"
                    :to="'https://t.me/'+ $t('telegram')"
                    target="_blank"
                  />
                  <UButton
                    icon="i-fa-brands-viber"
                    color="gray"
                    variant="link"
                    :to="'viber://chat?number=' + $t('phone')"
                    target="_blank"
                  />
                  <UButton
                    icon="i-fa-brands-whatsapp"
                    color="gray"
                    variant="link"
                    to="https://wa.me/380975148908"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
          </USlideover>
        </div>
      </div>
    </UContainer>
  </header>
</template>
