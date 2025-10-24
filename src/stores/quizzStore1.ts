import { defineStore } from "pinia";
import { ref } from "vue";
import { Quests } from "../lib/quests-source";

export const useQuizzStore = defineStore("QuizzStore1", () => {
  const quizz_assets_data = ref(new Quests());
  //let nr_zestawu = Math.floor(Math.random() * 2);

  return {
    quizz_assets_data,
  };
});
