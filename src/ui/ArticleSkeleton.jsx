import { Card, CardContent, CardActions, Skeleton } from "@mui/material";

export function ArticleSkeleton() {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Skeleton variant='rectangular' height={180} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Skeleton variant='text' width='80%' height={30} />
        <Skeleton variant='text' width='95%' />
        <Skeleton variant='text' width='90%' />
      </CardContent>
      <CardActions>
        <Skeleton variant='rectangular' width={80} height={36} />
      </CardActions>
    </Card>
  );
}
