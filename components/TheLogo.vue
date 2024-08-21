<template>
  <div>
    <img class="w-12 h-12" :class="className" src="/images/2.png" alt="" />
  </div>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: "",
  },
});
</script>
