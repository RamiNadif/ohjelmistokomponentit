const kori = [];
const lista = document.getElementById("kori");
const summa = document.getElementById("summa");
const autotDiv = document.getElementById("autot");

fetch("/autovarasto")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((auto) => {
      const autot = document.createElement("auto-elementti");

      autot.setAttribute("merkki", auto.merkki);
      autot.setAttribute("malli", auto.malli);
      autot.setAttribute("hinta", auto.hinta);
      autot.setAttribute("valmistaja", auto.valmistaja);

      autotDiv.appendChild(autot);
    });
  });

function renderKori() {
  lista.innerHTML = "";

  const yhteenlasku = {};
  let total = 0;

  kori.forEach((auto) => {
    const key = auto.merkki + " " + auto.malli;

    if (!yhteenlasku[key]) {
      yhteenlasku[key] = {
        maara: 0,
        hinta: auto.hinta,
      };
    }

    yhteenlasku[key].maara += 1;
    total += auto.hinta;
  });

  Object.entries(yhteenlasku).forEach(([nimi, data]) => {
    const li = document.createElement("li");

    li.textContent = `${nimi} (${data.maara} kpl) = ${data.maara * data.hinta} €`;

    lista.appendChild(li);
  });

  summa.textContent = `Yhteensä: ${total} €`;
}
document.addEventListener("lisaa-koriin", (e) => {
  kori.push(e.detail);
  renderKori();
});
