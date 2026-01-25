import ArticleItem from "./ArticleItem";
import components from "./components/Article/Article.module.css";

export default function ArticleList ({src}) {
  return (
    <div className={components.article}>
      {src.map(post => (
        <article className={components.contents} key={post.id} >
          <ArticleItem post={post}/>
        </article>
      ))}
    </div>
  );
}
