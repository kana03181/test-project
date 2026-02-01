import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import components from "./Article.module.css";

export default function ArticleList({ src }) {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
      const data = await res.json();
      setPosts(data.posts);
    }

    fetcher();
  }, []);

  return (
    <div className={components.article}>
        {posts.map(post => (
          <article className={components.contents} key={post.id} >
            <Link to={`/posts/${post.id}`}>
              <ArticleItem post={post} />
            </Link>
          </article>
        ))}
    </div>
  );
}
