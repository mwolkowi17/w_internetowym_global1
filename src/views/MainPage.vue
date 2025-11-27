<template>
  <StartView v-if="storeMainView.ifStartView" />
  <InstructionView v-if="storeMainView.ifInstructionView" />
  <Level1ChoseView v-if="storeMainView.ifLevel1ChoseView" />
  <Level2ChoseView v-if="storeMainView.ifLevel2ChoseView" />
  <GameView1 v-if="storeMainView.ifGameView1" />
  <Level1End v-if="storeMainView.ifLevel1End" />
</template>

<script setup lang="ts">
import StartView from "./StartView.vue";
import InstructionView from "./InstructionView.vue";
import Level1ChoseView from "./Level1ChoseView.vue";
import Level2ChoseView from "./Level2ChoseView.vue";
import GameView1 from "./GameView1.vue";
import Level1End from "./Level1End.vue";
import { useMainViewStore } from "../stores/mainViewStore";

const storeMainView = useMainViewStore();
</script>

<style scoped></style>
