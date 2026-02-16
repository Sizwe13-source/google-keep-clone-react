import { useState } from "react";
import "./NoteCard.css";
import ColorPicker from "../ColorPicker/ColorPicker";

export default function NoteCard({ note, onEdit, onSoftDelete, onToggleArchive, onSetColor }) {
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div
      className="note"
      style={{ backgroundColor: note.color || "#ffffff" }}
      onClick={() => onEdit(note.id)}
    >
      <span className="material-symbols-outlined check-circle">check_circle</span>
      <div className="title">{note.title || ""}</div>
      <div className="text">{note.text || ""}</div>

      <div className="note-footer" onClick={(e) => e.stopPropagation()}>
        <span
          className="material-symbols-outlined hover small-icon"
          data-action="palette"
          onClick={() => setShowPalette((v) => !v)}
          title="Background options"
        >
          palette
        </span>

        {showPalette && (
          <ColorPicker
            activeColor={note.color || "#ffffff"}
            onPick={(c) => {
              onSetColor(note.id, c);
              setShowPalette(false);
            }}
          />
        )}

        <span
          className="material-symbols-outlined hover small-icon"
          data-action="archive"
          onClick={() => onToggleArchive(note.id)}
          title="Archive"
        >
          archive
        </span>

        <span
          className="material-symbols-outlined hover small-icon"
          data-action="delete"
          onClick={() => onSoftDelete(note.id)}
          title="Delete"
        >
          delete
        </span>

        <span
          className="material-symbols-outlined hover small-icon"
          data-action="edit"
          onClick={() => onEdit(note.id)}
          title="Edit"
        >
          edit
        </span>
      </div>
    </div>
  );
}
