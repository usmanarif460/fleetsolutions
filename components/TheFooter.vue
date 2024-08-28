<template>
  <footer class="py-20 flex items-center justify-center bg-indigo-900">
    <div class="max-w-7xl">
      <div
        class="pb-8 md:pb-16 flex flex-col lg:grid lg:grid-cols-4 border-b gap-4 px-8 lg:px-0"
      >
        <div class="flex lg:items-center lg:justify-center p-2.5">
          <img
            src="/public/images/logo.png"
            alt="Fleet Jobs Logo"
            width="300"
            height="118"
          />
        </div>

        <div class="flex items-center lg:justify-center gap-4">
          <span
            class="flex items-center justify-center p-4 bg-white/30 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>
          <div class="flex flex-col">
            <span class="text-lg font-semibold text-neutral-800">Phone:</span>
            <span class="text-white">
              {{ phone }}
            </span>
          </div>
        </div>
        <div class="flex items-center lg:justify-center gap-4">
          <span
            class="flex items-center justify-center p-4 bg-white/30 rounded-full text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </span>
          <div class="flex flex-col">
            <span class="text-lg font-semibold text-neutral-800">Email:</span>
            <a :href="`mailto:${email}`" class="text-primary">
              {{ email }}
            </a>
          </div>
        </div>
      </div>
      <div
        class="md:py-12 py-6 grid sm:grid-cols-2 lg:grid-cols-4 border-b place-items-start md:place-items-center w-full px-8 lg:px-0"
      >
        <div class="flex flex-col gap-4">
          <h4 class="font-bold text-2xl uppercase text-white">Navigation</h4>
          <ol class="flex flex-col">
            <li
              v-for="link in primaryLinks"
              :key="link.link"
              class="text-white opacity-80 hover:opacity-100 transition-all py-1 text-xl font-semibold"
            >
              <a :href="link.link">
                {{ link.text }}
              </a>
            </li>
          </ol>
        </div>
        <div class="flex flex-col gap-4 md:mt-12">
          <ol class="flex flex-col">
            <li
              v-for="link in secondaryLinks"
              :key="link.link"
              class="text-white opacity-80 hover:opacity-100 transition-all py-1 text-xl font-semibold"
            >
              <a :href="link.link">
                {{ link.text }}
              </a>
            </li>
          </ol>
        </div>

        <div class="flex flex-col gap-4">
          <h4 class="font-bold text-2xl uppercase text-white">Resources</h4>
          <ol class="flex flex-col">
            <li
              v-for="link in resources"
              :key="link.link"
              class="text-white opacity-80 hover:opacity-100 transition-all py-1 text-xl font-semibold"
            >
              <a :href="link.link">
                {{ link.text }}
              </a>
            </li>
          </ol>
        </div>
        <div class="flex flex-col gap-4">
          <h4 class="font-bold text-2xl uppercase text-white">Social Media</h4>
          <ol class="flex flex-col">
            <li
              v-for="link in socialMedia"
              :key="link.link"
              class="text-white opacity-80 hover:opacity-100 transition-all py-1 text-xl font-semibold"
            >
              <a :href="link.link">
                {{ link.text }}
              </a>
            </li>
          </ol>
        </div>
      </div>
      <div
        class="pt-12 flex flex-wrap md:items-center md:justify-between text-white px-4 md:px-8 lg:px-0"
      >
        <p>
          &copy; 2023
          <span class="font-bold uppercase text-primary">Fleet solutions</span>.
          All rights reserved.
        </p>
        <nav class="flex gap-4">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms And Conditions</a>
        </nav>
      </div>
    </div>
  </footer>
</template>
<script setup>
const phone = "929-299-8621";
const email = "fleetsolutionstech@gmail.com";
const primaryLinks = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "How It works",
    link: "/how-it-works",
  },
  {
    text: "Examples",
    link: "/examples",
  },
  {
    text: "Social Impact",
    link: "/social-impact",
  },
  {
    text: "FAQs",
    link: "faqs",
  },
];
const secondaryLinks = [
  {
    text: "Apply",
    link: "/apply",
  },
  {
    text: "Why We Do This",
    link: "/why-do-this",
  },
  {
    text: "Our Story",
    link: "/story",
  },
  {
    text: "Affiliate Program",
    link: "/affiliate-programs",
  },
  {
    text: "Additional Services",
    link: "/additional-services",
  },
];
const resources = [
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Blogs",
    link: "/blogs",
  },
  {
    text: "Tools",
    link: "/tools",
  },
  {
    text: "Videos",
    link: "/videos",
  },
  {
    text: "Reviews",
    link: "/reviews",
  },
];

// Update Links To orignal accounts
const socialMedia = [
  {
    text: "facebook",
    link: "/services",
  },
  {
    text: "Youtube",
    link: "/blogs",
  },
  {
    text: "Instagram",
    link: "/tools",
  },
  {
    text: "Behance",
    link: "/videos",
  },
  {
    text: "Linkedin",
    link: "/reviews",
  },
];
</script>
