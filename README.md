## React + PHP Search API (Material UI, Axios, React Query)

This repository contains a production-ready example of a frontend React app (JavaScript + Vite) using Material UI, Axios, and React Query, with a PHP backend that acts as a secure proxy to an external API (so the API key stays on the server).

It includes: search, categories, pagination, server-side caching hints, basic rate-limit protection suggestions, and deployment notes.

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

## Project structure (single-repo example)

```
/react-php-search-api/
├─ PHP/
│  ├─ public/
│  │  ├─ index.php        # main entry (router)
│  │  ├─ articles.php     # endpoint: /articles
│  │  └─ .htaccess        # if using Apache
│  ├─ src/
│  │  └─ helper.php      # helper utilities (HTTP client, cache)
│  └─ .env               # SERVER_API_KEY=your_api_key_here (NOT committed)
├─ frontend/
│  ├─ package.json
│  ├─ jsconfig.json
│  └─ src/
│     ├─ main.jsx
│     ├─ App.jsx
│     ├─ api.js          # axios client to our PHP backend
│     ├─ hooks/useArticles.js
│     ├─ components/
│     │  ├─ SearchBar.jsx
│     │  ├─ CategoryChips.jsx
│     │  └─ ArticleList.jsx
│     └─ styles.css
└─ README.md
```

---

## Backend (PHP)

Create `backend/public/articles.php` (this file receives requests from the frontend and forwards to the real third-party API while keeping the API key private):

## Deployment notes

- **Backend**: Deploy PHP backend on Apache/Nginx with `.env` holding your API key.
- **Frontend**: Build React (`npm run build` with Vite) and host on Vercel/Netlify/GitHub Pages. Point frontend to backend baseURL.
- **Security**: Never expose API key in frontend. CORS should be restricted in production.
- **Caching**: Replace file cache with Redis/memcached for scaling.

---

## 🙌 Acknowledgements

- [NewsAPI](https://newsapi.org/) for providing the free news data
- [Material UI](https://mui.com/) for UI components
- [TanStack React Query](https://tanstack.com/query) for data fetching & caching

---
