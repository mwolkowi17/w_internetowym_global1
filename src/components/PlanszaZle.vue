<template>
  <div
    :style="{ backgroundImage: `url(${bg})` }"
    class="w-[1212px] h-[533px] bg-[url(../assets/KOMUNIKAT_dobra_odp.png)] absolute -top-[180px] -left-[94px]"
  >
    <p
      class="absolute top-[80px] left-[510px] font-['Proxima Nova Condensed'] text-[#ffffff] font-semibold text-[100px]"
    >
      Źle!
    </p>
    <p
      class="absolute top-[230px] left-[190px] font-['Proxima Nova Condensed'] text-[#ffffff] font-semibold text-[70px]"
    >
      Nieprawidłowa odpowiedź
    </p>
    <BaseButton
      class="my-button absolute top-[360px] left-[440px]"
      :text="'Dalej'"
      :font-size="'70px'"
      :width="'301px'"
      :height="'117px'"
      @click="storeQuizz.ifPlanszaZle = false"
    />
  </div>
</template>

<script setup lang="ts">
import bg from "../assets/KOMUNIKAT_zla_odp.png";
import BaseButton from "./BaseButton.vue";
import { useQuizzStore } from "../stores/quizzStore1";

const storeQuizz = useQuizzStore();
</script>

<style scoped></style>
