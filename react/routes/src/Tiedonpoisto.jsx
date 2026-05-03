import { useState, useEffect } from "react";

function Tiedonpoisto() {
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  const handleDelete = async (id) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      setMessages((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <input
        value={id}
        type="text"
        onChange={(e) => setId(e.target.value)}
        placeholder="Anna ID jonka haluat poistaa"
      />

      <button onClick={() => handleDelete(Number(id))}>Poista tieto</button>

      {messages.map((msg) => (
        <ul key={msg.id}>
          <li>
            <h3>
              {msg.title} ID:{msg.id}
            </h3>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Tiedonpoisto;
