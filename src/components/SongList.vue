<template>
  <transition name="slide-fade">

      <ul class="wrapper grid  grid-flow-col gap-2">
        <li v-for="(song, index) in props.songs" :key="index" class="text-xs overflow-hidden max-w-xs truncate">
          {{ index + 1 }}- {{ song }}
        </li>
      </ul>

  </transition>
</template>
<script setup>
const props = defineProps({
  songs:Array
})
// watch(() => selected.value, (newSelected) => {
//   if (newSelected) {
//     emits('update:selectedId', newSelected); // Emite el evento con el nuevo valor seleccionado
//     console.log(newSelected.valorAlicuota)
//   }
// });

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