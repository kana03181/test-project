import components from "./components/Article/Article.module.css";

export default function ArticleTags({categories}) {
  return (
    <ul className={components.tags}>
      {categories.map( category => (
        <li className={components.tagsCategory} key={category}>
          {category}
        </li>
      ))}
    </ul>
  );
}
