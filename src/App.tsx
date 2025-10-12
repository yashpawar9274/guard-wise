import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
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
import PhoneScanPage from "./pages/PhoneScanPage";
import ReportScamPage from "./pages/ReportScamPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Onboarding Routes - Only for non-authenticated users */}
      <Route 
        path="/" 
        element={user ? <Navigate to="/dashboard" replace /> : <Index />} 
      />
      <Route 
        path="/onboarding" 
        element={user ? <Navigate to="/dashboard" replace /> : <OnboardingPage />} 
      />
      <Route 
        path="/permissions" 
        element={user ? <Navigate to="/dashboard" replace /> : <PermissionsPage />} 
      />
      <Route 
        path="/setup-complete" 
        element={user ? <Navigate to="/dashboard" replace /> : <SetupCompletePage />} 
      />
      <Route 
        path="/auth" 
        element={user ? <Navigate to="/dashboard" replace /> : <AuthPage />} 
      />
      <Route 
        path="/forgot-password" 
        element={user ? <Navigate to="/dashboard" replace /> : <ForgotPasswordPage />} 
      />
      
      {/* Protected Main App Routes - With Layout */}
      <Route 
        path="/dashboard" 
        element={user ? <Layout><Dashboard /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/history" 
        element={user ? <Layout><HistoryPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/settings" 
        element={user ? <Layout><SettingsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/threat-analyzer" 
        element={user ? <Layout><ThreatAnalyzer /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/app-scanner" 
        element={user ? <Layout><AppScanner /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/incoming-call" 
        element={user ? <Layout><IncomingCall /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/scam-calls" 
        element={user ? <Layout><ScamCallsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/fraud-sms" 
        element={user ? <Layout><FraudSmsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/upi-scam" 
        element={user ? <Layout><UpiScamPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/link-detector" 
        element={user ? <Layout><LinkDetectorPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/scam-lookup" 
        element={user ? <Layout><ScamLookupPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/profile-settings" 
        element={user ? <Layout><ProfileSettingsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/notification-settings" 
        element={user ? <Layout><NotificationSettingsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/emergency-contact" 
        element={user ? <Layout><EmergencyContactPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/about" 
        element={user ? <Layout><AboutPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/support" 
        element={user ? <Layout><SupportPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/terms" 
        element={user ? <Layout><TermsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/document-vault" 
        element={user ? <Layout><DocumentVaultPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/protection-score" 
        element={user ? <Layout><ProtectionScorePage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/scam-news" 
        element={user ? <Layout><ScamNewsPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/phone-scan" 
        element={user ? <Layout><PhoneScanPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route 
        path="/report-scam" 
        element={user ? <Layout><ReportScamPage /></Layout> : <Navigate to="/" replace />} 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
