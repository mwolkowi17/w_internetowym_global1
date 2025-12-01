import { defineStore } from "pinia";
import { ref } from "vue";
import { Quests2 } from "../lib/quests-source2";
import { useGameStore2 } from "./gameStore2";

export const useQuizzStore2 = defineStore("QuizzStore2", () => {
  const gamestore = useGameStore2();
  const quizz_assets_data = ref(new Quests2());

  const ifKrzyzyk1Visible = ref(false);
  const ifKrzyzyk2Visible = ref(false);

  const czyOdpowiedz1Poprawna = ref(false);
  const czyOdpowiedz2Poprawna = ref(false);

  const czyOdpowiedz1Zla = ref(false);
  const czyOdpowiedz2Zla = ref(false);

  const ifButtonCheck = ref(false);

  const ifPlanszaDobrze = ref(false);
  const ifPlanszaZle = ref(false);

  const ifWyswietlDobrze = ref(false);
  const ifWyswietlZle = ref(false);

  async function sprawdzOdpwowiedz() {
    console.log("sprawdź odpowiedź");
    ifKrzyzyk1Visible.value = false;
    ifKrzyzyk2Visible.value = false;
    if (ifWyswietlDobrze.value) {
      ifPlanszaDobrze.value = true;
    } else {
      ifPlanszaZle.value = true;
      gamestore.odejmijSzanse();
    }
  }

  return {
    quizz_assets_data,
    ifKrzyzyk1Visible,
    ifKrzyzyk2Visible,
    czyOdpowiedz1Poprawna,
    czyOdpowiedz1Zla,
    czyOdpowiedz2Poprawna,
    czyOdpowiedz2Zla,
    ifButtonCheck,
    ifPlanszaDobrze,
    ifPlanszaZle,
    ifWyswietlDobrze,
    ifWyswietlZle,
    sprawdzOdpwowiedz,
  };
});
