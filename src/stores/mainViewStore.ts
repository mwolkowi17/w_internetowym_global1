import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainViewStore = defineStore("mainView", () => {
  //sterowanie widokami gry

  const ifStartView = ref(false);
  const ifInstructionView = ref(false);
  const ifLevel1ChoseView = ref(false);
  const ifGameView1 = ref(true);

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
    ifGameView1,
    StartGame,
    InstructionDalej,
  };
});
