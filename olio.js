const opiskelija = { nimi: "Rami", ikä: "17", kurssi: "ohjelmistokomponentit" };

console.log(opiskelija.nimi);
console.log(opiskelija.ikä);
console.log(opiskelija.kurssi);

class Auto {
  constructor(merkki, malli, vuosimalli) {
    this.merkki = merkki;
    this.malli = malli;
    this.vuosimalli = vuosimalli;
  }

  tulostaTiedot() {
    console.log(
      `Merkki: ${this.merkki}, Malli: ${this.malli}, Vuosimalli: ${this.vuosimalli}`,
    );
  }
}
const auto = new Auto("toyota", "corolla", "2000");
auto.tulostaTiedot();

const autokaks = new Auto("Nissan", "skyline", "2001");
autokaks.tulostaTiedot();

const kirjat = [];

const kirja1 = {
  nimi: "harry potter",
  kirjailija: "J.K Rowling",
  vuosi: "1995",
};
const kirja2 = {
  nimi: "Tatu ja patu",
  kirjailija: "Rami Nadif(kirjotin eilen)",
  vuosi: "2027",
};
const kirja3 = {
  nimi: "Lord of the rings",
  kirjailija: "Eikka ruotsalainen",
  vuosi: "2029",
};
kirjat.push(kirja1, kirja2, kirja3);

kirjat.forEach((kirja) => {
  console.log(kirja);
});
