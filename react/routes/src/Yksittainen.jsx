import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function Yksittainen() {
  let params = useParams();
  let navigate = useNavigate();
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (params.id > 100 || params.id < 1) {
      setError("ID ei ole saatavilla");
    } else {
      setError(null);
    }

    const fetchMessages = async () => {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`,
        );
        const data = await res.json();
        setMessages(data);
        return;
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, [params.id]);

  return (
    <div>
      <h1>Tiedot</h1>
      id: {params.id}
      <br />
      {params.id < 100 && (
        <button
          onClick={() => navigate(`/Yksittainen/${Number(params.id) + 1}`)}
        >
          Seuraava
        </button>
      )}
      {params.id > 1 && (
        <button
          onClick={() => navigate(`/Yksittainen/${Number(params.id) - 1}`)}
        >
          Edellinen
        </button>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <h3>{messages.title}</h3>
        <p>{messages.body}</p>
      </div>
    </div>
  );
}
export default Yksittainen;
