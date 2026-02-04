import { BrowserRouter, Routes, Route} from "react-router-dom";
import ArticleList from "./components/Article/ArticleList";
import Header from "./components/Header/Header";
import "./App.css"
import "./styles/global/global.css";
import Post from "./page/post/post";
import Contact from "./page/contact/contact";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
