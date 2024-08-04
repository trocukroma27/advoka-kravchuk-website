export default defineEventHandler((event) => {
  const queryLang = getQuery(event).lang;
  const headerLang = getHeader(event, 'Accept-Language');
  const lang = queryLang || headerLang || 'uk';
  event.context.lang = lang;
})
