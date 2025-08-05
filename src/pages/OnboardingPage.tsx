import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Phone, MessageSquare, Link, Monitor } from "lucide-react";

const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex flex-col animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between p-6 bg-background/80 backdrop-blur-sm border-b border-border">
        <h1 className="text-2xl font-bold text-primary">Fraud Protection</h1>
        <button className="p-2 rounded-full hover:bg-accent transition-colors duration-200">
          <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8 space-y-8 animate-scale-in">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Stay Protected from Scams</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Our AI-powered app scans calls, SMS, links, and more to keep you safe from fraud.
          </p>
        </div>

        <div className="space-y-6">
          {/* Real-time Scanning */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-button transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/30 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Real-time Scanning</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call & SMS Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scans calls and SMS in real-time to identify and block potential threats. This feature provides 
                  immediate protection against unwanted calls and messages.
                </p>
              </div>
            </div>
          </div>

          {/* AI Threat Analysis */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-button transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/30 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-orange-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">AI Threat Analysis</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Threat Detection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Uses AI to analyze threats from various sources, including links, apps, and websites. Our AI 
                  algorithms continuously learn and adapt to new threats.
                </p>
              </div>
            </div>
          </div>

          {/* Community Feedback */}
          <div className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-button transition-all duration-300 hover:scale-[1.02] animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500/20 to-pink-600/30 flex items-center justify-center flex-shrink-0">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-pink-600" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Community Feedback</p>
                <h3 className="text-lg font-semibold text-foreground mb-2">Community-Powered Security</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leverages community feedback to identify and report new scams and threats. By sharing insights 
                  and experiences, users contribute to a collective defense against fraud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6 bg-background/80 backdrop-blur-sm border-t border-border animate-slide-in-right">
        <Button 
          onClick={() => navigate('/permissions')}
          className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-button"
          size="lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OnboardingPage;