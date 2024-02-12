<template>
  <div class=" w-full relative">
  <article class="w-full relative py-12 my-24 flex flex-col justify-center items-center">
    <div
      class="flex z-10 justify-start relative pl-[23%] w-5/6 h-52 bg-gradient-to-br from-neutral-800 to-zinc-600 rounded-[20px] shadow  backdrop-blur-[37.38px]">
      <img class="setimg object-cover w-[30%] h-[350px] left-[-50px] top-[-80px] absolute rounded-[40px] shadow-neutral-900 shadow-lg"
        :src="articleData.img" />
      <div class="w-5/6">
        <h1 class="text-white text-[32px] mt-4 font-semibold font-['Poppins'] tracking-widest">
          {{ articleData.name }}</h1>
        <div class="text-white text-opacity-50 text-xl font-semibold font-['Raleway']">
          Duracion {{articleData.duration}}min - Lanzamiento {{articleData.release}}
        </div>
        <section class="flex h-[50%] justify-center items-center">
          <button
            class="flex justify-center cursor-pointer w-full px-5 py-2 my-3 mr-6 border-2 font-semibold  border-violet-500 text-white hover:bg-gradient-to-r from-violet-600 to-teal-400  hover:text-white hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in ">
            <span class="material-symbols-outlined mr-2">
              play_circle
            </span>
            Reproducir
          </button>
          <button
            class="flex justify-center cursor-pointer w-full px-5 py-2 my-3 mr-2 border-2 font-semibold  border-violet-500 text-white hover:bg-gradient-to-r from-violet-600 to-teal-400  hover:text-white hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in ">
            <span class="material-symbols-outlined mr-2">
              download
            </span>
            Descargar
          </button>
        </section>
        <div class="flex justify-center items-center absolute top-4 right-6">
          <img src="../assets/star.svg" class="w-[43px] h-[43px] relative">
          <div class="text-neutral-400 text-[28px] font-semibold font-['Poppins']">
            {{ articleData.score }}
          </div>
        </div>
      </div>

    </div>
    <!-- Agregamos un evento de clic al icono keyboard_arrow_down -->
    <div @click="toggleSongsList"
      class="absolute bottom-8 left-[54.5%] z-20 h-8 px-2 text-xs flex flex-wrap text-white justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-white  hover:text-violet-500 hover:border-violet-500 rounded-full cursor-pointer  transition duration-150 ease-out md:ease-in ">
      <span class="material-symbols-outlined">{{ shouldShowSongsList ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</span>
    </div>
  </article>
  <!-- Mostrar la lista de canciones con transición -->
  <transition name="slide-fade">

    <div v-if="shouldShowSongsList"
      class="absolute  h-auto w-[55%] pt-10 p-4 right-40 -bottom-28 flex  justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 rounded-md  text-white text-2xl font-medium font-['Raleway'] tracking-[1px] ">
      <!-- Lista de canciones -->
      <ul class="wrapper grid  grid-flow-col gap-2">
        <li v-for="(song, index) in articleData.songs" :key="index" class="text-xs overflow-hidden max-w-xs truncate">
          {{ index + 1 }}- {{ song }}
        </li>
      </ul>
    </div>

  </transition>
</div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  articleData: Object,
});
const shouldShowSongsList = ref(false);
const toggleSongsList = () => {
  shouldShowSongsList.value = !shouldShowSongsList.value;
  console.log(shouldShowSongsList.value)
};


// //! TO DO a
// let articleData = ref(
//   {
//     idSet: 1,
//     name: `Nº 21 Electro dubstep 2023`,
//     duration: 48,
//     release: `12/12/2023`,
//     score: 4.8,
//     img: '/src/assets/image26.png',
//     songs: pinkFloydSongs,

//   })


</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatey(-100px);
  opacity: 0;
}

.wrapper {
  grid-template-rows: repeat(10, 14px);
}</style>