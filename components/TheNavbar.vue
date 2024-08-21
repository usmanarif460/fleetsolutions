<template>
  <header
    class="w-full py-4 bg-gradient-to-r from-indigo-100 to-violet-400 shadow-lg"
  >
    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <div>
          <TheLogo class="lg:self-start self-center text-white" />
        </div>
        <ol class="flex gap-8">
          <li
            v-for="(navItem, index) in navLinks"
            :key="index"
            :class="{
              'text-yellow-300 font-bold relative':
                currentPath === navItem.link,
              'text-white': currentPath !== navItem.link,
            }"
          >
            <a
              :href="navItem.link"
              class="hover:text-yellow-300 transition duration-300 relative group"
            >
              {{ navItem.title }}
              <!-- Fancy underline effect -->
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-500 group-hover:w-full"
                :class="{ 'w-full': currentPath === navItem.link }"
              ></span>
            </a>
          </li>
        </ol>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";

const navLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/about",
    title: "About Us",
  },
  {
    link: "/projects",
    title: "Our Projects",
  },
  {
    link: "/contact",
    title: "Contact Us",
  },
];

const route = useRoute();
const currentPath = route.path;
</script>
