<template>
  <div class="planszaQuizz1">
    <p
      class="absolute inline-block whitespace-nowrap top-[244px] left-[205px] font-['Proxima Nova Condensed'] text-[#1d3850] font-semibold text-[42px]"
      v-html="storeQuizz.pytanieToDisplay(props.miejsceNaPlanszy)"
    ></p>
    <ul class="absolute block left-[200px] top-[360px] list-none">
      <AnswerSingle
        :miejsce-naplanszy="props.miejsceNaPlanszy"
        :nr-zestawu="zestawNumber"
        :nr-odpowiedzi="0"
        :czy-krzyzyk-wysw="storeQuizz.ifKrzyzyk1Visible"
      />
      <AnswerSingle
        :miejsce-naplanszy="props.miejsceNaPlanszy"
        :nr-zestawu="zestawNumber"
        :nr-odpowiedzi="1"
        :czy-krzyzyk-wysw="storeQuizz.ifKrzyzyk2Visible"
      />
      <BlueButton
        class="my-button mt-12 ml-12"
        :width="'394px'"
        :height="'87px'"
        :text="'Sprawdź odpowiedź'"
        :font-size="'37px'"
      />
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useQuizzStore } from "../stores/quizzStore1";
import AnswerSingle from "../components/AnswerSingle.vue";
import BlueButton from "../components/BlueButton.vue";
import { ref } from "vue";

const storeQuizz = useQuizzStore();

const props = defineProps<{ miejsceNaPlanszy: number }>();

const zestawNumber = ref(Math.floor(Math.random() * 2));
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

.pytanie1:deep(.buzka2) {
  position: relative;
  /* top: 2px;
   left: 555px; */
  margin-right: 0.2em;
  margin-left: 0.2em;
  margin-top: -0.3em;
  margin-bottom: -0.7em;
}

.pytanie1:deep(.malpa2) {
  position: relative;
  /* left: 318px; */
  margin-right: 0.2em;
  margin-left: 0.2em;
  margin-bottom: -0.4em;
}

.pytanie1:deep(.malpa3) {
  position: relative;
  margin-right: 0.2em;
  margin-left: 0.2em;
  margin-bottom: -0.4em;
}
</style>
