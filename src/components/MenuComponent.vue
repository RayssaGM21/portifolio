<template>
    <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <h1
                    class="text-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Rayssa Marconato
                </h1>
                <ul class="flex gap-6">
                    <li><router-link to="/" class="hover:underline">Início</router-link></li>
                    <li><router-link to="/sobre" class="hover:underline">Sobre</router-link></li>
                    <li><router-link to="/projetos" class="hover:underline">Projetos</router-link></li>
                    <li><router-link to="/habilidades" class="hover:underline">Habilidade</router-link></li>
                    <li><router-link to="/contato" class="hover:underline">Contatos</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>