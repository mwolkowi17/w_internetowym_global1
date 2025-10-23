export class Traps {
  numery_pol_wpadka;
  constructor() {
    this.numery_pol_wpadka = [3, 6, 8, 11, 14];
  }

  //funkcja_która sprawdzi czy ma być wyświetlone zadanie

  czy_polapka(krok_na_planszy: number) {
    if (this.numery_pol_wpadka.includes(krok_na_planszy)) {
      return true;
    } else {
      return false;
    }
  }
}
