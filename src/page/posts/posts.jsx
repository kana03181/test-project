import { useParams } from "react-router-dom";
import ArticleTags from "../../components/Article/ArticleTags";
import ArticleDate from "../../components/Article/ArticleDate";
import ArticleTitle from "../../components/Article/ArticleTitle";
import ArticleContent from "../../components/Article/ArticleContent";
import posts from "../../data/posts";
import components from "../../components/Article/Article.module.css";
import postsStyles from "./posts.module.css";

export default function Posts() {
  const { id } = useParams();
  const postId = Number(id);

  const post = posts.find(p => p.id === postId);

  if (!post) {
    return <p>この記事は見つかりません</p>
  }

  return (
    <article className={components.article}>
      <div className={postsStyles.container}>
        <div className={postsStyles.contentHeader}>
          <figure className={postsStyles.thumbnail}>
            <img src={post.thumbnailUrl} alt={post.title} />
          </figure>
        </div>
        <div className={postsStyles.contentMain}>
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
