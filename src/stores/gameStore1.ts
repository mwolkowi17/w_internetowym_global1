import { defineStore } from "pinia";
import { ref, nextTick } from "vue";
import { metodyPomocnicze } from "../lib/metody-pomocnicze";
import { PawnMaps } from "../lib/pawn-maps";
import { Traps } from "../lib/traps";
import { useKostkaStore } from "./kostkaStore";

// import { useKostkaStore } from "./kostkaStore";

export const useGameStore = defineStore("GameStore", () => {
  const storeKostka = useKostkaStore();
  //pozycja pionka
  const pionek_left = ref(30);
  const pionek_top = ref(330);

  //widoczność kostki
  const ifWidokKostki = ref(false);

  //roboczo tylko dla starej funkcji
  const postac1 = ref("postać");

  //pozycja startowa gracza nr 1
  const krok_gracz1_na_planszy = ref(0);
  //roboczo do edycji pytań
  //const krok_gracz1_na_planszy = ref(1);

  //zdefinowanie pozycji (mapy wszystkich pozycji) gracza nr 1
  const pozycje_pionka_gracza1 = new PawnMaps().pionek_gracza1;

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
  let ruch_lokalny = 0;

  // zmienna robocza używana przy liczbie wyrzuconych oczek
  let x = 0;

  //instancja obieku odpowiadającego za pułapki
  const trap = new Traps();

  // nowa funkcjonalnosc ograniczająca ilośc wpadek - zmienne sterujace - trzeba dodać dodawanie wartosci-liczba wpadek-przy pułapce!!!!
  const liczba_wyrzucona = ref(0);
  const liczba_wpadek = ref(0);

  const wyrzuconaWartoscKostki = ref("Kostka - liczba oczek: " + (x + 1));

  async function kostka_click() {
    if_ruch_gracza.value = true;

    await nextTick();

    if_rzuc_kostka.value = false; //  ukryj przycisk rzuć kostką

    //========================================================================================
    let i = 0; //  set your counter to 0
    //========================================================================================

    console.log("rzut");

    //funkcjonalnosc ograniczająca ilośc wpadek
    let wartoscWyrzuconaFirst = metodyPomocnicze.rzucaj();
    console.log("oczka: " + wartoscWyrzuconaFirst);
    await nextTick();
    //kostkaOczka.value.focus()
    if (liczba_wpadek.value < 2) {
      console.log("ilość wpadek: " + liczba_wpadek.value);
      liczba_wyrzucona.value = wartoscWyrzuconaFirst;
    }
    if (
      liczba_wpadek.value >= 2 &&
      trap.czy_polapka(
        krok_gracz1_na_planszy.value + wartoscWyrzuconaFirst + 1
      ) === true
    ) {
      console.log("zmieniam");

      if (wartoscWyrzuconaFirst < 5) {
        liczba_wyrzucona.value = wartoscWyrzuconaFirst + 1;
      } else {
        liczba_wyrzucona.value = wartoscWyrzuconaFirst - 1;
      }
    } else {
      console.log("ilość wpadek powyżej: " + liczba_wpadek.value);
      liczba_wyrzucona.value = wartoscWyrzuconaFirst;
    }
    //========================================koniec funcjonalnosci ograniczającej liczbę wpadek===============================================

    x = liczba_wyrzucona.value;
    wyrzuconaWartoscKostki.value = "Kostka - liczba oczek: " + (x + 1);
    let wynik_rzutu = x;
    console.log(x);
    for (let i = 0; i < 6; i++) {
      if (i === x) {
        // storeKostka.kolekcja_widokow_kostki[i] = true;
        storeKostka.kolekcja_widokow_kostki[i] = true;
      } else {
        storeKostka.kolekcja_widokow_kostki[i] = false;
      }

      storeKostka.isSet1 = storeKostka.kolekcja_widokow_kostki[0];
      storeKostka.isSet2 = storeKostka.kolekcja_widokow_kostki[1];
      storeKostka.isSet3 = storeKostka.kolekcja_widokow_kostki[2];
      storeKostka.isSet4 = storeKostka.kolekcja_widokow_kostki[3];
      storeKostka.isSet5 = storeKostka.kolekcja_widokow_kostki[4];
      storeKostka.isSet6 = storeKostka.kolekcja_widokow_kostki[5];
    }

    console.log(storeKostka.kolekcja_widokow_kostki);

    //!!============================ruch pionka loop =========================================
    const myLoopPionek = (arg_A: any, arg_B: any, arg_C: any) => {
      //  loop function
      setTimeout(async function () {
        //  call a 1s setTimeout when the loop is called
        //efekt dźwiękowy ruchu pionka
        // sound_ruch = new Audio(
        //   new URL("../assets/ruch_pionka.mp3", import.meta.url).href
        // );
        // await nextTick();
        // sound_ruch.play();

        await nextTick();
        pionek_left.value = arg_B[arg_C.value + i][0];
        pionek_top.value = arg_B[arg_C.value + i][1];

        //robocze ustawienie pozycji pionka na planszy dla celów ustwień bibliotek
        // pionek_left.value = arg_B[1][0]
        // pionek_top.value = arg_B[1][1]

        console.log(arg_C.value);
        console.log(arg_B[arg_C.value + i]);

        if (ruch_lokalny >= 15) {
          console.log("Zwycięstwo!");
          kontrolka_ruch_na_planszy = false;
          console.log("wygrałeś!!!");
          wywolanie_sceny_koncowej();
        }

        ruch_lokalny++;

        i++; //  increment the counter

        if (i <= wynik_rzutu && ruch_lokalny <= 15) {
          myLoopPionek(arg_A, arg_B, arg_C); //  ..  again which will trigger another
        } else {
          dodanie_krokow();
          pulapka_czy_quizz();
          //if_ruch_gracza.value=false;
        }
      }, 1000);
    };

    function dodanie_krokow() {
      krok_gracz1_na_planszy.value =
        krok_gracz1_na_planszy.value + wynik_rzutu + 1;
    }

    if (kontrolka_ruch_na_planszy === true) {
      //  start the loop
      myLoopPionek(postac1, pozycje_pionka_gracza1, krok_gracz1_na_planszy);

      console.log("krok na planszy: " + krok_gracz1_na_planszy.value);
    }

    const pulapka_czy_quizz = async () => {
      console.log("sprawdzam czy pułapka albo quizz");
      console.log(i);
      console.log("wynik rzutu: " + wynik_rzutu);
      console.log("kontrolka ruch na planszy: " + kontrolka_ruch_na_planszy);
      if (kontrolka_ruch_na_planszy === true) {
        console.log("pulapka albo quizz!!!");
        console.log("krok gracza na planszy: " + krok_gracz1_na_planszy.value);
        // sprawdzenie czy gracz wpadł w pułapkę
        console.log(trap.czy_polapka(krok_gracz1_na_planszy.value));
        //  tu w momencie kiedy gracz zanjdzie się na polu pułapka będzie go cofało a jak nie to odpala quizz
        if (trap.czy_polapka(krok_gracz1_na_planszy.value) === true) {
          console.log("wpadka");
          //dodaje wpadki do licznika wpadek
          liczba_wpadek.value = liczba_wpadek.value + 1;
          //  pokazuje planszę pułapki
          setTimeout(async () => {
            if_widok_pulapki.value = true;
            await nextTick();
            // titleTrap.value = metodyPomocnicze.pokazTekstPulapki(
            //   krok_gracz1_na_planszy.value
            // )[0];
            // textTrap.value = metodyPomocnicze.pokazTekstPulapki(
            //   krok_gracz1_na_planszy.value
            // )[1];
            const sound_cofasz = new Audio(
              new URL("../assets/zla_odp.mp3", import.meta.url).href
            );
            sound_cofasz.play();
          }, 1000);
        } else {
          console.log("quiz");
          setTimeout(() => {
            if_widok_quizz1.value = true;
          }, 1000);
        }
      }
    };

    const wywolanie_sceny_koncowej = () => {
      console.log("wywołanie planszy wyboru etapu nr 2");
      // if (ifFocusEmitGlobal.value === false) {
      //   emit("koniec-etap1");
      // }

      // if (ifFocusEmitGlobal.value === true) {
      //   emit("koniec-etap1-focus");
      // }
    };
  }

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
    kostka_click,
  };
});
