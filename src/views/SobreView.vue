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

    <div class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-slate-900 mb-4">Minha Jornada</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto"></div>
          <p class="text-slate-600 mt-4">
            Cada passo, um aprendizado. Cada desafio, uma nova conquista.
          </p>
        </div>

        <div class="relative border-l-4 border-gradient-to-b from-blue-500 via-purple-500 to-pink-500">

          <div class="mb-16 ml-8">
            <div class="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 class="text-xl font-semibold text-slate-900">Curiosidade Acesa 🔥</h3>
            <p class="text-slate-600 mt-2">
              Tudo começou quando meu professor de matemática do ensino médio convidou os alunos á um treinamento da
              OBI, foi aí que
              me perguntei: <em>"Como será que um computador funciona?"</em> — esse
              foi o primeiro passo na minha trilha pela tecnologia.
            </p>
            <div class="mt-4">
              <img :src="primeiro" alt="Primeiro contato com tecnologia"
                class="rounded-2xl shadow-lg w-auto max-h-[300px]">
            </div>
          </div>

          <div class="mb-16 ml-8">
            <div class="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 class="text-xl font-semibold text-slate-900">Ingresso na Faculdade 🎓</h3>
            <p class="text-slate-600 mt-2">
              Entrei no curso de <strong>Análise e Desenvolvimento de Sistemas</strong>. Aqui, aprendi lógica,
              algoritmos, banco de dados e desenvolvimento web. Um mundo novo se abriu!
            </p>
            <div class="mt-4">
              <img :src="ingressando" alt="Boas vindas aos colouros de 2024" class="rounded-2xl shadow-lg w-auto max-h-[300px]">
            </div>
          </div>

          <div class="mb-16 ml-8">
            <div class="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 class="text-xl font-semibold text-slate-900">Explorando Novos Desafios 🚀</h3>
            <p class="text-slate-600 mt-2">
              Participei de <strong>hackathons, maratonas como ICPC, NASA Space Apps</strong> e eventos acadêmicos. Cada
              desafio foi um degrau na minha evolução.
            </p>
            <div class="flex gap-4 mt-4">
              <img :src="icpc2024" alt="ICPC" class="rounded-2xl shadow-lg w-auto max-h-[300px]">
              <img :src="nasaSpaceApps" alt="Nasa Space Apps" class="rounded-2xl shadow-lg w-auto max-h-[300px]">
            </div>
          </div>

          <div class="mb-16 ml-8">
            <div class="absolute w-4 h-4 bg-pink-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 class="text-xl font-semibold text-slate-900">Compartilhando Conhecimento 💻</h3>
            <p class="text-slate-600 mt-2">
              Fui professora para alunos do ensino médio em eventos como o <em>Code Experience</em> e <em>Bootcamp</em>
            </p>
            <div class="flex flex-wrap gap-4 mt-4 justify-center">
              <img :src="code2024" alt="code2024" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
              <img :src="code2024profs" alt="code2024" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
              <img :src="bootcamp2024" alt="bootcamp2024" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
              <img :src="code2025" alt="code2025" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
              <img :src="code2025profs" alt="code2025profs" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
            </div>
          </div>

          <div class="mb-16 ml-8">
            <div class="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 class="text-xl font-semibold text-slate-900">Jornada Profissional 🌍</h3>
            <p class="text-slate-600 mt-2">
              Comecei minha trajetória profissional como <strong>desenvolvedora web</strong>, aplicando tudo que aprendi
              na prática.
            </p>
            <div class="flex gap-4 mt-4">
              <img :src="liaUnimar" alt="Trabalhando como desenvolvedora"
                class="rounded-2xl shadow-lg w-full w-auto max-h-[300px] object-contain">
              <img :src="interfocus" alt="Trabalhando como desenvolvedora"
                class="rounded-2xl shadow-lg w-full w-auto max-h-[300px] object-contain">
              <img :src="interfocus21" alt="Trabalhando como desenvolvedora"
                class="rounded-2xl shadow-lg w-full w-auto max-h-[300px] object-contain">

            </div>
          </div>

          <div class="ml-8">
            <div class="absolute w-4 h-4 bg-purple-500 rounded-full -left-2 border-4 border-white"></div>
            <h3 class="text-xl font-semibold text-slate-900">O Caminho Continua 💡</h3>
            <p class="text-slate-600 mt-2">
              Sigo evoluindo, aprendendo novas tecnologias, explorando inteligência artificial, dados e criando soluções
              que realmente fazem a diferença. E sempre compartilhando o que sei.
            </p>
            <div class="flex gap-4 mt-4">
              <img :src="minicursophp1" alt="minicurso" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
              <img :src="minicursophp2" alt="minicurso2" class="rounded-2xl shadow-lg w-auto max-h-[200px]">
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
import nasaSpaceApps from '../assets/images/trajetoria/nasaSpaceApps.jpg'
import liaUnimar from '../assets/images/trajetoria/lia.jpg'
import icpc2024 from '../assets/images/trajetoria/icpc2024.jpg'
import ingressando from '../assets/images/trajetoria/ingressando.jpg'
import interfocus from '../assets/images/trajetoria/interfocus.jpg'
import interfocus21 from '../assets/images/trajetoria/interfocus21.jpg'
import code2024 from '../assets/images/trajetoria/code2024.jpg'
import code2025 from '../assets/images/trajetoria/code2025.jpg'
import code2025profs from '../assets/images/trajetoria/code2025profs.jpg'
import code2024profs from '../assets/images/trajetoria/code2024profs.jpg'
import bootcamp2024 from '../assets/images/trajetoria/bootcamp2024.jpg'
import minicursophp1 from '../assets/images/trajetoria/minicursophp1.jpg'
import minicursophp2 from '../assets/images/trajetoria/minicursophp2.jpg'
import primeiro from '../assets/images/trajetoria/primeirocontato.jpg'


</script>
