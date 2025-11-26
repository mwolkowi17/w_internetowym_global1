import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainViewStore = defineStore("mainView", () => {
  //sterowanie widokami gry

  const ifStartView = ref(false);
  const ifInstructionView = ref(false);
  const ifLevel1ChoseView = ref(false);
  const ifLevel2ChoseView = ref(true);
  const ifGameView1 = ref(false);

  function StartGame() {
    ifStartView.value = false;
    ifInstructionView.value = true;
  }

  function InstructionDalej() {
    ifInstructionView.value = false;
    ifLevel1ChoseView.value = true;
  }

  function LevelOneStart() {
    ifInstructionView.value = false;
    ifGameView1.value = true;
  }

  return {
    ifStartView,
    ifInstructionView,
    ifLevel1ChoseView,
    ifLevel2ChoseView,
    ifGameView1,
    StartGame,
    InstructionDalej,
    LevelOneStart,
  };
});
