import { defineStore } from "pinia";
import { ref } from "vue";

export const useSzanseStore = defineStore("SzanseStore", () => {
  //widoki szans na planszy
  const if_szansa1 = ref(true);
  const if_szansa2 = ref(true);
  const if_szansa3 = ref(true);
  const if_szansa4 = ref(false);

  return {
    if_szansa1,
    if_szansa2,
    if_szansa3,
    if_szansa4,
  };
});
