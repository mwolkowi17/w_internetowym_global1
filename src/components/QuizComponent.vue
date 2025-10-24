<template>
  <div class="planszaQuizz1">
    <p
      class="absolute top-[244px] left-[205px] font-['Proxima Nova Condensed'] text-[#1d3850] font-semibold text-[42px]"
    >
      {{ storeQuizz.quizz_assets_data.tab_quizz[0]?.tresc }}
    </p>
    <ul class="absolute block left-[200px] top-[360px] list-none">
      <AnswerSingle :nr-zestawu="0" :nr-odpowiedzi="0" />
      <AnswerSingle :nr-zestawu="0" :nr-odpowiedzi="1" />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useQuizzStore } from "../stores/quizzStore1";
import AnswerSingle from "./AnswerSingle.vue";

const storeQuizz = useQuizzStore();
</script>
<style scoped>
.planszaQuizz1 {
  background-image: url("../assets/pytanie_puste.png");
  background-size: 1411px 896px;
  background-repeat: no-repeat;
  height: 896px;
  width: 1411px;
  position: absolute;
  left: 0px;
  top: 100px;
}
</style>
