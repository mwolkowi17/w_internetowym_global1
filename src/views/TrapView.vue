<template>
  <div class="pulapka1">
    <div class="info-trap">
      <h1 class="naglowek">{{ storeGame1.titleTrap }}</h1>
      <p class="napis">{{ storeGame1.textTrap }}</p>
    </div>
    <BaseButton
      class="my-button mt-4 ml-12"
      :width="'301px'"
      :height="'117px'"
      :text="'Dalej'"
      :font-size="'70px'"
      @click="
        storeGame1.if_widok_pulapki = false;
        storeGame1.koniecPulapki();
        storeGame2.if_widok_pulapki = false;
        storeGame2.koniecPulapki();
      "
    />
  </div>
</template>
<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import { useGameStore } from "../stores/gameStore1";
import { useGameStore2 } from "../stores/gameStore2";

const storeGame1 = useGameStore();
const storeGame2 = useGameStore2();
</script>
<style scoped>
.pulapka1 {
  background-image: url("../assets/zasadzka.png");
  background-size: 1212px 533px;
  background-repeat: no-repeat;
  height: 533px;
  width: 1212px;
  position: absolute;
  left: 100px;
  top: 250px;
  position: absolute;
  left: 100px;
  top: 250px;
  display: flex;
  height: 800px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.info-trap {
  height: 256px;
  width: 912px;
  /* position: absolute;
  left: 200px;
  top: 50px; */
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.naglowek {
  color: rgb(255, 255, 255);
  font-size: 100px;
  font-style: bold;
  font-weight: 600;
  font-family: "Proxima Nova", sans-serif;
  /* top: -70px;
  left: 150px;
  ;
  height: 88px;
  width: 333px;
  position: absolute;
  z-index: 2; */
  margin-bottom: 0em;
  margin-top: 0.2em;
  height: 88px;
  width: 333px;
  display: flex;
  justify-content: center;
  z-index: 2;
}

.napis {
  color: rgb(255, 255, 255);
  font-size: 70px;
  font-style: bold;
  font-weight: 400;
  font-family: "Proxima Nova", sans-serif;
  white-space: nowrap;
  /* top: 80px;
  ;
  left: 60px;
  height: 88px;
  width: 333px;
  position: absolute;
  z-index: 2; */
  margin-top: 0.5em;
  margin-bottom: 0.6em;
  height: 88px;
  width: 333px;

  z-index: 2;
  display: flex;
  justify-content: center;
}
</style>
