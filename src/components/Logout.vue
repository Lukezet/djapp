<template>
  <button class="flex relative" @mouseover="showResults = true" @mouseleave="showResults = false">
    <section id="header" class="relative flex justify-center h-full w-full  items-center text-white transition-colors">
      Mi Perfil
    </section>
    <ul v-show="showResults" id="optionsSelect"
      class="absolute bg-gradient-to-br from-neutral-800 to-zinc-600 w-40 z-20 text-base -left-8 shadow-xl text-white rounded-xl transition duration-200 ease-out md:ease-in">
      <li
        class="w-full h-12 flex items-center justify-start py-2 px-1 hover:bg-gradient-to-br hover:from-purple-500 hover:to-teal-400 shadow-md cursor-pointer rounded-t-lg">
        <UserCircleIcon class=" h-6 pr-2"></UserCircleIcon>
        <div>mi perfil</div>
      </li>
      <li
        class="relative h-12 flex items-center py-2 pl-8 pr-2 hover:bg-gradient-to-br hover:from-purple-500 hover:to-teal-400 shadow-md cursor-pointer">
        <span class="absolute left-1 material-symbols-outlined">
          settings
        </span>configuracion
      </li>
      <li
        class="relative h-12 flex items-center  py-2 pl-8 pr-2 hover:bg-gradient-to-br hover:from-purple-500 hover:to-teal-400 shadow-md cursor-pointer rounded-b-lg"
        @click.prevent="logOut">
        <span class="absolute left-1 material-symbols-outlined">logout</span>cerrar sesion
      </li>
    </ul>
  </button>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth';
import { UserCircleIcon } from '@heroicons/vue/20/solid';
import { useRouter } from 'vue-router';

const showResults = ref(false);
const router = useRouter();

const logOut = () => {
  const auth = useAuthStore();
  auth.auth = null;
  router.push('/login');
};
</script>

<style scoped>
#optionsSelect {
  top: 96%
}
</style>