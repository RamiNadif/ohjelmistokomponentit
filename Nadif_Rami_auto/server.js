import express from "express";

const app = express();
const port = 3000;

const autovarasto = [
  {
    autonumero: 4,
    hinta: 300000,
    merkki: "Ajokki",
    malli: "gold",
    valmistaja: "Formel I",
  },
  {
    autonumero: 3,
    hinta: 36000,
    merkki: "Kilpuri",
    malli: "silver",
    valmistaja: "Li Nux cars",
  },
  {
    autonumero: 2,
    hinta: 300000,
    merkki: "Kaara",
    malli: "GT",
    valmistaja: "Electric cars",
  },
];

app.get("/autovarasto", (req, res) => {
  res.json(autovarasto);
});

// serve frontend
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server running http://localhost:" + port);
});
