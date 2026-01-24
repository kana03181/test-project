import "./ArticleTitle.css";

export default function ArticleTitle({ title }) {
  return (
    <h3 className="articleTitle">APIで取得した{title}</h3>
  );
}
