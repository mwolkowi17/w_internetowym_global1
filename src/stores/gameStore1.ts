import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("GameStore", () => {
  //pozycja pionka
  const pionek_left = ref(30);
  const pionek_top = ref(330);

  return {
    pionek_left,
    pionek_top,
  };
});
