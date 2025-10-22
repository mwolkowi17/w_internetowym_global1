<template>
  <div class="tlo flex items-center justify-center">
    <h1 class="sr-only">W interntowym labiryncie</h1>
    <BaseButton
      class="my-button transform translate-y-35"
      :text="'Start'"
      :width="'432px'"
      :height="'168px'"
      :font-size="'100px'"
      @click="storeMainView.StartGame"
    />
  </div>
</template>

<script setup lang="ts">
import { useMainViewStore } from "../stores/mainViewStore";
import BaseButton from "../components/BaseButton.vue";

const storeMainView = useMainViewStore();
</script>

<style scoped>
.tlo {
  background-image: url("../assets/plansza_start.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
