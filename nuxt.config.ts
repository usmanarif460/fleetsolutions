export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@formkit/nuxt",
    "vue3-carousel-nuxt",
    [
      "nuxt-mail",
      {
        message: {
          to: "where-u-wnt-to-recieve-email",
        },
        smtp: {
          service: "gmail",
          host: "email-smtp.us-east-1.amazonaws.com",
          port: 587,
          auth: {
            user: "your-gmail",
            pass: "your-app-specific-password",
          },
        },
      },
    ],
  ],
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },
});
