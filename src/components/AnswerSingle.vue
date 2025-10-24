<template>
  <li class="mb-[5px]">
    <div class="flex items-center px-[0.5rem] py-[1rem]">
      <span class="krzyzyk"> </span>
      <span class="w-[81px] h-[81px] border-solid border-[#1d3850] border-2">
      </span>
      <span
        class="ml-6 font-['Proxima Nova Condensed'] text-[#1d3850] font-semibold text-[42px]"
      >
        {{
          //   storeQuizz.quizz_assets_data?.tab_quizz?.[props.nrZestawu]
          //     ?.odpowiedz_text?.[props.nrOdpowiedzi] ?? ""
          storeQuizz.quizz_assets_data.pokaz_zadanie_2(2)?.odpowiedz_text?.[
            props.nrZestawu
          ]?.[props.nrOdpowiedzi] ?? ""
        }}
      </span>
    </div>
  </li>
</template>
<script setup lang="ts">
import { useQuizzStore } from "../stores/quizzStore1";

const storeQuizz = useQuizzStore();

const props = defineProps<{
  nrOdpowiedzi: number;
  nrZestawu: number;
}>();
</script>
<style scoped>
.krzyzyk {
  background-image: url("../assets/krzyzyk1.png");
  background-size: 73px 73px;
  background-repeat: no-repeat;
  height: 73px;
  width: 73px;
  position: absolute;
  visibility: hidden;
  z-index: 1;
}
</style>
