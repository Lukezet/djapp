<template>
  <div class="w-full flex justify-center mb-12">
    <header class="showprofile w-5/6 h-5/6 flex justify-center items-center mt-8" id="home">
      <div class="principal-text flex justify-center mr-12 ">
        <h1>PACKS DE MUSICA LISTOS PARA SONAR EN TU FIESTA</h1>
      </div>
      <div class="Pic-Container flex justify-center items-center">
        <img src="../assets/homeImage.png" alt="soundImg" class="header-profile">
      </div>
    </header>

  </div>
  <CarrouselFlag></CarrouselFlag>

  <body>
    <div class="flex justify-center  h-auto w-full">
      <div
        class="container-style flex flex-col justify-start items-center w-4/6 mt-24 bg-neutral-800 bg-opacity-80 rounded-[40px] border-4 border-neutral-700 backdrop-blur-[50px]">
        <section
          class="grid grid-cols-3 searcher my-12 h-32 w-5/6 border-4 border-violet-600 shadow-lg shadow-violet-600/50 rounded-3xl">
          <div class="flex flex-col relative ml-4 justify-center items-start text-white italic">
            <label for="searcher">Buscador:</label>
            <input type="searcher" placeholder="Buscar pack"
              class="w-5/6 h-2/5 italic font-medium pl-12 text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
            <img class="absolute w-6 bottom-9 left-4" src="../assets/search-normal.svg">
          </div>
          <div class="flex flex-col ml-4 justify-center items-start text-white italic">
            <label for="searcher">Artista:</label>
            <DropDownArtist></DropDownArtist>
          </div>
          <div class="flex flex-col ml-4 justify-center items-start text-white italic">
            <label for="searcher">Genero musical:</label>
            <DropDownArtist></DropDownArtist>
          </div>
        </section>

        <ArticleSet v-for="set in displayedArticles" :key="set.idSet" :articleData="set"></ArticleSet>
        <!-- <SetList/> -->
        <div class="flex justify-center items-center bg-neutral-800 bg-opacity-80 shadow-xl shadow-neutral-950 p-8  border-2 border-neutral-800 rounded-t-3xl ">
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
  <footer class="h-screen">footer</footer>
</template>
<script setup>
import { ref, watch } from "vue";
import { computed } from "@vue/reactivity";
import CarrouselFlag from "../components/CarrouselFlag.vue";
import DropDownArtist from "../components/DropDownArtist.vue";
import ArticleSet from "../components/ArticleSet.vue"
import SetList from "../components/SetList.vue"
import { all } from "axios";

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
    img: '/src/assets/image26.png',
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

  },
  {
    idSet: 6,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 7,
    name: `Nº 71 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 8,
    name: `Nº 88 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 9,
    name: `Nº 65 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 10,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 11,
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },{
    idSet: 12,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image25.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 13,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 14,
    name: `Nº 31 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 15,
    name: `Nº 21 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image26.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 16,
    name: `Nº 71 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 17,
    name: `Nº 88 Electro House 2023`,
    duration: 64,
    release: `26/12/2023`,
    score: 3.9,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  },
  {
    idSet: 18,
    name: `Nº 65 Electro dubstep 2023`,
    duration: 48,
    release: `12/12/2023`,
    score: 4.8,
    img: '/src/assets/image27.png',
    songs: pinkFloydSongs,

  }
];



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
  width: 37rem;
  height: 37rem;
  flex-shrink: 0;
  background: linear-gradient(115deg, rgba(255, 255, 255, 0.40) 6.05%, rgba(255, 255, 255, 0.10) 70.78%);
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18.688133239746094px);
}

.principal-text {
  width: 70%;
  color: #FFF;
  font-family: Raleway;
  font-size: 7rem;
  font-style: normal;
  font-weight: 900;
}

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