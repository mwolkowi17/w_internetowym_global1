<template>
  <div class="tlo2">
    <StartIcon :top-position="'-18px'" :left-position="'23px'" />
    <PlanszaImage :top-position="'155px'" :left-position="'0px'" />
    <MetaIcon :top-position="'482px'" :left-position="'1133px'" />
    <Pionek
      :top-position="storeGame1.pionek_top"
      :left-position="storeGame1.pionek_left"
    />
    <SzanseSection />
    <ButtonRzuc @click="storeGame1.kostka_click" />
    <Kostka :top-position="'687px'" :left-position="'1549px'" />
    <TrapView v-if="storeGame1.if_widok_pulapki" />
    <QuizzView2
      v-if="storeGame1.if_widok_quizz1"
      :miejsce-na-planszy="storeGame1.krok_gracz1_na_planszy"
    />
  </div>
</template>
<script setup lang="ts">
import { useGameStore2 } from "../stores/gameStore2";
import { useSzanseStore } from "../stores/szanseStore";
import StartIcon from "../components/StartIcon.vue";
import PlanszaImage from "../components/PlanszaImage.vue";
import MetaIcon from "../components/MetaIcon.vue";
import Pionek from "../components/Pionek.vue";
import SzanseSection from "../components/SzanseSection.vue";
import ButtonRzuc from "../components/ButtonRzuc.vue";
import Kostka from "../components/Kostka.vue";
import TrapView from "./TrapView.vue";
import QuizzView2 from "./QuizzView2.vue";
import { onMounted } from "vue";

const storeGame1 = useGameStore2();

const storeSzanse = useSzanseStore();

onMounted(() => {
  storeSzanse.if_szansa4 = true;
});
</script>
<style scoped>
.tlo2 {
  background-image: url("../assets/plansza_poziom2.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}
.rzut1 {
  color: rgb(255, 255, 255);
  font-size: 40px;
  font-style: bold;
  font-weight: 700;
  font-family: "Proxima Nova", sans-serif;
  background-image: url("../assets/rzut_przycisk.png");
  background-size: 333px 86px;
  background-repeat: no-repeat;
  top: 560px;
  left: 1502px;
  height: 88px;
  width: 333px;
  position: absolute;
  z-index: 2;
}
</style>
