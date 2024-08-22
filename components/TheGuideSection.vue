<template>
  <section class="flex items-center justify-center py-28">
    <div class="max-w-7xl px-8 lg:px-0">
      <div class="grid grid-cols-2 gap-12 items-center">
        <div class="p-2.5 col-span-2 md:col-span-1">
          <h2 class="pb-2.5 mb-4 lg:text-huge uppercase">
            we'll <strong>guid you step by step.</strong>
          </h2>
          <p class="mb-4">
            Not technically savvy? Never had a website built for you before?
            Don’t worry. We’ll guide you step by step through the process with
            videos and clear instructions as we work together to build you your
            dream website.
          </p>
          <p>
            We’ve worked with everyone from hyper-savvy 25-year-old startup
            founders to elderly business owners who need some extra support.
          </p>
        </div>
        <div
          class="flex justify-center md:justify-end col-span-2 md:col-span-1"
        >
          <img src="/public/images/site_2.jpg" alt="" class="w-full h-full" />
        </div>
        <div class="col-span-2 flex items-center justify-center p-12">
          <TheButton button-text="Apply in 2 minutes" @click="openModal" />
        </div>
      </div>
    </div>
    <TheHireUsModal
      :modalOpen="modalOpen"
      :closeModal="closeModal"
      @close="closeModal"
    />
  </section>
</template>
<script setup>
const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};
const closeModal = () => {
  modalOpen.value = false;
};
</script>
