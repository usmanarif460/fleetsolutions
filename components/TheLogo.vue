<template>
  <a href="/" class="flex flex-col items-center">
    <img
      class="w-12 h-12"
      :class="className"
      src="/images/2.png"
      alt="Fleet Solutions Logo"
    />
    <p class="font-extrabold text-sm tracking-wide select-none text-violet-400">
      fleet <span class="text-primary">Solutions</span>
    </p>
  </a>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>
