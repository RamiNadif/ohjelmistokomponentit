import { useState, useEffect } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setMessages(data.slice(0, 5));
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, []);
  return (
    <div>
      <h3>Titles</h3>
      <ul>
        {messages.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
