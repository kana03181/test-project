import { useState } from 'react'
import posts from "./data/posts";
import ArticleList from "./ArticleList.jsx";
import "./App.css"
import "./styles/global/global.css";
import components from "./components/Header/Header.module.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className={components.header}>
        <div className={components.headerInner}>
          <div className={components.logo}>
            <a className={components.logoLink} href="/">
              <h1>Blog</h1>
            </a>
          </div>
          <nav className={components.nav}>
            <div className={components.navInner}>
              <ul className={components.navList}>
                <li className={components.navListItem}><a href="#">お問い合わせ</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <ArticleList src={posts} />
      </main>
    </>
  )
}

export default App
