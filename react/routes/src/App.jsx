import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Tietojenhaku from "./Tietojenhaku";
import Taulukko from "./Taulukko";

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
              <Link to="/about">Tietoa</Link>
            </li>
            <li>
              <Link to="/contact">Yhteys</Link>
            </li>
            <li>
              <Link to="/haku">Kaikki Tiedot</Link>
            </li>
            <li>
              <Link to="/Taulukko">Taulukko Tiedot</Link>
            </li>
          </ul>
        </nav>

        {/* Reitit */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haku" element={<Tietojenhaku />} />
          <Route path="/Taulukko" element={<Taulukko />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
