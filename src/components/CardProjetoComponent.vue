<template>
  <div
    class="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-0 overflow-hidden"
  >
    <div class="relative overflow-hidden">
      <template v-if="project.mediaType === 'video'">
        <video
          :src="project.media"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          autoplay
          muted
          loop
          playsinline
        ></video>
      </template>
      <template v-else>
        <img
          :src="project.media"
          :alt="project.title"
          class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </template>

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      ></div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-slate-900 mb-2">{{ project.title }}</h3>
      <p class="text-slate-600 mb-4">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tech, index) in project.tech"
          :key="index"
          class="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded-md"
        >
          {{ tech }}
        </span>
      </div>
      <div class="flex space-x-2">
        <Button variant="outlined" @click="openLink(project.github)">
          <Github class="mr-2 h-4 w-4" />
          Código
        </Button>
        <Button v-if="project.live" @click="openLink(project.live)">
          <ExternalLink class="mr-2 h-4 w-4" />
          Demo
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { Github, ExternalLink } from "lucide-vue-next";
import openLink from "../utils/openLink.js";
import Button from "../components/ButtonComponent.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
