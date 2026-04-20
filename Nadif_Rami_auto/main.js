const kori = [];
const lista = document.getElementById("kori");
const summa = document.getElementById("summa");
const autotDiv = document.getElementById("autot");

fetch("/autovarasto")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((auto) => {
      const el = document.createElement("auto-elementti");

      el.setAttribute("merkki", auto.merkki);
      el.setAttribute("malli", auto.malli);
      el.setAttribute("hinta", auto.hinta);

      autotDiv.appendChild(el);
    });
  });

// 🛒 OSTOSKORI
document.addEventListener("lisaa-koriin", (e) => {
  kori.push(e.detail);

  lista.innerHTML = "";
  let total = 0;

  kori.forEach((auto) => {
    const li = document.createElement("li");
    li.textContent = auto.merkki + " " + auto.malli;
    lista.appendChild(li);
    total += auto.hinta;
  });

  summa.textContent = "Yhteensä: " + total + " €";
});
