"use strict";

(function () {
  const jaatelovarasto = {
    mansikka: {
      nimi: "mansikka",
      hinta: 2,
      kuva: "mansikka.jpg",
    },
    suklaa: {
      nimi: "suklaa",
      hinta: 3,
      kuva: "suklaa.jpg",
    },
    vanilija: {
      nimi: "vanilija",
      hinta: 1,
      kuva: "vanilija.jpg",
    },
  };

  let jaatelovalinta;
  let tulosalue;
  let option;
  let img;

  document.addEventListener("DOMContentLoaded", alusta);

  function alusta() {
    jaatelovalinta = document.getElementById("jaatelot");
    tulosalue = document.getElementById("tulosalue");

    img = document.createElement("img");
    option = document.createElement("option");

    let jaatelot = Object.keys(jaatelovarasto);
    muodostaJaateloValinta(jaatelot);
  }

  function muodostaJaateloValinta(jaatelolajit) {
    for (const laji of jaatelolajit) {
      const vaihtoehto = option.cloneNode(false);
      vaihtoehto.value = laji;
      vaihtoehto.textContent = laji;
      jaatelovalinta.appendChild(vaihtoehto);
    }
    jaatelovalinta.addEventListener("change", valitse);
    jaatelovalinta.value = "";
  }

  function valitse() {
    const jaatelo = jaatelovalinta.value;
    if (jaatelo.length > 0) {
      const tulos = jaatelovarasto[jaatelo] || null;
      paivita(tulos);
    } else {
      tyhjennaTulos();
    }
  }

  function tyhjennaTulos() {
    tulosalue.innerHTML = "";
  }

  function paivita(data) {
    tyhjennaTulos();
    if (!data) {
      tulosalue.textContent = "Virhe: jäätelöä ei löytynyt";
    } else if (data.nimi && data.nimi.length > 0) {
      tulosalue.appendChild(muodostaTiedot(data));
    }
  }

  function muodostaTiedot(data) {
    const divi = document.createElement("div");
    const nimi = document.createElement("p");
    nimi.textContent = data.nimi;
    divi.appendChild(nimi);
    const hinta = document.createElement("p");
    hinta.textContent = data.hinta + "€";
    divi.appendChild(hinta);

    return divi;
  }
})();
