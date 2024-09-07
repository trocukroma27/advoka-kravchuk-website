export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const elements = document.querySelectorAll<HTMLElement>("[data-animation]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            if (!element.classList.contains("animated")) {
              element.classList.add("animated");

              observer.unobserve(element);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    elements.forEach((element) => observer.observe(element));
  });
});
