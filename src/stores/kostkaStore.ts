import { defineStore } from "pinia";
import { ref } from "vue";

export const useKostkaStore = defineStore("KostkaStore", () => {
  //widoki kostki
  const kolekcja_widokow_kostki = ref([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const isSet1 = ref(kolekcja_widokow_kostki.value[0]);
  const isSet2 = ref(kolekcja_widokow_kostki.value[1]);
  const isSet3 = ref(kolekcja_widokow_kostki.value[2]);
  const isSet4 = ref(kolekcja_widokow_kostki.value[3]);
  const isSet5 = ref(kolekcja_widokow_kostki.value[4]);
  const isSet6 = ref(kolekcja_widokow_kostki.value[5]);

  return {
    kolekcja_widokow_kostki,
    isSet1,
    isSet2,
    isSet3,
    isSet4,
    isSet5,
    isSet6,
  };
});
