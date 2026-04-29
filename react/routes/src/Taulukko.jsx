import { useState, useEffect } from "react";
import "./Taulukko.css";
function Taulukko() {
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
      <div className="titles">
        <p>ID</p>
        <p>Title</p>
        <p>Message</p>{" "}
      </div>
      {messages.map((msg) => (
        <table key={msg.id}>
          <tr>
            <td className="id">{msg.id}</td>
            <th>{msg.title}</th>
            <td>{msg.body}</td>
          </tr>
        </table>
      ))}
    </div>
  );
}
export default Taulukko;
