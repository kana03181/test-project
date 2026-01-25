import components from "./components/Article/Article.module.css";

export default function ArticleTitle({ title }) {
  return (
    <h3 className={components.title}>APIで取得した{title}</h3>
  );
}
