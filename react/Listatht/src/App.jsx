import { useState } from "react";
import Infolista from "./infolista";
import Linkkilista from "./Linkkilista";
import Kayttajakortti from "./kayttajakortti";

function App() {
  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];
  const lista = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <h2>Infolista</h2>
      <Infolista taulukko={lista} />
      <h2>Linkkilista</h2>
      <Linkkilista Lista={linkit} />
      <h2>Käyttäjäkortti</h2>
      <Kayttajakortti nimi="Ville" lista={["React", "JavaScript", "CSS"]} />
    </div>
  );
}

export default App;
