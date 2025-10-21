import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainViewStore = defineStore("mainView", () => {
  //sterowanie widokami gry

  const ifStartView = ref(true);
  const ifInstructionView = ref(false);
  const ifLevel1ChoseView = ref(false);

  function StartGame() {
    ifStartView.value = false;
    ifInstructionView.value = true;
  }

  function InstructionDalej() {
    ifInstructionView.value = false;
    ifLevel1ChoseView.value = true;
  }

  return {
    ifStartView,
    ifInstructionView,
    ifLevel1ChoseView,
    StartGame,
    InstructionDalej,
  };
});
