import { useState } from "react";

function Kayttajatiedotv2() {
  const [id, setId] = useState("");
  const [tiedot, setTiedot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState(null);

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
      const responsepost = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
      );

      if (!response.ok || !responsepost.ok) {
        throw new Error("Käyttäjän hakeminen epäonnistui");
      }

      const data = await response.json();
      const datapost = await responsepost.json();
      setPosts(datapost);

      setTiedot(data);
    } catch (err) {
      setError(err.message);
      setTiedot(null);
      setPosts(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Käyttäjätiedot ja Titlet</h1>

      <input
        type="number"
        placeholder="Anna ID (1-10)"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <button onClick={haeKayttaja}>Hae käyttäjä</button>

      {loading && <p>Ladataan...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {tiedot && posts && !loading && !error && (
        <p>
          Nimi: {tiedot.name} <br />
          Kaupunki: {tiedot.address?.city}
          <h3>Titles</h3>
          <ul>
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
}

export default Kayttajatiedotv2;
