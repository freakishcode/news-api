import "./App.css";

import { useState } from "react";
import {
  Container,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
} from "@mui/material";
import NewsList from "./components/NewsList";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [category, setCategory] = useState("general");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);

  const categories = ["general", "business", "technology", "sports", "health"];

  const handleSearch = (keyword) => {
    setQuery(keyword);
    setPage(1);
    if (keyword) setCategory("");
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setQuery("");
    setPage(1);
  };

  return (
    <>
      <AppBar position='sticky' sx={{ mb: 3 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant='h6'>📰 Daily Times News</Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>

      <Container sx={{ py: 2 }}>
        <header>
          <h1 className='Text-header'>
            Latest <span className='Text-header-news'>News</span>
          </h1>
        </header>

        <SearchBar onSearch={handleSearch} />

        {!query && (
          <Tabs
            value={category}
            onChange={(e, newValue) => handleCategoryChange(newValue)}
            centered
            sx={{ mb: 3 }}
          >
            {categories.map((cat) => (
              <Tab key={cat} label={cat.toUpperCase()} value={cat} />
            ))}
          </Tabs>
        )}

        <NewsList
          category={category}
          query={query}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Container>
    </>
  );
}
