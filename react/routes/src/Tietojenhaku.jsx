import { useState, useEffect } from "react";
function Tietojenhaku() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setMessages(data);
        return;
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);
  return (
    <div>
      {loading && <p>Ladataan...</p>}
      <h1>Tiedot</h1>
      {messages.map((msg) => (
        <div key={msg.id}>
          <h3>{msg.title}</h3>
          <p>{msg.body}</p>
        </div>
      ))}
    </div>
  );
}
export default Tietojenhaku;
