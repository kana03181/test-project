import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleTags from "../../components/Article/ArticleTags";
import ArticleDate from "../../components/Article/ArticleDate";
import ArticleTitle from "../../components/Article/ArticleTitle";
import ArticleContent from "../../components/Article/ArticleContent";
import components from "../../components/Article/Article.module.css";
import postStyles from "./post.module.css";

export default function Post() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetcher = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);

        if (!res.ok) {
          throw new Error("記事の取得に失敗しました");
        }

        const data = await res.json();
        setPost(data.post);

      } catch (err) {
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetcher();
  }, [id]);

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

  if (!post) {
    return (
      <div>
        <p>記事が見つかりません</p>
      </div>
    )
  }

  return (
    <article className={components.article}>
      <div className={postStyles.container}>
        <div className={postStyles.contentHeader}>
          <figure className={postStyles.thumbnail}>
            <img src={post.thumbnailUrl} alt={post.title} />
          </figure>
        </div>
        <div className={postStyles.contentMain}>
          <div className={components.header}>
            <ArticleDate createdAt={post.createdAt} />
            <ArticleTags categories={post.categories} />
          </div>
          <div className={components.main}>
            <ArticleTitle title={post.title} />
            <ArticleContent content={post.content} clamp={false} />
          </div>
        </div>
      </div>
    </article>

  );
}
