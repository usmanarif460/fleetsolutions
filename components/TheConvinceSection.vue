<template>
  <section class="flex items-center justify-center py-28">
    <div class="max-w-7xl px-8 lg:px-0">
      <div class="grid grid-cols-2 gap-12 items-center place-items-center">
        <div class="p-2.5 col-span-2 md:col-span-1">
          <h2 class="pb-2.5 mb-4 lg:text-huge uppercase">
            we <strong>Won't Charge You</strong>
          </h2>
          <p class="mb-4">
            We build people professional websites <u>for free</u> that other
            agencies charge thousands of dollars for.
          </p>
          <p class="mb-4">
            The reason we do this is simple: it’s a great way for us to build
            connections with business owners who might hire us for larger paid
            projects as their companies grow.
          </p>
          <p class="mb-4">
            More than 95% of the people we’ve built websites for have been happy
            with the results, and about 18% go on to hire us for additional paid
            projects or recommend friends who do.
          </p>
          <div class="col-span-2 flex items-center justify-center p-12">
            <TheButton button-text="Apply in 2 minutes" @click="openModal" />
          </div>
        </div>
        <div
          class="flex justify-center md:justify-end col-span-2 md:col-span-1"
        >
          <img src="/public/images/site_4.jpg" alt="" class="h-96 w-96" />
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
