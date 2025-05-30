<template>
  <div
    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center"
  >
    <div
      class="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4"
    >
      <component :is="icon" class="h-8 w-8 text-white" />
    </div>
    <h3 class="text-xl font-semibold text-slate-900 mb-4">{{ name }}</h3>
    <div class="space-y-2">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="inline-block px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md mr-2 mb-2"
      >
        {{ item }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: [Object, String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>
