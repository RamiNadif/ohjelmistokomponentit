import Tervehdys from "./tervehdys";

function App() {
  return (
    <div>
      <Tervehdys nimi="Ville" />
      <Opiskelijatiedot />
    </div>
  );
}
function Opiskelijatiedot() {
  const opiskelija = {
    nimi: "Matti Meikäläinen",
    ika: 16,
    kurssi: "Reactin perusteet",
  };
  return (
    <div>
      <h2>Opiskelijan tiedot</h2>
      <p>Nimi: {opiskelija.nimi}</p>
      <p>Ikä: {opiskelija.ika}</p>
      <p>Kurssi: {opiskelija.kurssi}</p>
    </div>
  );
}

export default App;
