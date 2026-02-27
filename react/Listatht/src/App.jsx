import { useState } from "react";
import Infolista from "./infolista";
import Linkkilista from "./Linkkilista";

function App() {
  const linkit = [
    { id: 1, nimi: "Google", url: "https://google.com" },
    { id: 2, nimi: "React", url: "https://react.dev" },
  ];
  const lista = ["React", "JavaScript", "CSS"];

  return (
    <div>
      <Infolista taulukko={lista} />
      <h2>Linkkilista</h2>
      <Linkkilista Lista={linkit} />
    </div>
  );
}

export default App;
