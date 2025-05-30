<template>
      <div
      class="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden min-h-[70vh] flex items-center px-4 sm:px-6 lg:px-8">
      <div class="absolute -top-10 -left-10 w-48 h-48 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full blur-2xl animate-ping"></div>
      <div
        class="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-white opacity-10 rounded-full blur-3xl">
      </div>

      <div class="max-w-6xl mx-auto relative z-10 w-full">
        <div
          :class="`transition-all duration-1000`">
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
    <div>
      
    </div>
</template>

<script setup>
import {
  ArrowRight,
  ExternalLink
} from 'lucide-vue-next'

</script>