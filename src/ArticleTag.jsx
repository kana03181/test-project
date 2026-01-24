import "./ArticleTag.css";

export default function ArticleTag({categories}) {
  return (
    <ul className="tags">
      {categories.map( category => (
        <li className="tagsCategory" key={category}>
          {category}
        </li>
      ))}
    </ul>
  );
}
