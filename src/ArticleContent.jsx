import "./ArticleContent.css";

export default function ArticleContent({ content }) {
  return (
    <p
      className="articleContent"
      dangerouslySetInnerHTML = {{ __html: content }}
    />
  );
}
