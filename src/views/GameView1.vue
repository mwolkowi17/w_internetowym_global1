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
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from "../stores/gameStore1";
import StartIcon from "../components/StartIcon.vue";
import PlanszaImage from "../components/PlanszaImage.vue";
import MetaIcon from "../components/MetaIcon.vue";
import Pionek from "../components/Pionek.vue";
import SzanseSection from "../components/SzanseSection.vue";

const storeGame1 = useGameStore();
</script>

<style scoped>
.tlo2 {
  background-image: url("../assets/plansza_poziom1.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>
