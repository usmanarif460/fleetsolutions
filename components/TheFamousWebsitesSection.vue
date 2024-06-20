<template>
  <section class="lg:py-24 flex items-center justify-center">
    <div class="p-2.5 max-w-7xl">
      <h3 class="uppercase font-bold lg:text-5xl py-9 text-center">
        10,000+ websites built
      </h3>
      <ol class="flex-col md:flex-row flex items-center justify-center w-full gap-6 lg:gap-12">
        <li v-for="project in Projects" :key="project.demoLink"
          class="h-48 px-12 flex items-center justify-center bg-primary hover:bg-primary/80 hover:-translate-y-3 transition-all cursor-pointer rounded-lg shadow-md">
          <a :href="project.demoLink" target="blank">
            <img :src="project.logo" alt="Project Logo" width="150" height="150" />
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
  {
    demoLink: "https://edu-kappa.vercel.app/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJNGV-Q82yioJHzstZvfUpHUBFCesTcGmkEw&s",
  },
];
</script>
