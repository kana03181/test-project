import components from "./components/Article/Article.module.css";

export default function ArticleDate({ createdAt }) {

  const isDateString = createdAt;
  const date = new Date(isDateString);
  const formatted = date.toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" });

  return (
    <p className={components.date}>
      <time dateTime={formatted}>{formatted}</time>
    </p>
  );
}
