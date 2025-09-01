import {
  Box,
  Grid,
  CircularProgress,
  Typography,
  Pagination,
  Stack,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import NewsCard from "./NewsCard";
import { useNews } from "../hooks/useNews";

export default function NewsList({
  category,
  query,
  page,
  setPage,
  pageSize,
  setPageSize,
}) {
  const { data, isLoading, isError } = useNews(category, query, page, pageSize);

  // If data is still loading, show a loading spinner
  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // full page height
        }}
      >
        <CircularProgress />
      </Box>
    );

  // If there's an error, show an error message
  if (isError)
    return <Typography color='error'>Failed to load news.</Typography>;
  if (!data?.articles?.length) return <Typography>No news found.</Typography>;

  const totalPages = Math.ceil(data.totalResults / pageSize);

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {data.articles.map((article, index) => (
          <Grid key={index}>
            <NewsCard article={article} />
          </Grid>
        ))}
      </Grid>

      <Stack
        direction='row'
        justifyContent='center'
        alignItems='center'
        spacing={3}
        sx={{ my: 2 }}
      >
        <Pagination
          count={totalPages > 10 ? 10 : totalPages} // NewsAPI caps results
          page={page}
          onChange={(e, value) => setPage(value)}
          color='primary'
        />

        <FormControl size='small' sx={{ minWidth: 120 }}>
          <InputLabel id='rows-per-page-label'>Rows per page</InputLabel>
          <Select
            labelId='rows-per-page-label'
            value={pageSize}
            label='Rows per page'
            onChange={(e) => {
              setPageSize(e.target.value);
              setPage(1); // reset page when pageSize changes
            }}
          >
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={24}>24</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
