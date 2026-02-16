# Google Keep Clone (React - Create React App)

This project is a simplified Google Keep clone built using React
It allows users to create, edit, archive, delete, search, and color notes.

## 🚀 How to Run the Project

### 1️⃣ Install Dependencies
Open a terminal in the project folder and run:

    npm install

This will install all required dependencies including React and react-scripts.

### 2️⃣ Start the Development Server

    npm start

The app will open automatically in your browser at:

    http://localhost:3000

If it doesn't open automatically, copy and paste the link into your browser.

---

Each component has its own folder containing:
- JSX file
- CSS file

This keeps the project clean and easy to maintain.

---

## ✨ Features Implemented

✔ Create notes  
✔ Edit notes (modal popup)  
✔ Soft delete (Trash view)  
✔ Archive notes (Archive view)  
✔ Search notes  
✔ Change note background color  
✔ Toggle grid/list layout  
✔ Data persistence using localStorage  

---

## 🧠 State Management

- React useState is used to manage notes and UI state.
- State is lifted to App.js to manage shared data between components.
- localStorage is used to store notes using the key:

    keep_notes_v1

---

## 🎨 Styling

- Component-based CSS (each component has its own CSS file)
- Shared UI styles are inside:

    src/components/UI/ui.css

- Google Fonts (Roboto) and Material Symbols are included in public/index.html

---


