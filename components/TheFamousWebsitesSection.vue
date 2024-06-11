<template>
  <section class="lg:py-24 flex items-center justify-center">
    <div class="p-2.5 max-w-7xl">
      <h3 class="uppercase font-bold lg:text-5xl pb-9 text-center">
        10,000+ websites built
      </h3>
      <ol class="flex items-center justify-between w-full gap-12">
        <li
          v-for="project in Projects"
          :key="project.demoLink"
          class="h-48 px-12 flex items-center justify-center bg-primary hover:bg-primary/80 transition-all cursor-pointer rounded-lg shadow-md"
        >
          <a :href="project.demoLink" target="blank">
            <img
              :src="project.logo"
              alt="Project Logo"
              width="150"
              height="150"
            />
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>
<script setup>
const Projects = [
  {
    demoLink: "https://park-place.vercel.app/",
    logo: "https://park-place.vercel.app/assets/logo-dark.svg",
  },
  {
    demoLink: "https://better-merchant.vercel.app/",
    logo: "https://better-merchant.vercel.app/images/logo.png",
  },
  {
    demoLink: "https://hacking-hr.vercel.app",
    logo: "https://hacking-hr.vercel.app/assets/logo.svg",
  },
];
</script>
