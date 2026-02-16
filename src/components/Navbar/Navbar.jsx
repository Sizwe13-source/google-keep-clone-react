import "./Navbar.css";

export default function Navbar({ query, setQuery, onRefresh, onToggleView }) {
  return (
    <nav>
      <div className="logo-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover" aria-label="Main menu">menu</span>
          <span className="tooltip-text">Main Menu</span>
        </div>

        <img
          className="gb_Hc gb_Hd"
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          srcSet="
            https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x,
            https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x
          "
          alt="Google Keep"
          style={{ width: 40, height: 40 }}
        />
        <span className="logo-text">Keep</span>
      </div>

      <div className="search-area" role="search">
        <div className="tooltip">
          <span className="material-symbols-outlined hover" aria-hidden="true">search</span>
          <span className="tooltip-text">Search</span>
        </div>
        <input
          id="searchInput"
          type="text"
          placeholder="Search"
          aria-label="Search notes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="settings-area">
        <div className="tooltip">
          <span
            id="refreshBtn"
            className="material-symbols-outlined hover"
            aria-label="Refresh"
            onClick={onRefresh}
          >
            refresh
          </span>
          <span className="tooltip-text">Refresh</span>
        </div>

        <div className="tooltip">
          <span
            id="toggleViewBtn"
            className="material-symbols-outlined hover"
            aria-label="Toggle view"
            onClick={onToggleView}
          >
            view_agenda
          </span>
          <span className="tooltip-text">Toggle View</span>
        </div>

        <div className="tooltip">
          <span className="material-symbols-outlined hover" aria-label="Settings">settings</span>
          <span className="tooltip-text">Settings</span>
        </div>
      </div>

      <div className="profile-actions-area">
        <div className="tooltip">
          <span className="material-symbols-outlined hover" aria-label="Apps">apps</span>
          <span className="tooltip-text">Apps</span>
        </div>
        <div className="tooltip">
          <span className="material-symbols-outlined hover" aria-label="Account">account_circle</span>
          <span className="tooltip-text">Account</span>
        </div>
      </div>
    </nav>
  );
}
