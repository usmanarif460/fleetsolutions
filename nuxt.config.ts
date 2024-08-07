import dotenv from 'dotenv'

// Load .env file
dotenv.config()
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
          to: process.env.SITE_MAIL_RECIEVER,
          cc: process.env.SITE_MAIL_CC,
          bcc: process.env.SITE_MAIL_BCC,
        },
        smtp: {
          service: "gmail",
          host: "email-smtp.us-east-1.amazonaws.com",
          port: 587,
          auth: {
            user: process.env.SITE_MAIL_RECIEVER,
            pass: process.env.SMTP_SERVER_PASSWORD,
          },
        },
      },
    ],
  ],

  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true,
  },

  compatibilityDate: "2024-07-30",
});