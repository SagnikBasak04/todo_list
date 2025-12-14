import "./Header.css";

function Header({ onToggleTheme, isDark }) {
  return (
    <header className="header">
      <div>
        <h1>TaskFlow</h1>
        <p>Simple. Focused. Productive.</p>
      </div>

      <button className="theme-btn" onClick={onToggleTheme}>
        {isDark ? "☀ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}

export default Header;
