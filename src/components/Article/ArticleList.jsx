import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import ArticleItem from "./ArticleItem";
import components from "./Article.module.css";

export default function ArticleList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
    const fetcher = async () => {
      try {
        setError(null);

        const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");

        if (!res.ok) {
          throw new Error("記事が見つかりませんでした");
        }

        const data = await res.json();
        setPosts(data.posts);

      } catch (err) {
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };
    fetcher();
  }, []);

  if (loading) {
    return (
      <div>
        <p>読み込み中...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>エラー：{error}</p>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div>
        <p>記事が見つかりません</p>
      </div>
    )
  }

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
