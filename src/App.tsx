import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import OnboardingPage from "./pages/OnboardingPage";
import PermissionsPage from "./pages/PermissionsPage";
import SetupCompletePage from "./pages/SetupCompletePage";
import AuthPage from "./pages/AuthPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
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
        <Routes>
          {/* Onboarding Routes - No Layout */}
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/permissions" element={<PermissionsPage />} />
          <Route path="/setup-complete" element={<SetupCompletePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          
          {/* Main App Routes - With Layout */}
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/history" element={<Layout><HistoryPage /></Layout>} />
          <Route path="/settings" element={<Layout><SettingsPage /></Layout>} />
          <Route path="/threat-analyzer" element={<Layout><ThreatAnalyzer /></Layout>} />
          <Route path="/app-scanner" element={<Layout><AppScanner /></Layout>} />
          <Route path="/incoming-call" element={<Layout><IncomingCall /></Layout>} />
          <Route path="/scam-calls" element={<Layout><ScamCallsPage /></Layout>} />
          <Route path="/fraud-sms" element={<Layout><FraudSmsPage /></Layout>} />
          <Route path="/upi-scam" element={<Layout><UpiScamPage /></Layout>} />
          <Route path="/link-detector" element={<Layout><LinkDetectorPage /></Layout>} />
          <Route path="/scam-lookup" element={<Layout><ScamLookupPage /></Layout>} />
          <Route path="/profile-settings" element={<Layout><ProfileSettingsPage /></Layout>} />
          <Route path="/notification-settings" element={<Layout><NotificationSettingsPage /></Layout>} />
          <Route path="/emergency-contact" element={<Layout><EmergencyContactPage /></Layout>} />
          <Route path="/about" element={<Layout><AboutPage /></Layout>} />
          <Route path="/support" element={<Layout><SupportPage /></Layout>} />
          <Route path="/terms" element={<Layout><TermsPage /></Layout>} />
          <Route path="/document-vault" element={<Layout><DocumentVaultPage /></Layout>} />
          <Route path="/protection-score" element={<Layout><ProtectionScorePage /></Layout>} />
          <Route path="/scam-news" element={<Layout><ScamNewsPage /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
