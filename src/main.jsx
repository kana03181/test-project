import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import posts from "./data/posts";
import ArticleList from "./ArticleList.jsx";
import Header from "./Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <main>
      <ArticleList src={posts} />
    </main>
  </StrictMode>,
);
