<template>
  <button :class="botaoClasses" class="flex">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "contained", // 'outlined' ou 'contained'
  },
});

const botaoClasses = computed(() => {
  return props.variant === "outlined"
    ? "flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-md transition-all duration-200"
    : "flex-1 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-700 hover:to-pink-700 rounded-md transition-all duration-200";
});
</script>
