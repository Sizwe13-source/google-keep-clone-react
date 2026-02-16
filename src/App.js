import { useEffect, useMemo, useState } from "react";
import "./App.css";
import "./components/UI/ui.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import NoteForm from "./components/NoteForm/NoteForm";
import Notes from "./components/Notes/Notes";
import Modal from "./components/Modal/Modal";

import { loadNotes, saveNotes } from "./utils/storage";

function uid() {
  return String(Date.now()) + "_" + String(Math.floor(Math.random() * 1e6));
}

export default function App() {
  const [notes, setNotes] = useState(() => loadNotes());

  const [query, setQuery] = useState("");
  const [listView, setListView] = useState(false);
  const [view, setView] = useState("notes"); // notes | archive | trash

  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");
  const [activeColor, setActiveColor] = useState("#ffffff");

  const editingNote = useMemo(() => {
    return notes.find((n) => n.id === editingId) || null;
  }, [notes, editingId]);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  useEffect(() => {
    if (!editingNote) return;
    setEditTitle(editingNote.title || "");
    setEditText(editingNote.text || "");
    setActiveColor(editingNote.color || "#ffffff");
  }, [editingNote]);

  function addNote(data) {
    const title = (data.title || "").trim();
    const text = (data.text || "").trim();
    const color = data.color || "#ffffff";
    if (!title && !text) return;

    const note = {
      id: uid(),
      title,
      text,
      color,
      archived: false,
      trashed: false,
      createdAt: new Date().toISOString(),
    };

    setNotes((prev) => [note, ...prev]);
  }

  function updateNote(id, fields) {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...fields } : n)));
  }

  function openEditModal(id) {
    const n = notes.find((x) => x.id === id);
    if (!n) return;
    setEditingId(id);
  }

  function softDelete(id) {
    updateNote(id, { trashed: true });
    if (editingId === id) setEditingId(null);
  }

  function toggleArchive(id) {
    const n = notes.find((x) => x.id === id);
    if (!n) return;
    updateNote(id, { archived: !n.archived });
  }

  function setNoteColor(id, color) {
    updateNote(id, { color });
  }

  function refresh() {
    setNotes(loadNotes());
  }

  function toggleView() {
    setListView((v) => !v);
  }

  function closeEditModalMaybeSave() {
    if (!editingId) return;

    const original = notes.find((n) => n.id === editingId);
    if (!original) {
      setEditingId(null);
      return;
    }

    const changed =
      editTitle !== (original.title || "") ||
      editText !== (original.text || "") ||
      activeColor !== (original.color || "#ffffff");

    if (changed) {
      updateNote(editingId, { title: editTitle, text: editText, color: activeColor });
    }

    setEditingId(null);
  }

  function saveAndCloseModal() {
    if (editingId) {
      updateNote(editingId, { title: editTitle, text: editText, color: activeColor });
    }
    setEditingId(null);
  }

  const visibleNotes = useMemo(() => {
    const q = query.trim().toLowerCase();

    return notes
      .filter((n) => {
        if (view === "notes") return !n.trashed && !n.archived;
        if (view === "archive") return !n.trashed && n.archived;
        if (view === "trash") return n.trashed;
        return true;
      })
      .filter((n) => {
        if (!q) return true;
        const t = (n.title || "").toLowerCase();
        const b = (n.text || "").toLowerCase();
        return t.includes(q) || b.includes(q);
      });
  }, [notes, query, view]);

  useEffect(() => {
    const el = document.querySelector(".notes");
    if (!el) return;
    el.style.gridTemplateColumns = listView ? "1fr" : "repeat(auto-fill, minmax(240px, 1fr))";
  }, [listView, visibleNotes.length]);

  return (
    <>
      <Navbar query={query} setQuery={setQuery} onRefresh={refresh} onToggleView={toggleView} />

      <main>
        <Sidebar view={view} setView={setView} />

        {view === "notes" && <NoteForm onAdd={addNote} />}

        <Notes
          notes={visibleNotes}
          onEdit={openEditModal}
          onSoftDelete={softDelete}
          onToggleArchive={toggleArchive}
          onSetColor={setNoteColor}
        />

        <Modal
          open={!!editingId}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editText={editText}
          setEditText={setEditText}
          onClose={closeEditModalMaybeSave}
          onSave={saveAndCloseModal}
        />
      </main>
    </>
  );
}
