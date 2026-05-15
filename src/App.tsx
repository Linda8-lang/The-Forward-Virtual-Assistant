import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DataAnalysisDashboard from "./pages/projects/DataAnalysisDashboard";
import DynamicRowLevelSecurity from "./pages/projects/DynamicRowLevelSecurity";
import VirtualSupportAutomation from "./pages/projects/VirtualSupportAutomation";
import FinancialForecasting from "./pages/projects/FinancialForecasting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/The-Forward-Virtual-Assistant/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/data-analysis-dashboard" element={<DataAnalysisDashboard />} />
          <Route path="/projects/dynamic-row-level-security" element={<DynamicRowLevelSecurity />} />
          <Route path="/projects/virtual-support-automation" element={<VirtualSupportAutomation />} />
          <Route path="/projects/financial-forecasting" element={<FinancialForecasting />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
