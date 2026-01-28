import components from "./Article.module.css";

export default function ArticleContent({ content, clamp = true }) {
  return (
    <div
      className={`${components.txt} ${!clamp ? components.full: ""}`}
      dangerouslySetInnerHTML = {{ __html: content }}
    />
  );
}
