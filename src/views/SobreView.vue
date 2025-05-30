<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

    <div class="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Sobre Mim</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto"></div>
        </div>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-semibold text-slate-900 mb-6">Olá! Sou a Rayssa</h3>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Desenvolvedora web apaixonada por criar experiências digitais interativas, intuitivas e modernas...
            </p>
            <p class="text-slate-600 mb-6 leading-relaxed">
              Minha trajetória começou com o interesse em construir aplicações web do zero e hoje atuo em projetos que
              vão desde aplicações de produtividade até a integração com APIs espaciais, como a da NASA.
            </p>
            <div class="flex space-x-4">
              <button @click="abrirGit"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-md">
                <Github class="mr-2 h-4 w-4" />
                GitHub
              </button>
              <button @click="abrirLinkedin"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-md">
                <Linkedin class="mr-2 h-4 w-4" />
                LinkedIn
              </button>
            </div>
          </div>
          <div class="relative max-w-[350px] mx-auto">
            <div class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-1">
              <img :src="eutrabalhando" alt="Ra trabalhando" class="w-full h-auto rounded-2xl" />
            </div>
          </div>

        </div>
      </div>
    </div>
    
  </div>
</template>


<script setup>
import {
  Github,
  Linkedin,
} from 'lucide-vue-next'

function abrirGit() {
  window.open('https://github.com/RayssaGM21', '_blank');
}
function abrirLinkedin() {
  window.open('https://www.linkedin.com/in/rayssa-gomides-marconato/', '_blank');
}


import eutrabalhando from '../assets/images/eutrabalhando.jpg';


</script>

<style scoped>
/* Estilos adicionais se necessário */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #9333ea, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>