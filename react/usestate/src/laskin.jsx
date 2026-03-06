import { useState } from "react";
import React from "react";

import Kasvatus from "./kasvatus";
import Vähennys from "./vähennys";
import Nollaus from "./nollaus";
import TuplaKasvatus from "./tupla";
import Arvo from "./arvo";

function Laskuri() {
  const [count, setCount] = useState(0); // Tila paikallisena vain tässä komponentissa
  function vähennä() {
    setCount(count - 1);
  }
  function tuplaa() {
    setCount(count + 2);
  }
  function nollaa() {
    setCount(0);
  }
  function kasvata() {
    setCount(count + 1);
  }

  return (
    <div>
      <Arvo arvo1={count} />
      <Kasvatus kasvata={kasvata} />
      <Vähennys vähentää={vähennä} />
      <Nollaus nollaa={nollaa} />
      <TuplaKasvatus tuplaa={tuplaa} />
    </div>
  );
}

export default Laskuri;
