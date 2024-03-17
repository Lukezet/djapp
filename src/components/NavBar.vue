<template>
    <div class="menu-btn" @click="showMenu">
      <i class="fas fa-bars text-white"></i>
    </div>
    <header class="nav-main h-16 flex justify-between items-stretch px-6">
      <router-link :to="{ name: 'home' }" class="nav-brand items-center h-full w-48 text-white transition-colors hover:text-gray-900 hidden md:block"><img src="../assets/soundpackTransparent2.svg" alt="SoundPack" class=""></router-link> 
      <ul class="nav-menu text-white" :class="{ 'show': isMenuVisible }">
          <li class="nav-item">  
            <router-link :to="{ name: 'uploadFiles' }" class="item">Cargar sets</router-link>
          </li>  
          <li class="nav-item">
            <div class="item">Membresia</div>
          </li>
          <li class="nav-item">
            <Logout/>
          </li>
      </ul>
    </header>
</template>
<script setup>
import { ref } from 'vue';
import Logout from './Logout.vue';
const isMenuVisible = ref(false);

const showMenu = () => { 
  isMenuVisible.value = !isMenuVisible.value;   
};
  
</script>
<style scoped>
  .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
  }

.nav-brand{
    margin-top: 12px;

}
.nav-main ul {
    display: flex;
    justify-content: flex-end;

}
.nav-main ul .nav-item{
  display: flex;
  align-items: center;  
  padding: 38px;

}
.item{
    position: relative;
    display: inline-block;
    cursor: pointer;
    padding: 1rem 0;
    text-decoration: none;
    color: inherit;
    transition: all .2s;
    color: #FFF;
    font-family: Poppins;
    font-size: 1.3rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    display: inline-block;
    height: 1rem;
    background: white;
    transition: all 0.25s cubic-bezier(1, 0.68, 0.16, 0.9);
}
.item:hover {
    /* color: rgb(0, 250, 196); */
    color:#7D47DC;

}
.item:hover::after {
    right: 0;
    height: 2px;
    background: #7D47DC;

}
.nav-main ul.nav-menu{
    flex: 1;

}
.menu-btn {
    display: none;
    cursor: pointer;
    position: fixed;
    font-size: 24px;
    top: 15px;
    right: 30px;
    z-index: 2;
}
.nav-menu :nth-child(1){animation: slideNav 0.4s forwards;}
    @keyframes slideNav {
      0% {
    transform: translateY(-120%);
  }
    100% {
    transform: translateY(0);
  }
}
.nav-brand{animation: slideNav 0.3s forwards;}
.nav-menu :nth-child(2){animation: slideNav 0.7s forwards;}
.nav-menu :nth-child(3){animation: slideNav 1s forwards;}
.nav-menu :nth-child(4){animation: slideNav 1.3s forwards;}
@media (max-width: 800px) {
    
    .menu-btn {
        padding-top: 2%;
        display: block;
      }
    
      .menu-btn:hover {
        opacity: 0.5;
      }
    .nav-main ul.nav-menu{
        display: flex;
        flex-direction: column;
        position: fixed;
        z-index: 1;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 0px 0px 0px 0px;
        top: 0;
        left: 0;
        height: 90%;
        width: 100%;
        min-width: 200px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 8px 32px 0 #7062d3;
        border-radius: 0px 0px 20px 20px;
        transform: translateY(-100vh);
    }

    .nav-main .nav-menu.show{
        transition: transform .5s ease-in-out;
        transform: translateY(0px);
    }
    .nav-main ul li{
        padding-bottom: 70px;
    }
    }
</style>