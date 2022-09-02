import { useEffect, useState, useContext } from "react";
import { HttpContext } from "./App";

interface IPost {
  title: string;
}

export const Post = () => {
  const http = useContext(HttpContext);
  const [post, setPost] = useState<IPost | undefined>();

  useEffect(() => {
    (async () => {
      await http
        .get(`https://jsonplaceholder.typicode.com/todos/2`)
        .then((res: any) => setPost(res));
    })();
  }, []);

  return <h1>{post && post.title}</h1>;
};

export default Post;
