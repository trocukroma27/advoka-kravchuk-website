import type { UseFetchOptions } from 'nuxt/app'

export function useApi<T>(
  url: string | (() => string),
  opts: UseFetchOptions<T> = {},
) {
  const { locale } = useI18n();

  opts.headers = {
    ...(opts.headers || {}),
    'Accept-Language': locale.value || 'uk'
  };

  opts.query = {
    ...(opts.query || {}),
    lang: locale.value || 'uk'
  };

  return useFetch(url, {
    ...opts
  })
}
