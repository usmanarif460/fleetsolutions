<template>
  <div
    class="flex items-center justify-center px-6 py-8 m-4 bg-white hover:text-white hover:bg-purple rounded-xl shadow-lg transition-all">
    <div>
      <figure class="w-28 hidden md:block mb-5">
        <img :width="imgWidth" :height="imgHeight" :src="imgUrl" alt="Feature Photo" />
      </figure>
      <div class="flex items-center flex-col gap-4">
        <h3 class="font-bold text-center md:text-2xl uppercase w-full">
          {{ heading }}
        </h3>
        <p class="text-center">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  imgUrl: {
    type: String,
    default: "",
  },
  imgWidth: {
    type: Number,
    default: 50,
  },
  imgHeight: {
    type: Number,
    default: 50,
  },
  heading: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>
