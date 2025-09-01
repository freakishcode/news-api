# React Query News App

A responsive **News App** built with **React, Material UI, and React Query**, featuring search, categories, pagination with rows-per-page control, and dark/light mode with persistence. News articles are fetched from [NewsAPI.org](https://newsapi.org/).

---

## ✨ Features

- 📰 Fetches real-time news articles using **NewsAPI**
- 🔍 Search bar for keyword-based queries
- 📂 Category tabs (General, Business, Technology, Sports, etc.)
- 📑 Pagination with **rows per page selector**
- 🌓 Dark/Light mode toggle (saved in **localStorage**)
- 📱 Responsive Material UI design
- 🔗 "Read more…" button linking to full article
- ⚡ Optimized code split into reusable components

---

## 📂 Project Structure

```
src/
 ├── api/
 │   └── newsApi.js        # Axios instance for NewsAPI
 ├── components/
 │   ├── CategoryTabs.jsx  # Category filter tabs
 │   ├── NewsBoard.jsx     # Main news board with pagination
 │   ├── NewsCard.jsx      # Individual article card
 │   └── SearchBar.jsx     # Search input field
 ├── theme/
 │   └── ThemeProvider.jsx # Dark/Light mode with localStorage
 ├── App.js                # Main app entry
 └── main.jsx              # React entry point
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo

```bash
git clone https://github.com/freakishcode/NEWS.git
cd NEWS
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Add your **NewsAPI key**

Replace the `API_KEY` in `src/api/newsApi.js` with your own key from [NewsAPI](https://newsapi.org/).

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

### 4️⃣ Start the dev server

```bash
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

## 📦 Dependencies

- [React](https://reactjs.org/)
- [@tanstack/react-query](https://tanstack.com/query/latest)
- [@mui/material](https://mui.com/)
- [Axios](https://axios-http.com/)

---

## 🚀 Deployment

For production build:

```bash
npm run build
```

Then deploy the contents of `dist/` to **Netlify, Vercel, or any static host**.

---

## 📝 License

This project is licensed under the **MIT License**.

---

## 🙌 Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing the free news data
- [Material UI](https://mui.com/) for UI components
- [TanStack React Query](https://tanstack.com/query) for data fetching & caching

---

🎉 Now you have a full-featured **React News App** with search, categories, pagination, and theme support!
