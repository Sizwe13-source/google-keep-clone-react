# Google Keep Clone (React - Create React App)

This project is a simplified Google Keep clone built using React and Create React App (CRA).
It allows users to create, edit, archive, delete, search, and color notes.
Notes are stored in localStorage so they persist after page refresh.

---

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

## 📁 Project Structure

src/
│
├── components/
│   ├── Navbar/
│   ├── Sidebar/
│   ├── NoteForm/
│   ├── Notes/
│   ├── NoteCard/
│   ├── Modal/
│   ├── ColorPicker/
│   └── UI/ (shared styles like tooltip + hover)
│
├── utils/
│   └── storage.js (handles localStorage logic)
│
├── App.js
└── index.js

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

## 📦 Build for Production

To create a production build:

    npm run build

The optimized build will be inside the `build` folder.

---

## 📝 Notes

This project was built for learning purposes to practice:
- React fundamentals
- useState hook
- Props and component communication
- Lifting state up
- Component folder organization
- JSX best practices

---

If you have any issues running the project, ensure Node.js (v14 or higher) is installed.

Enjoy building 🚀
