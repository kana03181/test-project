import { Link } from 'react-router-dom';
import ArticleItem from "./ArticleItem";
import components from "./Article.module.css";

export default function ArticleList ({src}) {
  return (
    <div className={components.article}>
        {src.map(post => (
          <article className={components.contents} key={post.id} >
            <Link to={`/posts/${post.id}`}>
              <ArticleItem post={post} />
            </Link>
          </article>
        ))}
    </div>
  );
}
