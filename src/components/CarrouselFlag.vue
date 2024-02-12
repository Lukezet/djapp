<template>
      <div class="middleContainer">
        <div class="slider">
            <div class="slide">
                <img src="../assets/logo1.png" alt="">
                <img src="../assets/logo2.png" alt="">
                <img src="../assets/logo3.png" alt="">
                <img src="../assets/logo4.png" alt="">
                <img src="../assets/logo5.png" alt="">
                <img src="../assets/logo6.png" alt="">
                <img src="../assets/logo7.png" alt="">
                <img src="../assets/logo8.png" alt="">
            </div>

            <div class="slide">
                <img src="../assets/logo1.png" alt="">
                <img src="../assets/logo2.png" alt="">
                <img src="../assets/logo3.png" alt="">
                <img src="../assets/logo4.png" alt="">
                <img src="../assets/logo5.png" alt="">
                <img src="../assets/logo6.png" alt="">
                <img src="../assets/logo7.png" alt="">
                <img src="../assets/logo8.png" alt="">
            </div>
        </div>
    </div>
</template>
<style scoped>
.middleContainer{
    display: flex;
    height: 10rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(20px);
    background: linear-gradient(94deg, rgba(20,20,20,1) 0%, rgba(24,24,24,0.8) 31%, rgba(50,50,50,0.8) 85%, rgba(66,66,66,1) 100%);
    box-shadow: 0 10px 20px -10px rgba(0,0,0,0.2);
    /* background: rgb(24,24,24);
    background: linear-gradient(94deg, rgba(24,24,24,0.8) 0%, rgba(36,36,36,0.8) 24%, rgba(25,65,62,0.8) 84%, rgba(32,92,80,0.8) 100%); */
}
.slider {
width: 100%;
height: 120px;
position: relative;
display: flex;
overflow: hidden;

}
.slider img, .slider video {
    max-width: none;
}
.slide{
    height:120px;
    display: flex;
    align-items: center;
    animation: slideshow 20s linear infinite;

}
.slide img{
    height: 120px;
    padding: 0 120px 0 120px;

}
@keyframes slideshow {
    0%{transform:translateX(0);}
    100%{transform:translateX(-100%);}
}
</style>