import "./App.css";

import { useState } from "react";
import {
  Container,
  Pagination,
  Typography,
  AppBar,
  Toolbar,
  Stack,
} from "@mui/material";

import SearchBar from "./components/SearchBar";
import CategoryChips from "./components/CategoryChips";
import ArticleList from "./components/ArticleList";
import { useArticles } from "./hooks/useArticles";

import ThemeToggle from "./components/ThemeToggle";
import LoadingAnimation from "./ui/PageLoading-Animation/LoadingAnimation";
import ErrorLoading from "./ui/ErrorLoading";

export default function App() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const { data, isLoading, isError } = useArticles({
    q,
    category,
    page,
    perPage,
  });

  return (
    <Container sx={{ py: 2 }}>
      <AppBar position='sticky'>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* nav title */}
          <Typography variant='h6'>📰 BK's Daily Times</Typography>

          <div className='nav-items'>
            {/* theme button toggler */}
            <ThemeToggle />
            <SearchBar value={q} onChange={setQ} />
          </div>
        </Toolbar>
      </AppBar>

      <header>
        <h1 className='Text-header'>
          <span>Latest </span>
          <span className='Text-header-news'>News</span>
        </h1>
      </header>

      <CategoryChips value={category} onChange={setCategory} />

      {/* If data is still loading, show a loading spinner */}
      {isLoading && <LoadingAnimation />}

      {/*  If there's an error, show an error message */}
      {isError && <ErrorLoading />}

      {/* Article list */}
      {data && <ArticleList articles={data.articles} />}

      {/* PAGINATION */}
      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
        sx={{ my: 2 }}
      >
        {data && (
          <Pagination
            count={Math.ceil(data.totalResults / perPage)}
            page={page}
            onChange={(e, val) => setPage(val)}
            color='primary'
          />
        )}
      </Stack>
    </Container>
  );
}
