import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainViewStore = defineStore("mainView", () => {
  //sterowanie widokami gry

  const ifStartView = ref(true);
  const ifInstructionView = ref(false);

  function StartGame() {
    ifStartView.value = false;
    ifInstructionView.value = true;
  }

  return {
    ifStartView,
    ifInstructionView,
    StartGame,
  };
});
