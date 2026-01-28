import ArticleTags from "./ArticleTags";
import ArticleDate from "./ArticleDate";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import components from "./Article.module.css";



export default function ArticleItem({ post }) {
  return (
      <div className={components.inner}>
        <div className={components.header}>
          <ArticleDate createdAt={post.createdAt} />
          <ArticleTags categories={post.categories} />
        </div>
        <div className={components.main}>
          <ArticleTitle title={post.title} />
          <ArticleContent content={post.content} />
        </div>
      </div>
  );
}
