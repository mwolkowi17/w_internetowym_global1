export class metodyPomocnicze {
  constructor() {}

  //funkcja zwracająca jedną liczbę - odpwiednik rzutu kostką, główny mechanizm losujący wynik kostki w scenie

  static rzucaj(): number {
    let wynik;
    wynik = Math.floor(Math.random() * 6);
    return wynik;
  }

  // funkcja sterująca który wynik rzutu kostką wyświetlić z kolekcji wszystkich możliwych widoków
  static pokaz_kostke(a: number, grafika: any) {
    for (let x = 0; x < 6; x++) {
      if (x === a) {
        grafika[x].setAlpha(1);
      } else {
        grafika[x].setAlpha(0);
      }
    }
  }
}
