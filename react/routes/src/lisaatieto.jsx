import { useState } from "react";

function Lisaatieto() {
  const [messages, setMessages] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleAdd = async () => {
    console.log("klikattu");
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
    </div>
  );
}
export default Lisaatieto;
