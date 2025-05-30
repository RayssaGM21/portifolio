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

  <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold text-slate-900 mb-4">Habilidades Comportamentais</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto mb-8"></div>
      <p class="text-slate-600 max-w-xl mx-auto mb-12">
        Além das habilidades técnicas, acredito que minhas qualidades interpessoais são essenciais para o sucesso em
        equipe e projetos.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
        <div>
          <h3 class="text-xl font-semibold text-purple-700 mb-2">Comunicação</h3>
          <p class="text-slate-700">Habilidade para transmitir ideias de forma clara e ouvir ativamente, facilitando a
            colaboração.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-purple-700 mb-2">Proatividade</h3>
          <p class="text-slate-700">Tomar iniciativa para resolver problemas e buscar melhorias contínuas.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-purple-700 mb-2">Trabalho em Equipe</h3>
          <p class="text-slate-700">Colaborar de maneira eficaz com colegas, respeitando diferentes opiniões e agregando
            valor.</p>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-purple-700 mb-2">Adaptabilidade</h3>
          <p class="text-slate-700">Capacidade de lidar com mudanças e aprender rapidamente em ambientes dinâmicos.</p>
        </div>
      </div>
    </div>
  </section>

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