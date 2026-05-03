import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Tietojenhaku from "./Tietojenhaku";
import Taulukko from "./Taulukko";
import Yksittainen from "./Yksittainen";
import Lisaatieto from "./lisaatieto";
import Paivitatieto from "./paivitatieto";
import Tiedonpoisto from "./Tiedonpoisto";
import "./app.css";
// Luodaan neljä yksinkertaista komponenttia
function Home() {
  return <h2>Etusivu</h2>;
}

function About() {
  return <h2>Tietoa meistä</h2>;
}

function Contact() {
  return <h2>Ota yhteyttä</h2>;
}

function NotFound() {
  return <h2>Sivua ei löytynyt!</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navigointi linkkeihin */}
        <nav>
          <ul>
            <li>
              <Link to="/">Etusivu</Link>
            </li>

            <li>
              <Link to="/haku">Kaikki Tiedot</Link>
            </li>
            <li>
              <Link to="/Taulukko">Taulukko Tiedot</Link>
            </li>
            <li>
              <Link to="/Yksittainen/1">Yksittäinen Tieto</Link>
            </li>
            <li>
              <Link to="/Lisaatieto">Lisää Tieto</Link>
            </li>
            <li>
              <Link to="/Paivitatieto">Päivitä Tieto</Link>
            </li>
            <li>
              <Link to="/Tiedonpoisto">Poista Tieto</Link>
            </li>
          </ul>
        </nav>

        {/* Reitit */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haku" element={<Tietojenhaku />} />
          <Route path="/Taulukko" element={<Taulukko />} />
          <Route path="/Yksittainen/:id" element={<Yksittainen />} />
          <Route path="/Lisaatieto" element={<Lisaatieto />} />
          <Route path="/Paivitatieto" element={<Paivitatieto />} />
          <Route path="/Tiedonpoisto" element={<Tiedonpoisto />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
