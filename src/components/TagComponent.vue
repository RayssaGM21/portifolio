<template>
    <div class="bg-gray-100 rounded-2xl text-stone-800 p-[4px] w-fit font-semibold text-sm">
        <p>{{ title }}</p>
    </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>