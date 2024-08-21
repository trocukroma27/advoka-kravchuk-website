export default defineEventHandler(async () => {
  const content = "# **Hello** _world_ \n > This is quote";
  return {
    hello: content,
  };
});
