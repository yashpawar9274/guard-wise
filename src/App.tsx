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
import ScamCallsPage from "./pages/ScamCallsPage";
import FraudSmsPage from "./pages/FraudSmsPage";
import UpiScamPage from "./pages/UpiScamPage";
import LinkDetectorPage from "./pages/LinkDetectorPage";
import ScamLookupPage from "./pages/ScamLookupPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import NotificationSettingsPage from "./pages/NotificationSettingsPage";
import EmergencyContactPage from "./pages/EmergencyContactPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import TermsPage from "./pages/TermsPage";
import DocumentVaultPage from "./pages/DocumentVaultPage";
import ProtectionScorePage from "./pages/ProtectionScorePage";
import ScamNewsPage from "./pages/ScamNewsPage";
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
            <Route path="/scam-calls" element={<ScamCallsPage />} />
            <Route path="/fraud-sms" element={<FraudSmsPage />} />
            <Route path="/upi-scam" element={<UpiScamPage />} />
            <Route path="/link-detector" element={<LinkDetectorPage />} />
            <Route path="/scam-lookup" element={<ScamLookupPage />} />
            <Route path="/profile-settings" element={<ProfileSettingsPage />} />
            <Route path="/notification-settings" element={<NotificationSettingsPage />} />
            <Route path="/emergency-contact" element={<EmergencyContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/document-vault" element={<DocumentVaultPage />} />
            <Route path="/protection-score" element={<ProtectionScorePage />} />
            <Route path="/scam-news" element={<ScamNewsPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
