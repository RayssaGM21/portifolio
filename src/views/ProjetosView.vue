<template>
    <div class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Projetos</h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
                <p class="text-slate-600 max-w-2xl mx-auto">
                    Alguns dos projetos que desenvolvi, demonstrando minhas habilidades em diferentes tecnologias
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardProjeto v-for="(project, index) in projects" :key="index" :project="project" />
            </div>
        </div>
    </div>
</template>

<script setup>
import minicursoImg from '../assets/images/projetos/minicursoJS.png';
import minicursoPHPImg from '../assets/images/projetos/todoemdiaMinicursoPHP.png';
import pecuniaSistemImg from '../assets/images/projetos/pecuniaSistem.png';
import CardProjeto from "../components/CardProjetoComponent.vue"
import { ref } from 'vue'


const projects = ref([
  {
    title: "Meu Painel de Estudos",
    description: "Painel de estudos criada para ministrar curso de JavaScript",
    image: minicursoImg,
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/RayssaGM21/Minicurso-JS",
    live: "https://rayssagm21.github.io/Minicurso-JS/",
  },
  {
    title: "ToDo em Dia",
    description: "Aplicativo de gerenciamento de tarefas com interface intuitiva",
    image: minicursoPHPImg,
    tech: ["PHP", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/RayssaGM21/Minicurso-PHP",
    live: "https://rayssagm21.github.io/Minicurso-PHP/",
  },
  {
    title: "Pecúnia Sistem",
    description: "Sistema de Controle de Finanças",
    image: pecuniaSistemImg,
    tech: ["HTML", "PHP", "Bootstrap"],
    github: "https://github.com/RayssaGM21/Pecunia",
    live: "#",
  },
])

</script>
