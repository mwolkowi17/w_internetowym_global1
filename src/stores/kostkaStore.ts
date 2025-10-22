import { defineStore } from "pinia";
import { ref } from "vue";

export const useKostkaStore = defineStore("KostkaStore", () => {
  //widoki kostki
  let kolekcja_widoków_kostki = [true, false, false, false, false, false];

  const isSet1 = ref(kolekcja_widoków_kostki[0]);
  const isSet2 = ref(kolekcja_widoków_kostki[1]);
  const isSet3 = ref(kolekcja_widoków_kostki[2]);
  const isSet4 = ref(kolekcja_widoków_kostki[3]);
  const isSet5 = ref(kolekcja_widoków_kostki[4]);
  const isSet6 = ref(kolekcja_widoków_kostki[5]);

  return {
    isSet1,
    isSet2,
    isSet3,
    isSet4,
    isSet5,
    isSet6,
  };
});
