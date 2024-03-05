<template>
  <section>
    <div class="volume-control" @mousedown="handleVolumeDrag" @touchstart="handleVolumeDrag" @click="handleVolumeClick" >
    <div class="volume-slider bg-neutral-800" ref="volumeSlider" :style="{ width: volumeWidth }">
      <div class="volume-fill bg-gradient-to-r from-violet-500 to-teal-400" :style="{ width: volumeFillWidth }"></div>
      <div class="volume-handle hover:scale-150 transition ease-in-out duration-100" :style="{ left: volumeHandlePosition }"></div>
      <img class="absolute -top-3 -left-10 w-8" src="../assets/volume-high.svg" alt="play">
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch} from 'vue';

const volume = ref(100); // Inicializar el volumen al 100%
const isDragging = ref(false);
const volumeSlider = ref(null);

const volumeWidth = ref('100%'); // Anchura del slider de volumen
const volumeFillWidth = ref('100%'); // Anchura del área de llenado del volumen
const volumeHandlePosition = ref('calc(100% - 8px)'); // Posición del control deslizante de volumen

onMounted(() => {
  // Inicializar el volumen en el volumen del sistema
  volume.value = Howler.volume() * 100;

  // Actualizar el volumen cuando se cambie el volumen del sistema
  Howler.volume(volume.value / 100);

  // Escuchar cambios en el volumen del sistema
  Howler.volume(0.5); // Ejemplo: establecer el volumen al 50%
});

const handleVolumeClick = (event) => {
  const volumeSliderWidth = volumeSlider.value.offsetWidth;
  const offsetX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
  const relativeX = offsetX - volumeSlider.value.getBoundingClientRect().left;
  const volumePercent = (relativeX / volumeSliderWidth) * 100;

  // Limitar el volumen dentro del rango de 0 a 100
  volume.value = Math.max(0, Math.min(volumePercent, 100));

  // Actualizar el volumen del sistema
  Howler.volume(volume.value / 100);
};

const handleVolumeDrag = (event) => {
  isDragging.value = true;

  const handleDrag = (e) => {
    const volumeSliderWidth = volumeSlider.value.offsetWidth;
    const offsetX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const relativeX = offsetX - volumeSlider.value.getBoundingClientRect().left;
    const volumePercent = (relativeX / volumeSliderWidth) * 100;

    // Limitar el volumen dentro del rango de 0 a 100
    volume.value = Math.max(0, Math.min(volumePercent, 100));

    // Actualizar el volumen del sistema
    Howler.volume(volume.value / 100);
  };

  const handleDragEnd = () => {
    isDragging.value = false;
    window.removeEventListener('mousemove', handleDrag);
    window.removeEventListener('touchmove', handleDrag);
    window.removeEventListener('mouseup', handleDragEnd);
    window.removeEventListener('touchend', handleDragEnd);
  };

  window.addEventListener('mousemove', handleDrag);
  window.addEventListener('touchmove', handleDrag);
  window.addEventListener('mouseup', handleDragEnd);
  window.addEventListener('touchend', handleDragEnd);
};

onUnmounted(() => {
  window.removeEventListener('mousemove', handleVolumeDrag);
  window.removeEventListener('touchmove', handleVolumeDrag);
});

// Observador para actualizar el tamaño del área de llenado del volumen y la posición del control deslizante
watch(volume, () => {
  console.log("cambio de volumen")
  
    volumeFillWidth.value = volume.value + '%';
    volumeHandlePosition.value = `calc(${volume.value}% - 8px)`;
  
});

</script>

<style scoped>
.volume-control {
  position: relative;
  width: 100%;
  height: 12px; /* Altura del control deslizante */
  cursor: pointer;
}

.volume-slider {
  position: absolute;
  width: 100%;
  height: 8px;/* Altura del área de llenado del volumen */
  border-radius: 2px; /* Radio de borde del área de llenado del volumen */
}

.volume-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
   /* Color del área de llenado del volumen */
  border-radius: 2px; /* Radio de borde del área de llenado del volumen */
}

.volume-handle {
  position: absolute;
  top: -2px;

  width: 12px; /* Ancho del control deslizante */
  height: 12px; /* Altura del control deslizante */
  background-color: #fafafa; /* Color del control deslizante */
  border-radius: 50%; /* Radio de borde del control deslizante */
  cursor: pointer;
}
</style>