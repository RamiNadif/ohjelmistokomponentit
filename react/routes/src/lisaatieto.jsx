import { useState } from "react";

function Lisaatieto() {
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleAdd = async () => {
    try {
      if (!title || !body) return;
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      const newMsg = await res.json();
      setMessages((prev) => [...prev, newMsg]);
      if (messages.length === 0) {
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Anna title"
      />

      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Anna body"
      />

      <button onClick={handleAdd}>Lisää tieto</button>

      {messages.map((msg) => (
        <ul key={msg.id}>
          <li>
            <h3>{msg.title}</h3>
            <p> {msg.body}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Lisaatieto;
