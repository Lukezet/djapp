<template>
  <div class="w-full flex justify-center mb-12">
    <header class="w-5/6 flex justify-center items-center sm:mt-8 max-xl:w-11/12" id="home">
      <div class="principal-text flex flex-col justify-center items-center">
        <div class="flex flex-col justify-center items-start">
          <h1>PACKS DE MUSICA </h1> <h1 class="flex justify-end items-start font-black tracking-normal bg-gradient-to-l from-teal-400 to-purple-500  bg bg-clip-text text-transparent">LISTOS</h1> <h1>PARA TU EVENTO</h1>
        </div>
        <img src="../assets/soundpackTransparent2.svg" alt="SoundPack" class="mt-6 md:hidden">
          <span class="material-symbols-outlined text-5xl md:hidden">keyboard_arrow_down</span>
      </div>
      <div class="Pic-Container justify-center items-center p-6 lg:flex max-xl:w-3/6  hidden">
        <img src="../assets/homeImage.png" alt="soundImg">
      </div>
    </header>
  </div>
  <CarrouselFlag></CarrouselFlag>

  <body>
    <div class="flex justify-center h-auto w-full">
      <div
        class="flex flex-col justify-start items-center w-11/12 my-24 bg-neutral-800 bg-opacity-50 rounded-[40px] border-2 border-neutral-700 backdrop-blur-[50px] lg:w-10/12 xl:w-8/12">
        <section
          class="grid searcher my-8 p-6 h-auto w-11/12 border-2 border-violet-600 shadow-lg shadow-violet-600/50 rounded-3xl lg:grid-cols-3 lg:gap-4">
          <div class="flex flex-col relative justify-center items-start text-white italic">
            <label for="searcher">Buscador:</label>
            <input type="searcher" placeholder="Buscar pack"
              class="w-full  italic font-medium pl-12 py-2 text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 ring-1 ring-inset ring-purple-300 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
            <img class="absolute w-6 bottom-2 left-4" src="../assets/search-normal.svg">
          </div>
          <div class="flex flex-col justify-center items-start text-white italic">
            <label for="searcher">Artista:</label>
            <DropDownArtist></DropDownArtist>
          </div>
          <div class="flex flex-col justify-center items-start text-white italic">
            <label for="searcher">Genero musical:</label>
            <DropDownArtist></DropDownArtist>
          </div>
        </section>
        <h3 class="font-montserrat text-xl font-bold text-opacity-20 text-white xl:mb-24">LISTA DE SETS</h3>
        <ArticleSet v-for="set in displayedArticles" :key="set.idSet" :articleData="set" :playing="selectedSet.idSet==set.idSet&&playing" @update:selectedSong="handleSelectedSongUpdate" ></ArticleSet>
        <!-- <SetList/> -->
        <div class="w-full flex justify-center items-center bg-neutral-800 bg-opacity-80 shadow-xl shadow-neutral-950 p-8  border-2 border-neutral-800 rounded-[40px] ">
          <div class="flex justify-center items-center h-16 w-16 mr-4 bg-neutral-900 border-2 border-violet-400 hover:border-4  rounded-full"><div class="h-5 w-5 bg-neutral-700 shadow-lg shadow-gray-500/50 rounded-full"></div></div>
          <button 
            v-if="paginationData.page != 1" 
            @click="paginationData.page--"
            class="material-symbols-outlined h-16 px-2 text-lg flex flex-wrap text-white justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-violet-400  hover:text-violet-500 hover:border-violet-500 rounded-l-full cursor-pointer  transition duration-150 ease-out md:ease-in">
            {{'keyboard_arrow_left' }}
          </button>
          <button
            type="button" 
            v-for="pageNumber in paginationData.pages.slice(paginationData.page-1,paginationData.page+3)"
            :key="pageNumber"
            @click="paginationData.page=pageNumber"
            :class="[{ 'border-2 border-white ': pageNumber === paginationData.page }]"
            class="h-16 w-8 px-2 text-lg flex flex-wrap text-white justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border hover:border-2 border-violet-400  hover:text-violet-500 hover:border-violet-500 rounded-sm cursor-pointer  transition duration-150 ease-out md:ease-in"
            >{{ pageNumber }}
          </button>
          <button
            v-if="paginationData.page < paginationData.pages.length " 
            @click="paginationData.page++"
            class="material-symbols-outlined h-16 px-2 text-lg flex flex-wrap text-white justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-violet-400  hover:text-violet-500 hover:border-violet-500 rounded-r-full cursor-pointer  transition duration-75 ease-out md:ease-in">
            {{'keyboard_arrow_right' }}
          </button>
          <div class="flex justify-center items-center h-16 w-16 ml-4 bg-neutral-900 border-2 border-violet-400 hover:border-4 rounded-full"><div class="h-5 w-5  bg-neutral-700 shadow-lg shadow-gray-500/50 rounded-full"></div></div>
        </div>
      </div>
    </div>
  </body>
  <footer class="Pic-Container flex flex-col justify-end items-center rounded-t-2xl fixed w-full h-[10%] bottom-0 bg-yellow-400">
    <div class="absolute flex justify-between items-center -top-8 w-52">
      <button class="w-12 h-12 flex justify-center items-center cursor-pointer bg-gradient-to-br from-neutral-800 to-zinc-600  text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-teal-400  hover:text-white shadow-lg shadow-neutral-900 hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-full transition duration-150 ease-out md:ease-in">
            <img class="w-8" src="../assets/before.svg" alt="play">
    </button>
    <button @click="playSound" class="w-[4.5rem] h-[4.5rem] flex justify-center items-center cursor-pointer  bg-gradient-to-br from-neutral-800 to-zinc-600  text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-teal-400  hover:text-white shadow-lg shadow-neutral-900 hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-full transition duration-150 ease-out md:ease-in">
            <img v-if="!playing" class="w-10" src="../assets/playMusic.svg" alt="play">
            <img v-else class="w-10" src="../assets/pause.svg" alt="play">
    </button>
    <button class="w-12 h-12 flex justify-center items-center cursor-pointer bg-gradient-to-br from-neutral-800 to-zinc-600  text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-teal-400  hover:text-white shadow-lg shadow-neutral-900 hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-full transition duration-150 ease-out md:ease-in">
            <img class="w-8" src="../assets/next.svg" alt="play">
    </button>
    </div>
    <img class="w-12 absolute left-4 top-4 rounded-lg shadow-lg shadow-neutral-900" :src="selectedSet.img" alt="imgSetPlayList">
    <h4 class="font-['Montserrat'] text-opacity-40 text-white">{{selectedSet.name}}</h4>
    <section class="w-full flex justify-start" @click="handleProgressBarClick">
      <div id="progress" :style="{width:progressBar}"  class="h-3 mt-2  z-20 bg-gradient-to-r from-violet-500 to-teal-400 "></div>
    </section>
    <div class="absolute bottom-3 left-2 font-['Montserrat'] text-opacity-40 text-white text-xs">{{ timer }}</div>
    <div class="absolute bottom-3 right-2 font-['Montserrat'] text-opacity-40 text-white text-xs">{{ duration }}</div>
  </footer>
  
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import { computed } from "@vue/reactivity";
import CarrouselFlag from "../components/CarrouselFlag.vue";
import DropDownArtist from "../components/DropDownArtist.vue";
import ArticleSet from "../components/ArticleSet.vue"
import {Howl, Howler} from "howler";

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
let allSets = [
{
    idSet: 1,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 2,
    setRoute:'src/assets/music/Here it Comes - TrackTribe.mp3',
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },{
    idSet: 3,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 4,
    setRoute:'src/assets/music/It Was a Time - TrackTribe.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 5,
    setRoute:'src/assets/music/It Was a Time - TrackTribe.mp3',
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 6,
    setRoute:'src/assets/music/It Was a Time - TrackTribe.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 7,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 71 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 8,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 88 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 9,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 65 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 10,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 11,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },{
    idSet: 12,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 13,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 14,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 15,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 16,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 71 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 17,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 88 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 18,
    setRoute:'src/assets/music/LosingMyMind.mp3',
    name: `Nº 65 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  }
];

const playing = ref(false);
const timer = ref('0:00');
const duration = ref('0:00');
const progressBar = ref(0)
const selectedSet = ref({
  idSet: 1,
  setRoute: 'src/assets/music/Mulholland - King Canyon.mp3',
  name: `Nº 21 Electro dubstep 2023`,
  duration: 48,
  release: `12/12/2023`,
  score: 4.8,
  img: '/src/assets/image25.png',
  songs: pinkFloydSongs,
});
// progress.style.width = (((seek / sound.duration()) * 100) || 0) + '%';
let sound = null;

// Iniciar el temporizador cuando se monte el componente
onMounted(() => {
  sound = new Howl({
    src: [selectedSet.value.setRoute],
    onplay: () => {
      updateTimer();
      duration.value = formatTime(Math.round(sound.duration()));
      playing.value = true; 
    },
    onpause:()=>{
      playing.value = false;
    },
    onend: ()=>{
        playing.value = false;
      }
  });
});

const playSound = () => {
  if (playing.value) {
    sound.pause();
  } else {
    sound.play();
  }
  // playing.value = !playing.value;
};

const handleSelectedSongUpdate = (setToSend) => {
  if (selectedSet.value == setToSend) {
    if (sound.playing()) {
      sound.pause();
      // playing.value = false;
    } else {
      playSound();
    }
  } else {
    selectedSet.value = setToSend;
    sound.stop();
    sound = new Howl({
      src: [selectedSet.value.setRoute],
      onplay: () => {
        updateTimer();
        duration.value = formatTime(Math.round(sound.duration()))
        playing.value = true 
      },
      onpause:()=>{
      playing.value = false;
    },
      onend: ()=>{
        playing.value = false;
      }
    });
    sound.play();
  }
};

function updateTimer() {
  setInterval(() => {
    timer.value = formatTime(Math.round(sound.seek()));
    progressBar.value = (((sound.seek() / sound.duration()) * 100) || 0) + '%';//enviamos el ancho de la barra de reproduccion
  }, 100); // Actualiza el temporizador cada segundo
}
  
   //Format the time from seconds to M:SS.
   
function formatTime(secs) {
  var minutes = Math.floor(secs / 60) || 0;
  var seconds = (secs - minutes * 60) || 0;
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

const handleProgressBarClick = (event) => {
  const mouseX = event.clientX; // Obtener la posición horizontal del clic
  const windowWidth = window.innerWidth; // Obtener el ancho de la ventana del navegador  // Calcular el porcentaje del clic con respecto al ancho de la barra de progreso
  const percentClicked = (mouseX / windowWidth) * 100;
  console.log("clickeas el % "+percentClicked)
  console.log("clickeas el mouseX "+mouseX)
  console.log("clickeas el windowWidth "+windowWidth)
  
    // Calcular la posición en la canción correspondiente al porcentaje clickeado
    const newPosition = (percentClicked / 100) * sound.duration();
  // Usar el porcentaje para realizar alguna acción, como buscar en la canción
  sound.seek(newPosition);
};

function paginate(){
  let page = paginationData.value.page;
  let perPage = paginationData.value.perPage;
  let from = (page * perPage) - perPage;
  let to = (page * perPage);
  console.log(paginationData.value.articles.length)
  return paginationData.value.articles.slice(from,to)
}
let paginationData = ref({
  articles: allSets,
  page:1,
  perPage:3,
  pages:[]
})
function setArticles(){
  let numberOfPages =  Math.ceil(paginationData.value.articles.length/ paginationData.value.perPage);
  for(let i = 1; i <= numberOfPages; i++){
    paginationData.value.pages.push(i)
    console.log("recorro")
  }
}
setArticles()//COLOCAR UN WATCH CUANDO TRAIGA LA INFO DE LA API

const displayedArticles = computed(() => {
  return paginate()
})


</script>

<style scoped>
.Pic-Container {
  flex-shrink: 0;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.40) 6.05%, rgba(255, 255, 255, 0.10) 70.78%);
  box-shadow: 0px 4px 8px 8px rgba(49, 49, 49, 0.25);
  backdrop-filter: blur(18.688133239746094px);
}

.principal-text {
  width: 100%;
  border-radius: 1.5rem;
  padding-top: 2rem;
  padding-inline: 1rem;
  color: #FFF;
  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  background: linear-gradient(115deg, rgba(54, 54, 54, 0.4) 6.05%, rgba(255, 255, 255, 0.10) 70.78%);
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18.688133239746094px);
}
h1{
  font-size: 4rem;
  line-height: 1.2;
}
h3{
  font-family: Montserrat;
}

@media (min-width: 380px) {
  h1{
    line-height: 1.5;
  }

}
@media (min-width: 450px) {
  h1 {
    font-size: calc(4.5rem + 1vw);
    line-height: 1.2;
  }
}
@media (min-width: 600px) {
  h1 {
    font-size: calc(5.5rem + 1vw);
    line-height: 1.2;
  }
}
@media (min-width: 768px) {
  .principal-text{
    background:none;
    box-shadow: none;
    backdrop-filter: none;
  }

}

@media (min-width: 1650px) {
  h1{
    font-size: calc(6rem + 1vw);
  }

}
/* @media (min-height: 600px) and (max-height: 780px) and (min-width: 900px) {
  .Pic-Container {
    width: 40%;
  } 

  h1 {
    font-size: calc(4.5rem + 1vw);
    line-height: 1;
  }
} */
.setimg {
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.50) inset;
}
/* .container-style{
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.40) 6.05%, rgba(255, 255, 255, 0.10) 70.78%);
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18.688133239746094px);
} */
</style>

<!-- #7C47DB, #2CF8C0 -->