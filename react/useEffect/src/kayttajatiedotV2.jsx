import { useEffect, useState } from "react";

function Kayttajatiedotv2() {
  const [id, setId] = useState(1);
  const [tiedot, setTiedot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

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
      setPosts([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    haeKayttaja();
  }, [id]);
  return (
    <div>
      <h1>Käyttäjätiedot ja Titlet</h1>
      <button onClick={() => setId(id + 1)}>Seuraava</button>
      <button onClick={() => setId(id - 1)}>Edellinen</button>
      {loading && <p>Ladataan...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {tiedot && posts && !loading && !error && (
        <div>
          <p>
            ID: {tiedot.id} <br />
            Nimi: {tiedot.name} <br />
            Kaupunki: {tiedot.address?.city}
          </p>

          <h3>Titles</h3>
          <ul>
            {posts.slice(0, 10).map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Kayttajatiedotv2;
