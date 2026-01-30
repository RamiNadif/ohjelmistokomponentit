"use strict";

(function () {
  const jaatelovarasto = {
    mansikka: {
      nimi: "Mansikka",
      hinta: "2",
      kuva: "Mansikka.png",
    },
    suklaa: {
      nimi: "Suklaa",
      hinta: "3",
      kuva: "Suklaa.png",
    },
    vanilija: {
      nimi: "Vanilija",
      hinta: "1",
      kuva: "Vanilija.png",
    },
  };

  let jaatelovalinta;
  let tulosalue;
  let option;
  let img;
  let tietotemplate;
  let valinnat;

  document.addEventListener("DOMContentLoaded", alusta);

  function alusta() {
    valinnat = document.getElementById("valinnat");

    tulosalue = document.getElementById("tulosalue");
    option = document.createElement("option");
    img = document.createElement("img");

    tietotemplate = document.getElementById("tietotemplate");

    const tulos = Object.keys(jaatelovarasto);
    muodostaValinta(tulos, valinta);
    valinnat.appendChild(jaatelovalinta);
  }

  function muodostaValinta(valinnat, kuuntelia) {
    const arvot = ["", ...valinnat];
    jaatelovalinta = document.createElement("select");
    for (const arvo of arvot) {
      const valinta = option.cloneNode(false);
      valinta.value = arvo;
      valinta.textContent = arvo;
      jaatelovalinta.appendChild(valinta);
    }
    jaatelovalinta.addEventListener("change", kuuntelia);
    jaatelovalinta.value = "";
    return jaatelovalinta;
  }

  function valinta(e) {
    tulosalue.replaceChildren();
    const jaatelonimi = e.target.value;
    if (jaatelonimi.length > 0) {
      const jaatelo = jaatelovarasto[jaatelonimi];
      tulosalue.appendChild(muodostaJaateloDiv(jaatelo));
    }
  }

  function muodostaJaateloDiv(data) {
    const tiedot = tietotemplate.content.cloneNode(true);
    tiedot.querySelector("#nimi").textContent = data.nimi;
    tiedot.querySelector("#hinta").textContent = data.hinta + "$";
    return tiedot;
  }
})();
