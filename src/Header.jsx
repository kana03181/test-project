import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="headerLogo">
          <a className="headerLogoLink" href="/">
            <h1>Blog</h1>
          </a>
        </div>
        <nav className="headerNav">
          <div className="headerNavInner">
            <ul className="headerNavList">
              <li className="headerNavListItem">お問い合わせ</li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
