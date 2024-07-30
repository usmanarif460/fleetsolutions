<template>
  <section class="lg:py-48 py-24 bg-purple flex items-center justify-center">
    <div class="max-7xl text-center text-white">
      <h3 class="text-huge uppercase font-bold mb-8">Apply now</h3>
      <p class="text-2xl mb-4">
        We’ll review your application and see if you’re a good fit within 24-48
        hours.
      </p>
      <p class="text-2xl mb-12">
        If so, we’ll assign you a Senior Developer and build your website… for
        free!
      </p>
      <TheButton button-text="Apply in 2 minutes" @click="openModal" />
    </div>
    <TheHireUsModal :modalOpen="modalOpen" :closeModal="closeModal" @close="closeModal" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import TheButton from "./TheButton.vue";
import TheHireUsModal from "./TheHireUsModal.vue";

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};
</script>
