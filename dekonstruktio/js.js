const numerot = [10, 20, 30, 40];

const eka = numerot[0];
const loput = numerot.slice(1);
console.log(loput);

console.log(eka);

const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki",
};
const muutTiedot = {
  kaupunki: opiskelija.kaupunki,
  koulutus: opiskelija.koulutus,
};
const nimi = opiskelija.nimi;
const ika = opiskelija.ika;

console.log(nimi, ika, muutTiedot);

const backend = ["Node.js", "SQL"];
const frontend = ["HTML", "CSS", "JavaScript"];

let fullstack = [...backend, ...frontend, "git"];

console.log(fullstack);

const perusTiedot = {
  nimi: "Anna",
  ika: 19,
};

const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi",
};
const kayttaja = {
  aktiivinen: "true",
  nimi: perusTiedot.nimi,
  ika: perusTiedot.ika,
  kaupunki: lisatiedot.kaupunki,
  harrastus: lisatiedot.harrastus,
};

console.log(kayttaja);
