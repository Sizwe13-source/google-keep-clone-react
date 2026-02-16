import "./Modal.css";
import ColorPicker from "../ColorPicker/ColorPicker";

export default function Modal({
  open,
  activeColor,
  setActiveColor,
  editTitle,
  setEditTitle,
  editText,
  setEditText,
  onClose,
  onSave,
}) {
  return (
    <div
      className={`modal ${open ? "open-modal" : ""}`}
      id="modal"
      aria-hidden={open ? "false" : "true"}
      onClick={(e) => {
        if (e.target.id === "modal") onSave();
      }}
    >
      <div className="modal-content">
        <section className="form-container active-form">
          <form
            id="editNoteForm"
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              onSave();
            }}
          >
            <input
              type="text"
              className="note-title"
              id="editTitle"
              placeholder="Title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              autoFocus
            />
            <input
              type="text"
              className="note-text"
              id="editText"
              placeholder="Take a note..."
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />

            <div className="form-actions">
              <div className="icons" id="editIcons" onClick={(e) => e.stopPropagation()}>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">add_alert</span>
                  <span className="tooltip-text">Remind me</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">person_add</span>
                  <span className="tooltip-text">Collaborator</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">palette</span>
                  <span className="tooltip-text">Background options</span>
                </div>

                <ColorPicker activeColor={activeColor} onPick={setActiveColor} />

                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">image</span>
                  <span className="tooltip-text">Add Image</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">archive</span>
                  <span className="tooltip-text">Archive</span>
                </div>
                <div className="tooltip">
                  <span className="material-symbols-outlined hover small-icon">more_vert</span>
                  <span className="tooltip-text">More</span>
                </div>
              </div>

              <button
                className="close-btn"
                id="editCloseBtn"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
              >
                Close
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
