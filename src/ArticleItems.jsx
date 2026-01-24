import ArticleTag from "./ArticleTag";
import ArticleDate from "./ArticleDate";
import ArticleTitle from "./ArticleTitle";
import ArticleContent from "./ArticleContent";

export default function ArticleItems({ post }) {
  return (
    <a href={`https://sample-react-app-ten.vercel.app/posts/${post.id}`}>
      <div className="articleInner">
        <div className="articleHeader">
          <ArticleDate createdAt={post.createdAt} />
          <ArticleTag categories={post.categories} />
        </div>
        <div className="articleMain">
          <ArticleTitle title={post.title} />
          <ArticleContent content={post.content} />
        </div>
      </div>
    </a>
  );
}
