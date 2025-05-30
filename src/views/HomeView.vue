<template>
  <div
    class="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8">
    <div class="absolute -top-10 -left-10 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-2xl animate-ping"></div>
    <div
      class="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-10 rounded-full blur-3xl">
    </div>

    <div class="max-w-6xl mx-auto relative z-10 w-full">
      <div :class="`transition-all duration-1000`">
        <div class="text-center">

          <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
            Desenvolvedora <br> Full Stack
          </h1>

          <p class="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl mx-auto">
            Criando experiências digitais incríveis com código limpo e design intuitivo. <br>
            Experiência em React, Vue, C#, NHibernate, PHP, JavaScript, TypeScript e muito mais.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/projetos"
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-blue-700 bg-white hover:bg-slate-100 rounded-md transition-all duration-200 shadow-lg">
              Ver Projetos
              <ArrowRight class="ml-2 h-4 w-4" />
            </router-link>
            <button
              class="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white hover:bg-white hover:text-blue-700 rounded-md transition-all duration-200">
              <ExternalLink class="mr-2 h-4 w-4" />
              Currículo Lattes
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>

  <div class="bg-white text-slate-900 py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Seja Bem-vindo(a)!</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto"></div>
        <p class="mt-4 text-lg text-slate-600">
          Uma jornada que conecta <span class="font-semibold text-slate-800">código, criatividade e educação</span>.
        </p>
      </div>

      <div class="grid md:grid-cols-4 gap-8">
        <div
          class="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Desenvolvedora</h3>
          <p class="text-sm">
            Crio aplicações web, backend e soluções inteligentes que transformam ideias em realidade.
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Acadêmica</h3>
          <p class="text-sm">
            Compartilho conhecimento por meio de aulas, oficinas e minicursos, levando tecnologia a novos públicos.
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Competidora</h3>
          <p class="text-sm">
            Participo de hackathons, competições como o NASA Space Apps e desafios acadêmicos que estimulam inovação.
          </p>
        </div>

        <div
          class="bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 rounded-2xl p-6 text-white shadow-lg hover:scale-105 transition">
          <h3 class="text-xl font-semibold mb-2">Criadora</h3>
          <p class="text-sm">
            Desenvolvimento de projetos próprios, APIs, sites...
          </p>
        </div>
      </div>

      <div class="mt-20 flex items-center text-center justify-between">
        <div>
          <div
            class="w-[300px] inset-0 h-auto rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 -z-10">
            <div class="w-[300px] h-auto rounded-full bg-white flex items-center justify-center overflow-hidden -z-10">
              <img :src="eudesenho" alt="Desenho da Rayssa" class="object-cover w-[300px] h-auto" />
            </div>
          </div>
        </div>
        <div class="relative">
          <div>
            <h3 class="text-2xl font-semibold mt-6 mb-4 text-slate-900">Criatividade em cada cantinho</h3>
            <p class="text-slate-600 max-w-xl">
              Minha mente é movida a desafios, cores e códigos. Entre soluções criativas, ideias e projetos que
              fazem a diferença, sigo transformando conceitos em experiências digitais que impactam e inspiram.
            </p>
          </div>
          <div
            class="absolute -inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl animate-pulse -z-11">
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<script setup>
import {
  ArrowRight,
  ExternalLink
} from 'lucide-vue-next'

import eudesenho from '../assets/images/desenhoeu.png'

</script>