import { useEffect, useMemo, useRef, useState } from "react";
import "./NoteForm.css";
import ColorPicker from "../ColorPicker/ColorPicker";

export default function NoteForm({ onAdd }) {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [activeColor, setActiveColor] = useState("#ffffff");

  const boxRef = useRef(null);

  const hasContent = useMemo(() => {
    return (title && title.trim()) || (text && text.trim());
  }, [title, text]);

  function reset() {
    setTitle("");
    setText("");
    setActiveColor("#ffffff");
    setExpanded(false);
  }

  function closeAndMaybeSave() {
    if (hasContent) {
      onAdd({ title, text, color: activeColor });
    }
    reset();
  }

  useEffect(() => {
    function onDocClick(e) {
      if (!expanded) return;

      // if you click inside the expanded form, do nothing
      if (boxRef.current && boxRef.current.contains(e.target)) return;

      // otherwise, close (and save if there's content)
      closeAndMaybeSave();
    }

    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, title, text, activeColor]);

  return (
    <>
      <section
        className="form-container"
        id="collapsedForm"
        aria-label="Add note (collapsed)"
        style={{ display: expanded ? "none" : "block" }}
        onClick={(e) => {
          e.stopPropagation();
          setExpanded(true);
        }}
      >
        <form>
          <input type="text" className="note-text" placeholder="Take a note..." readOnly />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-symbols-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-symbols-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
          </div>
        </form>
      </section>

      <section
        className="form-container active-form"
        id="expandedForm"
        aria-label="Add note (expanded)"
        style={{ display: expanded ? "block" : "none" }}
      >
        <form
          id="addNoteForm"
          autoComplete="off"
          ref={boxRef}
          onSubmit={(e) => {
            e.preventDefault();
            if (!hasContent) return;
            onAdd({ title, text, color: activeColor });
            reset();
          }}
        >
          <input
            type="text"
            className="note-title"
            id="addTitle"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />

          <input
            type="text"
            className="note-text"
            id="addText"
            placeholder="Take a note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="form-actions">
            <div className="icons" id="addIcons" onClick={(e) => e.stopPropagation()}>
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
              id="addCloseBtn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeAndMaybeSave();
              }}
            >
              Close
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
