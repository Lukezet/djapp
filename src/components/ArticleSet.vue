<template>
  <div class=" w-full relative">
  <article class="w-full relative  my-12 flex flex-col justify-center items-center">
    <div class="main-article w-11/12 flex relative z-10 p-2 py-4 justify-between rounded-[20px] drop-shadow-lg">
      <img class="object-cover w-[30%] rounded-[20px] shadow-neutral-900 shadow-lg"
        :src="articleData.img" />
      <div class="w-[65%] relative">
        <h1 class="text-white text-md font-['Poppins'] tracking-wide">
          {{ articleData.name }}</h1>
        <p class="text-white text-opacity-50 font-['Raleway']">
          Duracion {{articleData.duration}}min - Lanzamiento {{articleData.release}}
        </p>
        <section class="flex justify-end items-start pr-4">
          <button
            class="flex justify-center cursor-pointer p-2  mr-4 bg-gradient-to-br from-neutral-800 to-zinc-600  text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-teal-400  hover:text-white shadow-lg shadow-neutral-900 hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in ">
            <!-- <span class="material-symbols-outlined">
              play_circle
            </span> -->
            <img src="../assets/play.svg" alt="play">
          </button>
          <button
            class="flex justify-center cursor-pointer  p-2   bg-gradient-to-br from-neutral-800 to-zinc-600  text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-teal-400  hover:text-white shadow-lg shadow-neutral-900 hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in">
            
            <img src="../assets/frame.svg" alt="download"><!-- <span class="material-symbols-outlined">
              download
            </span> -->
          </button>
        </section>
        <div class="flex justify-center items-center absolute bottom-2 left-0">
          <img src="../assets/star.svg" class="w-6 relative">
          <div class="text-neutral-400 text-lg font-semibold font-['Poppins']">
            {{ articleData.score }}
          </div>
        </div>
      </div>

    </div>
    <!-- Agregamos un evento de clic al icono keyboard_arrow_down -->
    <div  @click="open = true"
      class="absolute -bottom-3 left-[48%] z-20 h-8 w-8 text-xs flex flex-wrap text-white text-opacity-50 justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 hover:border   hover:text-violet-500 hover:border-violet-500 rounded-full cursor-pointer  transition duration-150 ease-out md:ease-in ">
      <span class="material-symbols-outlined text-lg">{{ open ? 'visibility_off' : 'visibility'}}</span>
    </div>
    <div @click="toggleSongsList"
      class=" hidden absolute -bottom-3 left-[47%] z-20 px-2 text-xs md:flex flex-wrap text-white justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-white  hover:text-violet-500 hover:border-violet-500 rounded-full cursor-pointer  transition duration-150 ease-out md:ease-in ">
      <span class="material-symbols-outlined text-lg">{{ shouldShowSongsList ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</span>
    </div>
  </article>
  <!-- Mostrar la lista de canciones con transición -->
<transition name="slide-fade">

    <div v-if="shouldShowSongsList"
      class="absolute  h-auto w-[55%] pt-10 p-4 right-40 -bottom-28 flex  justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 rounded-md  text-white text-2xl font-medium font-['Raleway'] tracking-[1px] ">
      <ul class="wrapper grid  grid-flow-col gap-2">
        <li v-for="(song, index) in articleData.songs" :key="index" class="text-xs overflow-hidden max-w-xs truncate">
          {{ index + 1 }}- {{ song }}
        </li>
      </ul>
    </div>

</transition> 
</div>
<Teleport to="body" class="overflow-hidden">
<Transition name="modal-outer" appear>
  <div v-if="open" class="fixed h-[100%] z-30  w-full bg-black bg-opacity-40 top-0 left-0 flex justify-center px-8">
  <Transition name="modal-inner">
    <div class="fixed top-[20%] z-40 h-auto w-[80%] pb-6 pt-4 px-4 flex flex-col  justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 rounded-3xl  text-white text-2xl font-medium font-['Raleway'] tracking-[1px] ">
      <button @click="open= !open" class="absolute top-2 right-2  bg-rose-400 shadow-sm shadow-neutral-800 w-6 h-6 rounded-xl text-xs">X</button>
      <!-- Lista de canciones -->
      <h3 class="text-base w-11/12 font-bold text-center text-white text-opacity-20 mb-2">{{ articleData.name }}</h3>
      <ul class="wrapper grid  grid-flow-col gap-2">
        <li v-for="(song, index) in articleData.songs" :key="index" class="text-xs overflow-hidden max-w-xs truncate">
          {{ index + 1 }}- {{ song }}
        </li>
      </ul>
    </div>
  </Transition>
  </div>
</Transition>
</Teleport>  
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  articleData: Object,
});
const shouldShowSongsList = ref(false);
const open = ref(false)
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
  grid-template-rows: repeat(18, 14px);
}
.main-article{
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.40) 6.05%, rgba(255, 255, 255, 0.10) 70.78%);
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18.688133239746094px);
}
p{
  font-size: 12px;
}
h3{
  font-family: Montserrat;
}
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.10s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>