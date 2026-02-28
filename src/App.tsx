import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Create the client for TanStack Query
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* These will now resolve because of our @/ alias and pnpm install --force */}
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Catch-all route for 404 errors. 
             Since we updated NotFound.tsx with glass-card, 
             this will look great! 
          */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;