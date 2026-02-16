import "./Sidebar.css";

export default function Sidebar({ view, setView }) {
  return (
    <aside className="sidebar" aria-label="Sidebar">
      <div className="sidebar-item" onClick={() => setView("notes")}>
        <span className={`material-symbols-outlined hover ${view === "notes" ? "active" : ""}`}>lightbulb</span>
        <span className="sidebar-text">Notes</span>
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover">notifications</span>
        <span className="sidebar-text">Reminders</span>
      </div>

      <div className="sidebar-item">
        <span className="material-symbols-outlined hover">edit</span>
        <span className="sidebar-text">Edit Labels</span>
      </div>

      <div className="sidebar-item" onClick={() => setView("archive")}>
        <span className={`material-symbols-outlined hover ${view === "archive" ? "active" : ""}`}>archive</span>
        <span className="sidebar-text">Archive</span>
      </div>

      <div className="sidebar-item" onClick={() => setView("trash")}>
        <span className={`material-symbols-outlined hover ${view === "trash" ? "active" : ""}`}>delete</span>
        <span className="sidebar-text">Trash</span>
      </div>
    </aside>
  );
}
