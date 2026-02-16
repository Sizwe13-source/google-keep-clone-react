import "./ColorPicker.css";

const COLORS = [
  "#ffffff",
  "#f28b82",
  "#fbbc04",
  "#fff475",
  "#ccff90",
  "#a7ffeb",
  "#cbf0f8",
  "#aecbfa",
  "#d7aefb",
];

export default function ColorPicker({ activeColor, onPick }) {
  return (
    <div className="color-picker">
      {COLORS.map((c) => (
        <div
          key={c}
          className={`color-option ${activeColor === c ? "active-ring" : ""}`}
          style={{ backgroundColor: c }}
          title="Set background"
          onClick={(e) => {
            e.stopPropagation();
            onPick(c);
          }}
        />
      ))}
    </div>
  );
}
