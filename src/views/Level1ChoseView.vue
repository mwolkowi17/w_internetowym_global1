<template>
  <div class="tlo-level1 flex flex-row items-center justify-center">
    <BaseButton
      class="my-button mr-54"
      :text="'Poziom 1'"
      :width="'595px'"
      :height="'200px'"
      :font-size="'100px'"
    />
    <BaseButton
      :text="'Poziom 2'"
      :width="'595px'"
      :height="'200px'"
      :font-size="'100px'"
      disabled
    />
  </div>
</template>

<script setup lang="ts">
import BaseButton from "../components/BaseButton.vue";
</script>

<style scoped>
.tlo-level1 {
  background-image: url("../assets/plansza_poziom1_wybor.png");
  background-size: 1920px 1080px;
  height: 1080px;
  width: 1920px;
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>
