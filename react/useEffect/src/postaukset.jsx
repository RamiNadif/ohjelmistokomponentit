import { useEffect, useState } from "react";

function Postaukset() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      // BUGI: loading jää päälle ikuisesti

      // BUGI: virhetilannetta ei käsitellä selkeästi

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
        );

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError("virhe tietojen lataukses");
        return console.log("Virhe datan lataukses");
      } finally {
        setLoading(false);
      }

      // loadingia ei koskaan lopeteta
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Postaukset</h2>

      {loading && <p>Ladataan...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <ul>
          {posts.slice(0, 10).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Postaukset;
