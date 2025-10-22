import { defineStore } from "pinia";
import { ref } from "vue";
// import { useKostkaStore } from "./kostkaStore";

// const storeKostka = useKostkaStore()

export const useGameStore = defineStore("GameStore", () => {
  //pozycja pionka
  const pionek_left = ref(30);
  const pionek_top = ref(330);

  //widoczność kostki
  const ifWidokKostki = ref(false);

  //pozycja startowa gracza nr 1
  const krok_gracz1_na_planszy = ref(0);

  //początkowa ilość "szans"
  const ilosc_szans = ref(3);

  //widoczność przycisku Rzuć kostką
  const if_rzuc_kostka = ref(true);

  //informacja o ruchu gracza
  const if_ruch_gracza = ref(false);

  //widoczność planszy pułapka
  const if_widok_pulapki = ref(false);

  //widoczność planszy quizz1
  const if_widok_quizz1 = ref(false);
  //roboczo do edycji pytań
  //const if_widok_quizz1 = ref(true);

  //roboczo do edycji pytań
  //const krok_gracz1_na_planszy = ref(15);

  //flaga true/false pokazująca czy gracz nr 1 nie przeszedł całej planszy, wartość falsce wskazuje zakończenie ruchu na planszy
  let kontrolka_ruch_na_planszy = true;

  // licznik ruchu na planszy - faktyczny ruch pionka
  //let ruch_lokalny = 0;

  // zmienna robocza używana przy liczbie wyrzuconych oczek
  let x = 0;

  // nowa funkcjonalnosc ograniczająca ilośc wpadek - zmienne sterujace - trzeba dodać dodawanie wartosci-liczba wpadek-przy pułapce!!!!
  const liczba_wyrzucona = ref(0);
  const liczba_wpadek = ref(0);

  const wyrzuconaWartoscKostki = ref("Kostka - liczba oczek: " + (x + 1));

  return {
    pionek_left,
    pionek_top,
    ifWidokKostki,
    krok_gracz1_na_planszy,
    ilosc_szans,
    if_rzuc_kostka,
    if_ruch_gracza,
    if_widok_pulapki,
    if_widok_quizz1,
    kontrolka_ruch_na_planszy,
    liczba_wyrzucona,
    liczba_wpadek,
    wyrzuconaWartoscKostki,
  };
});
