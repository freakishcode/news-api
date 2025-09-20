import { Box, Typography, Button } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

function NotFoundArticles() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "none",
        outline: "none",
        borderColor: "divider",
        borderRadius: 3,
        background:
          "linear-gradient(135deg, rgba(247, 209, 86, 0.6), rgba(204, 42, 42, 0.9))",
        backdropFilter: "blur(6px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        maxWidth: 600,
        mx: "auto",
        px: 3,
      }}
    >
      <SearchOffIcon sx={{ fontSize: 70, color: "text.disabled", mb: 1 }} />
      <Typography variant='h6' gutterBottom color='text.secondary'>
        No results found
      </Typography>
      <Typography variant='body2' color='text.disabled' sx={{ mb: 3 }}>
        We couldn’t find any articles matching your search. Try adjusting your
        keywords or filters.
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => window.location.reload()}
        sx={{ borderRadius: "20px", textTransform: "none" }}
      >
        🔄 Refresh
      </Button>
    </Box>
  );
}

export default NotFoundArticles;
