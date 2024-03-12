<template>
  <Listbox class="w-full" as="div" v-model="selected">
    <div class="relative ">
      <ListboxButton class="relative w-full h-2/5 italic font-medium px-5 text-white bg-gradient-to-br from-neutral-900 to-zinc-700 rounded-[40px] shadow border border-white border-opacity-50 backdrop-blur-[37.38px] cursor-pointer pl-3 pr-10 text-left  ring-1 ring-inset ring-purple-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6 focus:ring-purple-500 py-2 pb-3  focus hover:shadow-lg hover:shadow-purple-500/50 transition duration-150 ease-out md:ease-in">
        <span class="flex items-center" >
          <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ selected && selected.tipo ? selected.tipo : 'Seleccionar Género'  }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-purple-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-20 mt-1 max-h-56 w-full overflow-auto rounded-3xl bg-gradient-to-br from-neutral-900 to-zinc-700 border border-white py-1 text-base shadow-lg shadow-purple-300/50 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="tipo in tiposFacturas" :key="tipo.id" :value="tipo" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-gradient-to-r from-violet-600 to-teal-400 text-white' : 'text-gray-200', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ tipo.tipo }}</span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-purple-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>  
</template>

<script setup>
import {onMounted, ref, watch } from 'vue';
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
const props = defineProps({
  tipoFact:String,
});

const emits = defineEmits(['update:selectedId']);
const selected = ref(null) 
const tiposFacturas = ref([
  { id: 1, tipo: 'Rock Argentino' },
  { id: 2, tipo: 'Electronica' },
  { id: 3, tipo: 'Reggaeton' },
  { id: 4, tipo: 'Trap' },
  { id: 5, tipo: 'Pop' },
  { id: 6, tipo: 'Dance 90' },
  { id: 7, tipo: 'Dance 2000' },
  { id: 8, tipo: 'Rock n Roll' },
]);
console.log(props.tipoFact)
watch(() => props.tipoFact, (tFact) => {
    selected.value = tiposFacturas.value.find((id) => id.tipo === tFact);
    console.log("imprimo el tipoFACT ",selected.value)
  }
);



watch(() => selected.value, (newSelected) => {
  if (newSelected) {
    emits('update:selectedId', newSelected); // Emite el evento con el nuevo valor seleccionado
    console.log("tipo facturaA:",newSelected.tipo)
  }
});

</script>