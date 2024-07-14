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
          to: "malenabeige@fthcapital.com",
        },
        smtp: {
          service: "gmail",
          host: "email-smtp.us-east-1.amazonaws.com",
          port: 587,
          auth: {
            user: "sheraz.dev121@gmail.com",
            pass: "fenralbfxutlgnho",
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
