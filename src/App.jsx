import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import posts from "./data/posts";
import ArticleList from "./components/Article/ArticleList";
import "./App.css"
import "./styles/global/global.css";
import components from "./components/Header/Header.module.css";
import Post from "./page/post/post";

function App() {
  return (
    <BrowserRouter>
      <header className={components.header}>
        <div className={components.headerInner}>
          <div className={components.logo}>
            <Link to="/" className={components.logoLink}>
              <h1>Blog</h1>
            </Link>
          </div>
          <nav className={components.nav}>
            <div className={components.navInner}>
              <ul className={components.navList}>
                <li className={components.navListItem}><Link to="#">お問い合わせ</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ArticleList src={posts} />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
