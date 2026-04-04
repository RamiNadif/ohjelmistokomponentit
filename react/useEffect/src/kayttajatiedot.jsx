import { useState } from "react";

function Kayttajatiedot() {
  const [id, setId] = useState("");
  const [tiedot, setTiedot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const haeKayttaja = async () => {
    const userId = Number(id);

    if (!userId || userId < 1 || userId > 10) {
      setError("Anna ID väliltä 1–10");
      setTiedot(null);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );

      if (!response.ok) {
        throw new Error("Käyttäjän hakeminen epäonnistui");
      }

      const data = await response.json();
      setTiedot(data);
    } catch (err) {
      setError(err.message);
      setTiedot(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Käyttäjätiedot</h1>

      <input
        type="number"
        placeholder="Anna ID (1-10)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={haeKayttaja}>Hae käyttäjä</button>

      {loading && <p>Ladataan...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {tiedot && !loading && !error && (
        <p>
          Nimi: {tiedot.name} <br />
          Kaupunki: {tiedot.address?.city}
        </p>
      )}
    </div>
  );
}

export default Kayttajatiedot;
