import ArticleItems from "./ArticleItems";
import "./ArticleList.css";

export default function ArticleList ({src}) {
  return (
    <div className="article">
      {src.map(post => (
        <article className="articleContents" key={post.id} >
            <ArticleItems post={post}/>
        </article>
      ))}
    </div>
  );
}
