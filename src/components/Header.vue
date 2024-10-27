<template>
  <div id="header" class="bg-[#FCF1ED] z-50 h-10 md:h-20 flex flex-col justify-center items-center">
    <ul class="flex flex-row gap-4 md:gap-32 justify-center items-center text-[#32302F] ">
      <li v-for="(item, index) in menuItems" :key="index">
        <a class="text-black font-bold text-lg" :href="`#${item}`">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent ({
    name: 'Header',
  setup() {
    const menuItems = ref([]);
    const setMenu = () => {
        menuItems.value = [
        "Inicio",
        "Serviços",
        "Agendamento",
        "Clientes",
        //"Quem Somos",
      ];
    }
    onMounted(setMenu);

    return {menuItems};
    }
    
})
</script>