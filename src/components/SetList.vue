<template>
  <div v-for="set in allSets" :key="set.idSet" class=" w-full relative">
  <article class="w-full relative py-12 my-24 flex flex-col justify-center items-center">
    <div
      class="flex z-10 justify-start relative pl-[23%] w-5/6 h-52 bg-gradient-to-br from-neutral-800 to-zinc-600 rounded-[20px] shadow  backdrop-blur-[37.38px]">
      <img class="setimg object-cover w-[30%] h-[350px] left-[-50px] top-[-80px] absolute rounded-[40px] shadow-neutral-900 shadow-lg"
        :src="set.img" />
      <div class="w-5/6">
        <h1 class="text-white text-[32px] mt-4 font-semibold font-['Poppins'] tracking-widest">
          {{ set.name }}</h1>
        <div class="text-white text-opacity-50 text-xl font-semibold font-['Raleway']">
          Duracion {{set.duration}}min - Lanzamiento {{set.release}}
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
            {{ set.score }}
          </div>
        </div>
      </div>

    </div>
    <!-- Agregamos un evento de clic al icono keyboard_arrow_down -->
    <button @click="toggleModal(set.idSet)"
      class="absolute bottom-8 left-[54.5%] z-20 h-8 px-2 text-xs flex flex-wrap text-white justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-white  hover:text-violet-500 hover:border-violet-500 rounded-full cursor-pointer  transition duration-150 ease-out md:ease-in ">
      <span class="material-symbols-outlined">{{ shouldShowSongsList === set.idSet ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</span>
    </button>
  </article>
  <transition name="slide-fade">
 <SongList v-if="shouldShowSongsList === set.idSet"  @close-modal="toggleModal(null)" :songs="set.songs" class="absolute  h-auto w-[55%] pt-10 p-4 right-40 -bottom-28 flex  justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 rounded-md  text-white text-2xl font-medium font-['Raleway'] tracking-[1px] "/>
</transition>
 <!-- Mostrar la lista de canciones con transición -->
  
<!-- 
    <div v-if="shouldShowSongsList && set.idSet==selectedSet"
      class="absolute  h-auto w-[55%] pt-10 p-4 right-40 -bottom-28 flex  justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 rounded-md  text-white text-2xl font-medium font-['Raleway'] tracking-[1px] "> -->
      <!-- Lista de canciones -->
      <!-- <ul class="wrapper grid  grid-flow-col gap-2">
        <li v-for="(song, index) in set.songs" :key="index" class="text-xs overflow-hidden max-w-xs truncate">
          {{ index + 1 }}- {{ song }}
        </li>
      </ul>
    </div>
 -->

</div>
</template>
<script setup>
import { ref } from "vue";
import SongList from "./SongList.vue";
const pinkFloydSongs = [
  'Shine On You Crazy Diamond',
  'Comfortably Numb',
  'Wish You Were Here',
  'Time',
  'Another Brick in the Wall',
  'Money',
  'Hey You',
  'Us and Them',
  'Brain Damage',
  'Eclipse',
  'The Great Gig in the Sky',
  'Mother',
  'Echoes',
  'High Hopes',
  'Learning to Fly',
  'Welcome to the Machine',
  'Have a Cigar',
  'On the Turning Away',
  'Run Like Hell',
  'Sheep',
  'Dogs',
  'Pigs (Three Different Ones)',
  'One of These Days',
  'Atom Heart Mother',
  'Young Lust',
  'The Fletcher Memorial Home',
  'Goodbye Blue Sky',
  'Empty Spaces',
  
  // Puedes agregar más títulos según tus preferencias
];
const shouldShowSongsList = ref(null);
function toggleModal(setId){
  shouldShowSongsList.value = shouldShowSongsList.value === setId ? null : setId;
  
}
let allSets = ref([
{
    idSet: 1,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 2,
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },{
    idSet: 3,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 4,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 5,
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },{
    idSet: 6,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  }
]);

let paginationData = {
  articles:allSets,
  page:1,
  perPage:3,
  pages:[]
}




// //! TO DO a
// let set = ref(
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