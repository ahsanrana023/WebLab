function Header() {
  return (
    <div style={{ backgroundColor: "purple", height: "60px" }}>
      <nav className="nav">
        <div className="nav-left">
          <a className="brand" href="/" style={{ color: "#fff" }}>
            TASK MANAGER APP
          </a>
        </div>
        <div className="nav-right">
          <div className="tabs">
            <a href="#" style={{ color: "#fff" }}>
              SP19-BSE-085
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
