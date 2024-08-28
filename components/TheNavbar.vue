<template>
  <header
    class="w-full py-4 bg-gradient-to-r from-indigo-100 to-violet-400 shadow-lg"
  >
    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div>
          <TheLogo class="lg:self-start self-center text-white" />
        </div>

        <!-- Desktop Navigation Links -->
        <ol class="hidden md:flex gap-8">
          <li
            v-for="(navItem, index) in navLinks"
            :key="index"
            :class="{
              'text-primary font-bold relative': currentPath === navItem.link,
              'text-white': currentPath !== navItem.link,
            }"
          >
            <a
              :href="navItem.link"
              class="hover:text-primary transition duration-300 relative group text-lg"
            >
              {{ navItem.title }}
              <!-- Fancy underline effect -->
              <span
                class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"
                :class="{ 'w-full': currentPath === navItem.link }"
              ></span>
            </a>
          </li>
        </ol>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden focus:outline-none text-white"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <!-- Fullscreen Mobile Navigation Menu -->
        <transition name="fade-slide">
          <div
            v-if="mobileMenuOpen"
            class="fixed inset-0 bg-indigo-500 flex flex-col items-center justify-center gap-8 text-white z-50 p-8"
          >
            <!-- Close Button -->
            <button
              @click="toggleMobileMenu"
              class="absolute top-4 right-4 text-white focus:outline-none"
            >
              <svg
                class="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <!-- Mobile Navigation Links -->
            <ol class="flex flex-col gap-4">
              <li
                v-for="(navItem, index) in navLinks"
                :key="index"
                :class="{
                  'text-primary font-bold': currentPath === navItem.link,
                  'text-white': currentPath !== navItem.link,
                }"
              >
                <a
                  @click="toggleMobileMenu"
                  :href="navItem.link"
                  class="hover:text-primary transition duration-300 text-lg"
                >
                  {{ navItem.title }}
                </a>
              </li>
            </ol>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const navLinks = [
  { link: "/", title: "Home" },
  { link: "#about", title: "About Us" },
  { link: "#projects", title: "Our Projects" },
  { link: "#contact", title: "Contact Us" },
];

const route = useRoute();
const currentPath = route.path;
const mobileMenuOpen = ref(false);

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter,
.fade-slide-leave-to /* .fade-slide-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
</style>
