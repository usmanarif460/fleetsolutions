<template>
    <div class="cursor-pointer" :class="iconColor">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" :class="iconSize ? iconSize : 'h-5 w-5'">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
</template>
<script setup>
defineProps({
    iconSize: {
        type: String,
        default: '',
    },
    iconColor: {
        type: String,
        default: '',
    },
});
</script>
