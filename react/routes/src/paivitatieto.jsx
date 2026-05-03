import { useState, useEffect } from "react";

function Paivitatieto() {
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=1")
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);
  const handlePatch = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, body }),
        },
      );
      const updated = await res.json();
      setMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, title: updated.title } : m)),
      );
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
        placeholder="Muokkaa title"
      />

      <button onClick={() => handlePatch(1)}>Muokkaa tieto</button>

      {messages.map((msg) => (
        <ul>
          <li>
            <h3>{msg.title}</h3>
            <p>{msg.body}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}
export default Paivitatieto;
