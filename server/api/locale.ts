export default defineEventHandler(async event => {
  return {
    hello: event.context.lang
  }
})
