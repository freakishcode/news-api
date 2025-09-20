import { Typography, Grid } from "@mui/material";

// skeleton loading using MUI
import { ArticleSkeleton } from "../UI/ArticleSkeleton";

import { ArticleCard } from "./ArticleCard";

import NotFoundArticles from "../ui/NotFoundArticles";

export default function ArticleList({ articles }) {
  // condition to display error message when NO articles
  if (!articles || articles.length === 0) {
    return <NotFoundArticles />;
  }

  return (
    <Grid container spacing={3}>
      {articles.map((a, idx) => (
        <Grid key={idx}>
          <ArticleCard article={a} />
        </Grid>
      ))}
    </Grid>
  );
}
