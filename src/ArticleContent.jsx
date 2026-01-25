import components from "./components/Article/Article.module.css";

export default function ArticleContent({ content }) {
  return (
    <div
      className={components.txt}
      dangerouslySetInnerHTML = {{ __html: content }}
    />
  );
}
