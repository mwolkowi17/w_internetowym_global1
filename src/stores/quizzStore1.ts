import { defineStore } from "pinia";
import { ref } from "vue";
import { Quests } from "../lib/quests-source";

export const useQuizzStore = defineStore("QuizzStore1", () => {
  const quizz_assets_data = ref(new Quests());
  //let nr_zestawu = Math.floor(Math.random() * 2);

  const klodka1image = new URL("../assets/klodka1.png", import.meta.url).href;
  const buzka1image = new URL("../assets/buzka1.png", import.meta.url).href;
  const malpa1image = new URL("../assets/malpa1.png", import.meta.url).href;

  const ifKrzyzyk1Visible = ref(false);
  const ifKrzyzyk2Visible = ref(false);

  const pytanieToDisplay = (miejsce: any) => {
    let textToDisplayPytanie;
    if (miejsce === 1) {
      textToDisplayPytanie =
        "<span>" +
        quizz_assets_data.value.pokaz_zadanie_2(miejsce)?.tresc +
        "</span>" +
        "<img  style='display:inline-block; margin-right: 0.1em; margin-left: 0.1em;  margin-top: -0.3em; margin-bottom: -0.3em;' src=" +
        klodka1image +
        ">" +
        "<span>oznacza połączenie:</span>";
    } else if (miejsce === 7) {
      textToDisplayPytanie =
        "<span>" +
        quizz_assets_data.value.pokaz_zadanie_2(miejsce)?.tresc +
        "</span>" +
        "<img style='display:inline-block; margin-right: 0.2em; margin-left: 0.2em; margin-top: -0.3em; margin-bottom: -0.7em;' src=" +
        buzka1image +
        ">" +
        "<span>wyraża:</span>";
    } else if (miejsce === 10) {
      textToDisplayPytanie =
        "<span>" +
        quizz_assets_data.value.pokaz_zadanie_2(miejsce)?.tresc +
        "</span>" +
        "<img  style='display:inline-block; margin-right: 0.2em; margin-left: 0.2em; margin-bottom: -0.4em;' src=" +
        malpa1image +
        ">" +
        "<span>używa się w adresie:</span>";
    } else if (miejsce === 12) {
      textToDisplayPytanie =
        "<span>" +
        quizz_assets_data.value.pokaz_zadanie_2(miejsce)?.tresc +
        "</span>" +
        "<img style='display:inline-block; margin-right: 0.2em; margin-left: 0.2em; margin-bottom: -0.4em;' src=" +
        malpa1image +
        " aria-label='małpa'>" +
        "<span>oznacza:</span>";
    } else {
      textToDisplayPytanie =
        "<span>" +
        quizz_assets_data.value.pokaz_zadanie_2(miejsce)?.tresc +
        "</span>";
    }
    return textToDisplayPytanie;
  };

  return {
    quizz_assets_data,
    ifKrzyzyk1Visible,
    ifKrzyzyk2Visible,
    pytanieToDisplay,
  };
});
