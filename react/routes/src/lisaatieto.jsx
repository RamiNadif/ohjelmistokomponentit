import { useState, useEffect, use } from "react";
import { useParams, useNavigate } from "react-router-dom";

function lisaatieto() {
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleAdd = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      const newMsg = await res.json();
      setMessages((prev) => [...prev, newMsg]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    (
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    ),
    (
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    ),
    (<button onClick={handleAdd}>Lisää tieto</button>)
  );
}
export default lisaatieto;
