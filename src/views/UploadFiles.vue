<template>
  <div class="cont relative w-full flex flex-col justify-center items-center">
    
    <!-- panel principal -->
    <div
      class="flex flex-col justify-center items-center w-2/4 h-5/6 z-10  bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
      <h1 class="text-white tracking-wider mt-6 font-black text-3xl">NOMBRE DEL SET</h1>
      <section class="w-full h-full grid grid-cols-2 p-8">
        <div class="flex flex-col justify-center items-start p-8">
          <label class="text-white" for="DropDownArtist">Género musical</label>
          <DropDownGenders></DropDownGenders>
          <label class="w-full text-white" for="searcher">Duracion en minutos:</label>
          <input type="searcher" placeholder="ingresar duracion en minutos"
            class="w-full py-3 pl-6 italic font-medium text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
          <section class="grid  h-2/4 w-full">
            <div class="flex flex-col ">
              <label class=" text-white" for="searcher">Canciones:</label>
              <textarea placeholder="Introduce el Listado de Canciones"
                class="h-full  text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-3xl shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in"></textarea>
            </div>
            <div class="flex flex-col ">
              <label class="text-white " for="searcher">Artistas:</label>
              <textarea placeholder="Introduce el Listado de Artistas"
                class="h-full  text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-3xl shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in"></textarea>
            </div>
          </section>
        </div>
        <div class="flex flex-col justify-center items-center">
          <img class=" w-full h-2/4 mb-3 object-cover rounded-3xl shadow-neutral-900 shadow-lg"
            src="../assets/image25.png" alt="SET IMAGE" />
          <button
            class="flex justify-center cursor-pointer w-full  py-2 my-3  border-2 font-semibold  border-violet-500 text-white hover:bg-gradient-to-r from-violet-600 to-teal-400  hover:text-white hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in ">
            <span class="material-symbols-outlined mr-2">
              download
            </span>
            cargar imagen
          </button>
          <label class="text-center text-gray-400 font-bold" for="searcher">HANGOVER_SUNDAY.mp3 </label>
          <button
            class="flex justify-center cursor-pointer w-full py-2 my-2 border-2 font-semibold  border-violet-500 text-white hover:bg-gradient-to-r from-violet-600 to-teal-400  hover:text-white hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in ">
            <span class="material-symbols-outlined mr-2">
              download
            </span>
            cargar set
          </button>
        </div>
      </section>
      <button @click="toggleEditPanel"
      class="absolute rotate-90 -right-20 z-20  px-8 py-2 tracking-wider font-semibold text-lg flex flex-wrap text-gray-200 justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-white  hover:text-violet-500 hover:border-violet-500 rounded-full cursor-pointer  transition duration-150 ease-out md:ease-in ">
      EDITAR<span class="material-symbols-outlined">{{ shouldShowEditPanel ? 'keyboard_arrow_down' :
        'keyboard_arrow_up' }}</span>
      </button>
      <button @click="toggleDeletePanel"
      class="absolute -rotate-90 -left-20 z-20  px-6 py-2 tracking-wider font-semibold text-lg flex flex-wrap text-gray-200 justify-center items-center bg-gradient-to-br from-neutral-800 to-zinc-500 border border-white  hover:text-violet-500 hover:border-violet-500 rounded-full cursor-pointer  transition duration-150 ease-out md:ease-in ">
      ELIMINAR<span class="material-symbols-outlined">{{ shouldShowDeletePanel ? 'keyboard_arrow_up' :  'keyboard_arrow_down' }}</span>
      </button>
    </div>
    <!-- panel Derecho Editar -->

    <transition name="slide-fade">
      <div v-if="shouldShowEditPanel"
        class="absolute pl-12 right-12 flex flex-col justify-center items-center w-1/4 h-2/4 rounded-[40px] shadow border border-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-opacity-50  hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
        <h1 class="mb-2 text-3xl font-black tracking-wider text-white">EDITAR SETS</h1>
        <label class="w-3/4 text-white" for="searcher">Buscar set:</label>
        <input type="searcher" placeholder="Buscar pack"
          class="w-3/4 py-3 italic font-medium pl-12 text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
        <button
        class="flex justify-center cursor-pointer w-3/4 px-5 py-3 my-3 mr-2 border-2 font-semibold border-violet-500 text-white hover:bg-gradient-to-r from-violet-600 to-teal-400  hover:text-white hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in">
        <span class="material-symbols-outlined mr-2">
          check
        </span>
        Seleccionar set
      </button>
        </div>
    </transition>

    <!-- panel Izquierdo Eliminar -->
    <transition name="slide-fade2"> 
      <div v-if="shouldShowDeletePanel"
      class="absolute pr-12 left-12 flex flex-col justify-center items-center w-1/4 h-2/4 rounded-[40px] shadow border border-white bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-opacity-50  hover:shadow-lg hover:shadow-red-500/50 transition duration-150 ease-out md:ease-in">
      <h1 class="text-3xl font-black tracking-wider text-white">ELIMINAR SETS</h1>
      <label class="w-3/4 text-white" for="searcher">Buscar set:</label>
        <input type="searcher" placeholder="Buscar pack"
          class="w-3/4 py-3 italic font-medium pl-12 text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 backdrop-blur-[37.38px] hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
        
      <button
        class="flex justify-center cursor-pointer w-3/4 px-5 py-2 my-3 mr-2 border-2 font-semibold  border-red-500 text-white hover:bg-gradient-to-r from-pink-600 to-red-600  hover:text-white hover:shadow-lg hover:shadow-violet-500/50 hover:border-purple-200 rounded-3xl transition duration-150 ease-out md:ease-in ">
        <span class="material-symbols-outlined mr-2">
          delete
        </span>
        Eliminar set
      </button>
    </div>
 </transition>
    <!-- Boton GUARDAR TODO -->
    <button type="button"
      class="flex justify-center items-center w-2/4 text-xl shadow-lg h-16 mt-8 border-2 bg-gradient-to-r from-zinc-800 via-neutral-900 to-neutral-950 font-bold tracking-wider text-white hover:shadow-lg hover:shadow-purple-500/50 hover:from-violet-500 hover:via-purple-600 hover:to-purple-500 transition duration-150 ease-out md:ease-in hover:border-0	 border-white rounded-sm">
      CARGAR TODOS LOS DATOS
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import DropDownGenders from '../components/DropDownGenders.vue';
const shouldShowEditPanel = ref(false);
const shouldShowDeletePanel = ref(false);
const toggleEditPanel = () => {
  shouldShowEditPanel.value = !shouldShowEditPanel.value;
  console.log(shouldShowEditPanel.value)
};
const toggleDeletePanel = () => {
  shouldShowDeletePanel.value = !shouldShowDeletePanel.value;
  console.log(shouldShowDeletePanel.value)
};

</script>

<style scoped>
.cont {
  height: 90vh;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translatex(-100px);
  opacity: 0;
}
.slide-fade2-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade2-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade2-enter-from,
.slide-fade2-leave-to {
  transform: translatex(100px);
  opacity: 0;
}



textarea {
  width: 100%;
  resize: none;
}
</style>