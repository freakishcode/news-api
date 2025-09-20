import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// ✅ Import React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ErrorBoundary } from "react-error-boundary";

// ✅ Import ThemeProvider
import ThemeProvider from "./theme/ThemeProvider.jsx";

// ✅ Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      {/* ✅ Wrap App with QueryClientProvider */}
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </StrictMode>
);
