import { useEffect } from "react";
import { useState } from "react";

function Title() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Titles</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </ul>
    </div>
  );
}

export default Title;
