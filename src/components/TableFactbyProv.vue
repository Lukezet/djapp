<template>
  <div class="flex relative flex-col justify-center items-center">
      <table id="example" class="table p-12 border-8 border-purple-300/75 shadow-xl shadow-purple-400 my-24 rounded-3xl" style="width:70%">
      <thead>
          <tr class="header-names">
          <th class="nam">Nombre</th>
          <th>Cuit</th>
          <th>Factura nº</th>
          <th>Cae</th>
          <th>ImporteTotal</th>
          <th><a @click='' class="flex justify-center px-5 py-2 bg-gradient-to-r from-indigo-300 via-purple-400 to-purple-300  text-white  border-purple-200 rounded-3xl transition-colors">Opciones<span class="text-white text-xl material-symbols-outlined">
                   expand_more</span>
              </a>
          </th>
          </tr>
      </thead>
          <tbody v-if="listaFacturas.length > 0">
              <tr v-for="factura in listaFacturas" :key="factura.idFact" class="tr">
                  <td>{{ factura.nombre }}</td>
                  <td>{{ factura.cuit }}</td>
                  <td>{{ factura.tipoFactura }} {{ factura.numFact }}</td>
                  <td>{{ factura.cae }}</td>
                  <td>{{ factura.importeTotal }}</td>
                  <td class="button-container">
                      <a @click='emitIdFactura(factura,false)' class="flex cursor-pointer w-full px-5 py-2 my-3 mr-2 border-2 font-semibold  border-lime-300 text-lime-400 hover:bg-gradient-to-r from-emerald-200 via-lime-300 to-lime-200  hover:text-white hover:shadow-lg hover:shadow-emerald-500/50 hover:border-emerald-100 rounded-3xl transition-colors">Verificar</a>
                      <a @click='emitIdFactura(factura,true)' class="flex cursor-pointer w-full px-5 py-2 my-3 mr-2 border-2 font-semibold  border-purple-400 text-purple-500 hover:bg-gradient-to-r from-indigo-300 via-purple-400 to-purple-300  hover:text-white hover:shadow-lg hover:shadow-purple-500/50 hover:border-purple-200 rounded-3xl transition-colors">Editar</a>
                  </td>
              </tr>
          </tbody>
          <tbody class="relative" v-else>
            <tr>
              <button type="button" class="cargando absolute top-32 bg-stone-50 w-32 font-semibold text-stone-800" disabled>
                Aún no has seleccionado un proveedor...
              </button>
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axiosClient from '../axiosClient';
const emits = defineEmits('update:FactActions');
const props = defineProps({
  idProv:Number,
}) 
const listaFacturas = ref([]);
// const computedProveedores = computed(() => proveedores.value.filter(i => i.nombre.toLowerCase().includes(keyword.value.toLowerCase())))

if(props.idProv){
  const params = { pid: props.idProv };
  
  axiosClient.get('/factura/FactProv/', {params} )
    .then(({data})=>{
          
        listaFacturas.value = data;

    });
}

function emitIdFactura(factTo,edit){

  emits('update:FactActions',{ factTo, edit });

};


</script>
<style scoped>
  .cargando{
    left:47%
  }
  .table{
    padding: 4rem;
    border-collapse: separate;
    text-indent: 0;
    background-color: #FFFFFF;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(343,768,369)'%3E%3Cstop offset='0' stop-color='%23FFFFFF'/%3E%3Cstop offset='1' stop-color='%23E5D1F7'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='390' height='325' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.02'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
    background-size: cover;
  }
  thead{
      box-shadow: 0px 0px 9px 0px rgba(179,127,253,1);
      border-radius:2rem;
      height: 100%;
      align-items: center;
      width:100%;
  }

  th, td {
      /*border: 1px solid black;*/
      vertical-align: middle;
      align-items: center;
      padding: 8px;
      text-align: left;
      border-style: none;

  }
  .nam{
      padding-left: 2rem;
  }
  .button-container{
  display:flex;

  }


  .button:hover{
      color:white;
      background: linear-gradient(90deg, rgba(110,114,240,1) 23%, rgba(140,120,240,1) 42%, rgba(170,100,220,1) 100%);
  }
  .button-new {
      width: 100%;
      /* height:  2rem;
      align-items:center;
      display:flex;
      border-radius:2rem;
      justify-content:center;
      text-decoration:none;
      color:white;
      background: linear-gradient(90deg, rgba(120,124,250,1) 23%, rgba(151,125,250,1) 42%, rgba(182,126,251,1) 100%); */
  }

  /* .button-new:hover{
      color:white;
      background: linear-gradient(90deg, rgba(110,114,240,1) 23%, rgba(140,120,240,1) 42%, rgba(170,100,220,1) 100%);
  } */

  tbody, td, tfoot, th, thead, tr{
      border-style: none;
  }
  tr {
      border-bottom: 2px solid #9447ff1a;
       /* Cambia el color de fondo según tu preferencia */
  }
  .header-names {
  border-bottom: none; /* Elimina el borde inferior de la primera fila */
  }
  tbody {
      border-radius: 2rem;
  }
</style>