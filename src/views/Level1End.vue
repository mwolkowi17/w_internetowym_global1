<template>
  <div class="plansza-win-level-one">
    <div class="absolute w-[1200px] h-[400px] top-[200px] left-[350px]">
      <h1
        class="absolute w-[333px] h-[88px] left-[430px] text-[#ffffff] font-['Proxima Nova Condensed'] text-[100px] font-bold"
      >
        Brawo!
      </h1>
      <p
        class="absolute left-[120px] top-[150px] text-[#ffffff] font-['Proxima Nova Condensed'] text-[70px] font-bold"
      >
        Udało ci się ukończyć <b>Poziom 1</b>
      </p>
      <p
        class="absolute left-[240px] top-[280px] text-[#ffffff] font-['Proxima Nova Condensed'] text-[70px] font-bold"
      >
        - chcesz grać dalej?
      </p>
    </div>
    <BaseButton
      class="absolute my-button transform translate-y-35 top-[550px] left-[320px]"
      :text="'Gram dalej'"
      :width="'583px'"
      :height="'192px'"
      :font-size="'80px'"
      @click="storeMainView.LevelTwoChose()"
    />
    <BaseButton
      class="absolute my-button transform translate-y-35 top-[550px] left-[995px]"
      :text="'Zakończ grę'"
      :width="'583px'"
      :height="'192px'"
      :font-size="'80px'"
      @click="storeMainView.BackToStart()"
    />
  </div>
</template>
<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
import { useMainViewStore } from "../stores/mainViewStore";

const storeMainView = useMainViewStore();
</script>
<style scoped>
.plansza-win-level-one {
  background-image: url("../assets/ukonczenie_poziomu1.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 2;
}
</style>
