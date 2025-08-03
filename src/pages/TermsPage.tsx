import { ArrowLeft, Shield, Eye, Lock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">Terms & Privacy</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Last Updated */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Last updated: December 1, 2024</p>
        </div>

        {/* Quick Summary */}
        <Card className="p-4 bg-primary/10 border-primary/20">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-primary mt-0.5" />
            <div>
              <h3 className="font-medium text-foreground mb-2">Your Privacy Matters</h3>
              <p className="text-sm text-muted-foreground">
                We collect minimal data to protect you from fraud. Your personal information 
                is encrypted and never sold to third parties.
              </p>
            </div>
          </div>
        </Card>

        {/* Key Sections */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Key Policies</h2>
          
          {/* Data Collection */}
          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-start space-x-3">
              <Eye className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Data Collection</h3>
                <p className="text-sm text-muted-foreground">
                  We collect phone numbers, SMS content (when you choose to scan), 
                  and usage patterns to improve fraud detection.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• Phone numbers for scam database checks</li>
                  <li>• SMS content only when you manually scan</li>
                  <li>• App usage analytics for improvements</li>
                  <li>• Crash reports for bug fixes</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Data Security */}
          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-start space-x-3">
              <Lock className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Data Security</h3>
                <p className="text-sm text-muted-foreground">
                  All data is encrypted in transit and at rest using industry-standard 
                  AES-256 encryption.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• End-to-end encryption for sensitive data</li>
                  <li>• Secure cloud storage with AWS</li>
                  <li>• Regular security audits</li>
                  <li>• GDPR and CCPA compliant</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Your Rights */}
          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
              <div className="space-y-2">
                <h3 className="font-medium text-foreground">Your Rights</h3>
                <p className="text-sm text-muted-foreground">
                  You have full control over your data and can request deletion at any time.
                </p>
                <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                  <li>• Request data export</li>
                  <li>• Delete your account and data</li>
                  <li>• Opt out of data collection</li>
                  <li>• Update your preferences</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Service Terms */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Service Terms</h2>
          
          <Card className="p-4 bg-gradient-card border-border">
            <div className="space-y-3">
              <h3 className="font-medium text-foreground">Acceptable Use</h3>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>By using Fraude Guard, you agree to:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Use the service for legitimate fraud protection</li>
                  <li>• Not attempt to reverse engineer the app</li>
                  <li>• Report genuine scams and threats</li>
                  <li>• Respect other users' privacy</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Contact for Privacy */}
        <Card className="p-4 bg-primary/10 border-primary/20">
          <div className="text-center space-y-2">
            <h3 className="font-medium text-foreground">Questions about Privacy?</h3>
            <p className="text-sm text-muted-foreground">
              Contact our privacy team at privacy@fraudeguard.com
            </p>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open('mailto:privacy@fraudeguard.com')}
            >
              Contact Privacy Team
            </Button>
          </div>
        </Card>

        {/* Agreement */}
        <div className="text-center pt-4 pb-8">
          <p className="text-xs text-muted-foreground">
            By continuing to use Fraude Guard, you acknowledge that you have read 
            and agree to these terms and privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;