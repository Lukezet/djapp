<template>
  <button class="flex h-full relative w-40" @mouseover="showResults = true" @mouseleave="showResults = false">
    <section
      id="header" 
      class="relative flex justify-center h-full w-full  items-center text-white hover:shadow-lg hover:shadow-purple-500/50 rounded-full transition-colors py-2"
    >
      <UserCircleIcon class="text-white h-8 pr-2"></UserCircleIcon>
      Mi Perfil
    </section>
    <ul v-show="showResults" id="optionsSelect" class="absolute w-40 z-20  right-2 mt-1 shadow-xl text-white border-4 border-purple-200 bg-purple-300 rounded-xl transition duration-200 ease-out md:ease-in">
      <li class="w-full h-12 flex items-center justify-start py-2 px-1 hover:bg-white hover:text-purple-400 shadow-md cursor-pointer rounded-t-lg">
      <UserCircleIcon class=" h-6 pr-2"></UserCircleIcon><div>mi perfil</div>
    </li>
    <li class="relative h-12 flex items-center py-2 pl-8 pr-2 hover:bg-white hover:text-purple-400 shadow-md cursor-pointer">
      <span class="absolute left-1 material-symbols-outlined">
      settings
      </span>configuracion
    </li>
    <li class="relative h-12 flex items-center  py-2 pl-8 pr-2 hover:bg-white hover:text-purple-400 shadow-md cursor-pointer rounded-b-lg" @click.prevent="logOut">
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
#optionsSelect{
  top:96%
}
</style>