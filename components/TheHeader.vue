<template>
  <div class="bg-gradient-to-r from-indigo-100 to-violet-400 w-full object-cover pb-[5vh] min-h-[60vh]">
    <div class="max-w-7xl mx-auto w-full flex flex-col items-center pb-5 justify-center gap-6 px-12">
      <TheLogo class="lg:self-start self-center" />
      <div class="flex w-full items-center justify-center">
        <div class="flex gap-5 items-center justify-center w-full md:w-6/12">
          <img src="/images/crown-left.png" class="hidden md:block" alt="" />
          <p class="text-base text-white text-center">
            Working Since 2013 on several platforms Making
            <span class="underline text-primary">Clients</span> happier morre
            than ever
          </p>
          <img src="/images/crown-right.png" class="hidden md:block" alt="" />
        </div>
      </div>

      <h1 class="text-center text-white text-lg lg:text-6xl uppercase font-bold">
        Design Your website, promote it, develop it and grow your
        <span class="underline text-primary">business</span>
        with us.
      </h1>
      <TheButton button-text="Apply in 2 minutes" @click="openModal" />
    </div>
  </div>
  <TheHireUsModal :modalOpen="modalOpen" :closeModal="closeModal" @close="closeModal" />

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
