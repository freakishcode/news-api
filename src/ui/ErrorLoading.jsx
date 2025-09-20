import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

function ErrorLoading() {
  return (
    <div>
      {" "}
      <Stack
        spacing={2}
        alignItems='center'
        justifyContent='center'
        sx={{
          py: 2,
          maxWidth: 750,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Alert
          severity='error'
          variant='outlined'
          icon={<ErrorOutlineIcon fontSize='inherit' />}
          sx={{
            borderRadius: 2,
            boxShadow: "0 4px 14px rgba(255,0,0,0.08)",
            background:
              "linear-gradient(135deg, rgba(173, 57, 57, 0.7), rgba(184, 9, 9, 0.95))",
          }}
        >
          <AlertTitle>Error loading articles</AlertTitle>
          Something went wrong while fetching the news. Please try again.
        </Alert>

        <Button
          variant='contained'
          color='error'
          onClick={() => window.location.reload()}
          sx={{ borderRadius: "15px", textTransform: "none" }}
        >
          🔄 Retry
        </Button>
      </Stack>
    </div>
  );
}

export default ErrorLoading;
