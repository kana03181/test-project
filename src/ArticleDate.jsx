import "./ArticleDate.css";

export default function ArticleDate({ createdAt }) {

  const isDateString = createdAt;
  const date = new Date(isDateString);
  const formatted = date.toLocaleDateString("ja-JP", { year: "numeric", month: "numeric", day: "numeric" });

  return (
    <p className="articleDate">
      <time dateTime={formatted}>{formatted}</time>
    </p>
  );
}
