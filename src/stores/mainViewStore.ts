import { defineStore } from "pinia";
import { ref } from "vue";

export const useMainViewStore = defineStore("mainView", () => {
  //sterowanie widokami gry

  const ifStartView = ref(false);
  const ifInstructionView = ref(false);
  const ifLevel1ChoseView = ref(false);
  const ifLevel2ChoseView = ref(false);
  const ifGameView1 = ref(true);
  const ifGameView2 = ref(false);
  const ifLevel1End = ref(false);
  const ifLose = ref(false);

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

  function LevelTwoChose() {
    ifGameView1.value = false;
    ifLevel1End.value = false;
    ifLevel2ChoseView.value = true;
  }

  function LeveOneChose() {
    ifGameView1.value = false;
    ifLose.value = false;
    ifLevel1ChoseView.value = true;
  }

  function BackToStart() {
    ifGameView1.value = false;
    ifLevel1End.value = false;
    ifLose.value = false;
    ifStartView.value = true;
  }

  return {
    ifStartView,
    ifInstructionView,
    ifLevel1ChoseView,
    ifLevel2ChoseView,
    ifGameView1,
    ifGameView2,
    ifLevel1End,
    ifLose,
    StartGame,
    InstructionDalej,
    LevelOneStart,
    LevelTwoChose,
    LeveOneChose,
    BackToStart,
  };
});
