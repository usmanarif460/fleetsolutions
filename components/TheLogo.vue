<template>
  <div>
    <img class="w-24 h-24 object-cover" :class="className" src="/images/2.png" alt="" />
  </div>
</template>

<script setup>
defineProps: ({
  className: {
    type: String,
    default: "",
  }
});
</script>
