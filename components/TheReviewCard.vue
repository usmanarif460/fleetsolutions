<template>
  <blockquote class="py-10 px-8 bg-white block w-80 shadow-lg rounded-xl mt-12">
    <div class="flex flex-col gap-8 mb-6">
      <div class="flex items-center gap-2">
        <span
          v-for="star in stars"
          :key="star"
          :class="{
            'text-primary': star <= rating,
            'text-gray-300': star > rating,
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </span>
      </div>
      <p class="text-zinc-700 text-left text-xl">
        {{ reviewText }}
      </p>
    </div>
    <footer class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <h5 class="text-zinc-900 font-bold text-3xl">
          {{ clientName }}
        </h5>
      </div>
    </footer>
  </blockquote>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    reviewText: {
      type: String,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      stars: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style scoped>
.size-6 {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
