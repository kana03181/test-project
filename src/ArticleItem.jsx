import ArticleTags from "./ArticleTags";
import ArticleDate from "./ArticleDate";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";
import components from "./components/Article/Article.module.css";


export default function ArticleItem({ post }) {
  return (
    <a href={`https://sample-react-app-ten.vercel.app/posts/${post.id}`}>
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
    </a>
  );
}
