<template>
  <div
    class="absolute top-70 right-2 w-[483px] h-[230px] flex flex-col items-center"
  >
    <h3
      class="font-['Proxima Nova Condensed'] text-[#1d3850] font-bold text-[45px] transform -translate-x-35"
    >
      Szanse
    </h3>
    <div class="flex felx-row gap-8 mt-4">
      <img src="../assets/zycie1.png" v-if="storeSzanse.if_szansa1" />
      <img src="../assets/zycie1.png" v-if="storeSzanse.if_szansa2" />
      <img src="../assets/zycie1.png" v-if="storeSzanse.if_szansa3" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSzanseStore } from "../stores/szanseStore";

const storeSzanse = useSzanseStore();
</script>
<style scoped></style>
