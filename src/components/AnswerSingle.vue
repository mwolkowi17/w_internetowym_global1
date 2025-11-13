<template>
  <li class="mb-[5px]">
    <div class="flex items-center px-[0.5rem] py-[1rem]">
      <span
        class="krzyzyk"
        :class="{
          'krzyzyk-visible': czyKrzyzykWysw,
          'krzyzyk-hidden': !czyKrzyzykWysw,
        }"
      >
      </span>
      <span
        class="my-button w-[81px] h-[81px] border-solid border-[#1d3850] border-2"
        @click="Zaznaczenie"
      >
      </span>
      <span
        class="ml-6 font-['Proxima Nova Condensed'] text-[#1d3850] font-semibold text-[42px]"
      >
        {{
          storeQuizz.quizz_assets_data.pokaz_zadanie_2(props.miejsceNaplanszy)
            ?.odpowiedz_text?.[props.nrZestawu]?.[props.nrOdpowiedzi] ?? ""
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
  miejsceNaplanszy: number;
  czyKrzyzykWysw: boolean;
}>();

function Zaznaczenie() {
  console.log(props.nrOdpowiedzi);
  if (props.nrOdpowiedzi === 0) {
    console.log("Zaznaczono odpwiedź nr 1");
    storeQuizz.ifKrzyzyk1Visible = true;
    storeQuizz.ifKrzyzyk2Visible = false;
    // storeQuizz.czyOdpowiedz1Poprawna = true;
    // storeQuizz.czyOdpowiedz2Poprawna = false;
    storeQuizz.ifButtonCheck = true;
    if (
      storeQuizz.quizz_assets_data.tab_quizz[props.nrOdpowiedzi]
        ?.odpowiedz_text?.[props.nrZestawu]?.[2] === 1
    ) {
      console.log("prawidlowa odpowiedz");
    } else {
      console.log("zła odpowiedz");
    }
  } else {
    console.log("Zaznaczono odpwiedź nr 2");
    storeQuizz.ifKrzyzyk1Visible = false;
    storeQuizz.ifKrzyzyk2Visible = true;
    // storeQuizz.czyOdpowiedz2Poprawna = true;
    // storeQuizz.czyOdpowiedz1Poprawna = false;
    if (
      storeQuizz.quizz_assets_data.tab_quizz[props.nrOdpowiedzi]
        ?.odpowiedz_text?.[props.nrZestawu]?.[2] === 2
    ) {
      console.log("prawidlowa odpowiedz");
    } else {
      console.log("zła odpowiedz");
    }
  }
}
</script>
<style scoped>
.krzyzyk {
  background-image: url("../assets/krzyzyk1.png");
  background-size: 73px 73px;
  background-repeat: no-repeat;
  height: 73px;
  width: 73px;
  position: absolute;

  z-index: 3;
}
.krzyzyk-visible {
  visibility: visible;
}

.krzyzyk-hidden {
  visibility: hidden;
}
</style>
