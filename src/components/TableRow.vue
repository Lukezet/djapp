<template>
  <tr class="hover:shadow-md" v-for="(detalle, index) in detallesFactura" :key="index">
    <td class="rounded-md text-center shadow-sm">{{ index + 1 }}</td>
    <td class="rounded-md shadow-sm"><input v-model="detalle.detalle" type="text" class="w-full bg-inherit border-0" placeholder="Detalles"></td>
    <td class="rounded-md shadow-sm">
      <DropDownCuentaDeuda :tipoCuentaDeuda="detalle.idCDeuda" @update:selectedId="(selectedId) => handleSelectedCuentaDeuda(selectedId, index)"></DropDownCuentaDeuda>
    </td>
    <td class="rounded-md shadow-sm">
      <DropDownAlicuota :tipoAlicuota="detalle.idAlicuota" @update:selectedId="(selectedId) => handleSelectedTipoAlicuota(selectedId, index)"></DropDownAlicuota>
    </td>
    <td class="rounded-md shadow-sm  w-24"><input v-model="detalle.ivaInput" type="text" class="w-full bg-inherit border-0" placeholder="IVA"></td>
    <td class="rounded-md pl-2 shadow-sm">{{ typeof montoNeto(index) == 'number' ? montoNeto(index).toFixed(2) : montoNeto(index) }}</td>
    <td class="rounded-md shadow-sm"><input v-model="detalle.importe" type="text" class="w-full bg-inherit border-0" placeholder="$0"></td>
    <button @click="quitarRegistro(index)" type="button" class="text-xl h-12 text-white w-full  flex justify-center items-center border-2 bg-red-300 hover:shadow-lg hover:shadow-red-500/50 hover:bg-red-400 border-red-200 rounded-sm shadow-sm transition duration-150 ease-out md:ease-in material-symbols-outlined">delete</button>
  </tr>
  <tr>
    <td colspan="9">
      <div class="flex mt-6 justify-center items-center">
        <h1>TOTAL: ${{ sumaImportes }}</h1>
      </div>
    </td>
  </tr>
  <tr>
    <td colspan="4">
      <div class="addB flex justify-end  items-center">
        <button @click.prevent="agregarRegistro" type="button" class="text-2xl w-2/4 h-12 text-white    flex justify-center items-center border-2 bg-purple-300 hover:shadow-lg hover:bg-purple-400 hover:shadow-purple-500/50 border-purple-200 rounded-l-3xl font-bold rounded-r-sm transition duration-150 ease-out md:ease-in material-symbols-outlined">
          add
          <h3>Agregar nuevo detalle</h3>
        </button>
      </div>
    </td>
    <td colspan="5">
      <div class="addB flex justify-start items-center">
        <button @click="confirmaDetalles" type="button" class="text-2xl h-12 text-white w-2/4 flex justify-center items-center border-2 bg-lime-300 hover:shadow-lg hover:bg-lime-400  hover:shadow-lime-500/50 border-lime-100 rounded-r-3xl font-bold rounded-l-sm  transition duration-150 ease-out md:ease-in material-symbols-outlined">
          done 
          <h3>Confirmar Detalles de Factura</h3>
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import DropDownAlicuota from './DropDownAlicuota.vue';
import DropDownCuentaDeuda from './DropDownCuentaDeuda.vue';
const props = defineProps({
  detallefacturaEdit:Array,
});
let detallesFactura = ref([]);
const emits = defineEmits(['update:detallesFactura']);
// onMounted(()=>{
 
//   detallesFactura.value = props.detallefacturaEdit.map((detalle) => ({ ...detalle }));
//   console.log(props.detallefacturaEdit)
// })
watch(() => props.detallefacturaEdit, (newDet) => {
  if (newDet) {
    detallesFactura.value = props.detallefacturaEdit.map((detalle) => ({ ...detalle }))
    console.log("escuchamos el cambio",detallesFactura.value)
  }
});

const montoNeto = (index) => {
  const detalle = detallesFactura.value[index];
  const importe = parseFloat(detalle.importe);
  const iva = parseFloat(detalle.ivaInput);

  if (isNaN(importe) || isNaN(iva)) {
    return '$0';
  }

  return importe - (importe * (iva / 100));
};

const handleSelectedTipoAlicuota = (selectedId, index) =>  {
  detallesFactura.value[index].idAlicuota = selectedId.idAlicuota;
  detallesFactura.value[index].ivaInput = parseFloat(selectedId.valorAlicuota);
};
const handleSelectedCuentaDeuda = (selectedId, index) =>  {

  detallesFactura.value[index].idCDeuda = selectedId.idCDeuda;
};

const agregarRegistro = () => {
  detallesFactura.value.push({
    idDetalle: 0,
    idFact: 0,
    idCDeuda: '',
    detalle: '',
    importe: '',
    idAlicuota: '',
    anulado: false,
    ivaInput: 0
  });
  console.log(detallesFactura.value)
};
const quitarRegistro = (index) => {
  detallesFactura.value.splice(index,1);
  console.log("registro ",index," eliminado")
}
const sumaImportes = computed(() => {
  return detallesFactura.value.reduce((total, detalle) => {
    const importe = parseFloat(detalle.importe);
    return isNaN(importe) ? total : total + importe;
  }, 0);
});

const emitDetallesFactura = () => {
  // Elimina la propiedad 'ivaInput' de cada objeto en 'detallesFactura'
  const detallesSinIvaInput = detallesFactura.value.map((detalle) => {
  const { ivaInput, ...rest } = detalle;
  return rest;
  });
  console.log(detallesSinIvaInput)
  // Emite un evento personalizado llamado "detalles-factura" junto con el arreglo detallesFactura
  emits('update:detallesFactura', detallesSinIvaInput);
};


// Función para verificar si algún campo está vacío en un registro
const registroIncompleto = (registro) => {
  return Object.values(registro).some((valor) => valor === '');
};
const confirmaDetalles = () => {
  const hayRegistrosIncompletos = detallesFactura.value.some((registro) => registroIncompleto(registro));
  console.log("esto es lo que hay",detallesFactura.value)
  
  if (hayRegistrosIncompletos) {
    alert('Todos los campos de la tabla deben estar completos.')
  } else {
    console.log('Todos los registros están completos.');
    emitDetallesFactura()
  } 
};
</script>
<!-- {
  "idFact": 0,
  "idCDeuda": 0,
  "idAlicuota": 0,
  "detalle": "string",
  "importe": 0,
  "anulado": true
} -->
<style scoped>

  h1{
    font-family:Inter var;
    margin-top: 12px;
    font-weight: 600;}
  h3{
    font-family:Inter var;
    font-size: 1rem;}

  .addB{
    margin-top: 12px;
  }
</style>