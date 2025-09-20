import { Typography, Grid } from "@mui/material";

// skeleton loading using MUI
import { ArticleSkeleton } from "../UI/ArticleSkeleton";

import { ArticleCard } from "./ArticleCard";

export default function ArticleList({ articles, isLoading }) {
  // loading
  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {Array.from(new Array(6)).map((_, idx) => (
          <Grid key={idx}>
            <ArticleSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  // condition to display error message when NO articles
  if (!articles || articles.length === 0) {
    return <Typography className='not-found-err'>No results found.</Typography>;
  }

  return (
    <Grid container spacing={2}>
      {articles.map((a, idx) => (
        <Grid key={idx}>
          <ArticleCard article={a} />
        </Grid>
      ))}
    </Grid>
  );
}
