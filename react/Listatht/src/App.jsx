import { useState } from "react";
import Infolista from "./infolista";

function App() {
  const lista = ["React", "JavaScript", "CSS"];
  return <Infolista taulukko={lista} />;
}

export default App;
