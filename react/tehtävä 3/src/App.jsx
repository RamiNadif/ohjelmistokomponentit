import Tervehdys from "./tervehdys";
import Opiskelijatiedot from "./Opiskelijatiedot";

function App() {
  return (
    <div>
      <Tervehdys nimi="Ville" />
      <Opiskelijatiedot nimi="Rami" ika="17" kurssi="ohjelmistokomponentit" />
    </div>
  );
}

export default App;
