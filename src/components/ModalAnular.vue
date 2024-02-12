<template>
<Transition name="modal-outer" appear>
  <div 
    class=" h-screen absolute w-full bg-black bg-opacity-30 top-0 left-0 flex justify-center px-8">
        <Transition name="modal-inner">
        <div class="fixed flex justify-center items-center p-8 pb-12 rounded-xl bg-white h-1/3 self-start mt-16 w-2/3">
            <h1 class="text-2xl text-stone-800 font-bold">¿Seguro que deseas anular al proveedor {{props.provName}}?</h1>
            <div class="flex">
            <button type="button"
                class="flex absolute -bottom-5 left-14 text-lg justify-center items-center w-1/3 h-16 border-2 bg-gradient-to-r from-indigo-300 via-purple-400 to-purple-300  text-white hover:shadow-lg hover:shadow-purple-500/50 border-purple-200 rounded-3xl transition-colors"
                @click="anularProv"
                >confirmar</button>
            <button type="button"
                class="flex absolute -bottom-5 right-14 text-lg justify-center items-center w-1/3 h-16 border-2 bg-gradient-to-r from-rose-300 via-rose-400 to-red-200  text-white hover:shadow-lg hover:shadow-red-500/50 border-purple-200 rounded-3xl transition-colors"
                @click="emits('close')"
                >cancelar</button>    
            </div>
            <button class="absolute text-xl  w-14 h-14 text-white -top-7 right-7 flex justify-center items-center border-2 bg-gradient-to-r from-indigo-300 via-purple-400 to-purple-300  hover:shadow-lg hover:shadow-purple-500/50 border-purple-200 rounded-full transition-colors"
            @click="emits('close')"
            >X</button>
        </div>
        </Transition>
  </div>
</Transition>
</template>

<script setup>
import axiosClient from '../axiosClient';
const emits = defineEmits(["close"])
const props = defineProps({
  proveedorId:0,
  provName:'',
});
console.log(props.provName)
console.log(props.proveedorId)

//EDITAR PROVEEDOR 
const anularProv = () => {
  
  const params = { pid: props.proveedorId };
  axiosClient.get('/proveedor/CancelProv', {params})
  .then(res => {
    console.log("se anulo:"+res.data); // Imprime los detalles del error del servidor, si están disponibles.
    alert("se anuló correctamente");
    emits('close');
    window.location.reload();
  })
  .catch(error => {
      if (error.response) {
        // La solicitud fue recibida, pero el servidor devolvió un código de estado de error.
        console.error("Error en la respuesta del servidor:", error.response.data);
        alert("Error en la respuesta del servidor: " + error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada, pero no se recibió respuesta del servidor.
        console.error("No se recibió respuesta del servidor");
        alert("No se recibió respuesta del servidor");
      } else {
        // Ocurrió un error durante la configuración de la solicitud.
        console.error("Error al configurar la solicitud:", error.message);
        alert("Error al configurar la solicitud: " + error.message);
      }
    });
}
</script>

<style scoped>

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
