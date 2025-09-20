import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Stack,
} from "@mui/material";

// display date
import { formatDate } from "../hooks/formatDate";

export function ArticleCard({ article }) {
  return (
    <Card
      className='shadow-lg rounded-2xl'
      sx={{
        maxWidth: 265,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // smooth animation
        "&:hover": {
          transform: "scale(1.05)", // scales forward
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)", // optional: stronger shadow
        },
      }}
    >
      {article.urlToImage && (
        <CardMedia
          component='img'
          height='180'
          image={article.urlToImage}
          alt={article.title || "Article image"}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant='h6' gutterBottom noWrap title={article.title}>
          {article.title}
        </Typography>

        <Typography variant='body2' color='text.secondary'>
          {article.description || "No description available"}
        </Typography>

        {/* SOURCE NAME AND DATE */}
        <Stack direction='row' spacing={1} sx={{ mt: 1 }}>
          <Typography variant='caption' color='text.secondary'>
            {article.source?.name || "Unknown source"}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            • {formatDate(article.publishedAt)}
          </Typography>
        </Stack>
      </CardContent>

      <CardActions>
        <Button
          size='small'
          color='primary'
          href={article.url}
          target='_blank'
          rel='noopener noreferrer'
        >
          Read more…
        </Button>
      </CardActions>
    </Card>
  );
}
