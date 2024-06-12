<template>
  <button
    :type="buttonType"
    @click="onClick && onClick()"
    class="bg-primary text-white font-medium rounded-full px-6 py-3 text-lg disabled:bg-gray-100 disabled:cursor-not-allowed transition-all hover:bg-purple"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    default: "",
  },
  buttonType: {
    type: String,
    default: "button",
  },
  onClick: {
    type: Function,
    default: null,
  },
});
</script>
