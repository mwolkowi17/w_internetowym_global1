<template>
  <div class="plansza-lose">
    <div class="absolute w-[1200px] h-[400px] top-[200px] left-[350px]">
      <h1
        class="absolute w-[333px] h-[88px] left-[380px] text-[#ffffff] font-['Proxima Nova Condensed'] text-[100px] font-bold"
      >
        Przegrana.
      </h1>
      <p
        class="absolute left-[120px] top-[150px] text-[#ffffff] font-['Proxima Nova Condensed'] text-[70px] font-bold"
      >
        Chcesz spróbować jeszcze raz?
      </p>
    </div>
    <BaseButton
      class="absolute my-button transform translate-y-35 top-[450px] left-[320px]"
      :text="'Zagraj jeszcze raz'"
      :width="'583px'"
      :height="'192px'"
      :font-size="'60px'"
      @click="storeMainView.LeveOneChose()"
    />
    <BaseButton
      class="absolute my-button transform translate-y-35 top-[450px] left-[995px]"
      :text="'Zakończ grę'"
      :width="'583px'"
      :height="'192px'"
      :font-size="'60px'"
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
.plansza-lose {
  background-image: url("../assets/przegrana_plansza.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
  z-index: 2;
}
</style>
