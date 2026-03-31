import { useEffect } from "react";
function Title() {
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/posts");
  }, []);
}
const data = await response.json();
