# 📚 Book Finder App

A responsive web application to search for books by title using the **OpenLibrary API**.  
Built with **React + Tailwind CSS** for a clean and modern UI.

---

## 🌟 Features

- 🔍 Search books by title
- 📖 View results with cover images, title, and author
- 🖼️ Default cover for missing images
- 📱 Responsive design for all screen sizes
- ⏳ Pagination and loading states
- ⚠️ Error handling for failed API requests

---

## 🧠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **API:** OpenLibrary REST API
- **Platform:** CodeSandbox

---

## 🚀 How to Run

1. Open the project on CodeSandbox:  
   👉 [https://codesandbox.io/p/devbox/zwp3yx](https://codesandbox.io/p/devbox/zwp3yx)
2. Wait for the app to load in preview mode.
3. Type a book title in the search bar (e.g., _Harry Potter_).
4. Browse results and navigate using pagination.

---

## 🖼️ Project Structure

📦 src
│
├── api/
│ └── openLibrary.js → Handles API requests
│
├── components/
│ ├── SearchBar.jsx → Input & search controls
│ ├── ResultsList.jsx → Displays search results
│ ├── BookCard.jsx → Single book UI card
│ └── Pagination.jsx → Page navigation
│
├── App.jsx → Main app logic
├── index.css → Tailwind styles + background
└── main.tsx → Entry file

---

## 💬 Developer

👩‍💻 **Laxmi Kuravattigoudra**  
_Full Stack Developer_  
📍 Bangalore, India

---

## 💡 Acknowledgements

Data provided by [OpenLibrary.org](https://openlibrary.org/).  
Project built under mentorship guidance using ChatGPT.
