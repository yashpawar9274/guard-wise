import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ThreatAnalyzer from "./pages/ThreatAnalyzer";
import AppScanner from "./pages/AppScanner";
import HistoryPage from "./pages/HistoryPage";
import SettingsPage from "./pages/SettingsPage";
import IncomingCall from "./pages/IncomingCall";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/threat-analyzer" element={<ThreatAnalyzer />} />
            <Route path="/app-scanner" element={<AppScanner />} />
            <Route path="/incoming-call" element={<IncomingCall />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
