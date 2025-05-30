<template>
    <div class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Habilidades</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
          <p class="text-slate-600 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CardHabilidadeComponent v-for="(skill, index) in skills" :key="index" :icon="skill.icon" :name="skill.name"
            :items="skill.items" />
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardHabilidadeComponent from '../components/CardHabilidadeComponent.vue'
import {
  Code,
  Palette,
  Gamepad2,
  Globe,
} from 'lucide-vue-next'

const skills = ref([
  { name: "Frontend", icon: Code, items: ["React", "Vue.js", "Bootstrap", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: Globe, items: [".Net", "Python", "PostgreSQL", "MySQL", "REST APIs", "PHP"] },
  { name: "Design", icon: Palette, items: ["Figma", "Canva", "UI/UX", "CapCut", "Krita"] },
  { name: "Games", icon: Gamepad2, items: ["Unity", "C#", "ShaderLab", "HTML", "HLSL"] },
])

</script>