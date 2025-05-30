<template>
    <div class="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-4">Vamos Conversar?</h2>
                <div class="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-4"></div>
                <p class="text-slate-600 max-w-2xl mx-auto">
                    Estou sempre aberta a novos projetos e oportunidades. Entre em contato!
                </p>
            </div>
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 class="text-2xl font-semibold text-slate-900 mb-6">Informações de Contato</h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <Mail class="h-5 w-5 text-blue-500" />
                            <span class="text-slate-600">rayssa.g.marconato@gmail.com</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <Github class="h-5 w-5 text-blue-500" />
                            <span class="text-slate-600">github.com/RayssaGM21</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <Linkedin class="h-5 w-5 text-blue-500" />
                            <span class="text-slate-600">linkedin.com/in/rayssa-gomides-marconato/</span>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <h3 class="text-xl font-semibold text-slate-900 mb-4">Envie uma Mensagem</h3>
                    <form @submit.prevent="submitForm" class="space-y-4">
                        <div>
                            <input v-model="form.name" type="text" placeholder="Seu nome"
                                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                        <div>
                            <input v-model="form.email" type="email" placeholder="Seu email"
                                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                        </div>
                        <div>
                            <textarea v-model="form.message" placeholder="Sua mensagem" rows="4"
                                class="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 rounded-md transition-all duration-200">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Mail,
  Github,
  Linkedin,
} from 'lucide-vue-next'


const form = ref({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    console.log('Form submitted:', form.value)
    alert('Mensagem enviada com sucesso!')

    form.value = {
        name: '',
        email: '',
        message: ''
    }
}

</script>