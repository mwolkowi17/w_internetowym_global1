<template>
  <StartView v-if="storeMainView.ifStartView" />
  <InstructionView v-if="storeMainView.ifInstructionView" />
  <Level1ChoseView v-if="storeMainView.ifLevel1ChoseView" />
  <GameView1 v-if="storeMainView.ifGameView1" />
</template>

<script setup lang="ts">
import StartView from "./StartView.vue";
import InstructionView from "./InstructionView.vue";
import Level1ChoseView from "./Level1ChoseView.vue";
import GameView1 from "./GameView1.vue";
import { useMainViewStore } from "../stores/mainViewStore";

const storeMainView = useMainViewStore();
</script>

<style scoped></style>
