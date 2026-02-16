import "./Notes.css";
import NoteCard from "../NoteCard/NoteCard";

export default function Notes({ notes, onEdit, onSoftDelete, onToggleArchive, onSetColor }) {
  return (
    <section className="notes" id="notes" aria-live="polite" aria-label="Notes">
      {notes.map((n) => (
        <NoteCard
          key={n.id}
          note={n}
          onEdit={onEdit}
          onSoftDelete={onSoftDelete}
          onToggleArchive={onToggleArchive}
          onSetColor={onSetColor}
        />
      ))}
    </section>
  );
}
