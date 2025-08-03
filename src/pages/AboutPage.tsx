import { ArrowLeft, Shield, Heart, Globe, Users, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
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
        <h1 className="text-xl font-semibold text-foreground">About Fraude Guard</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* App Info */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Fraude Guard</h2>
            <p className="text-muted-foreground">Version 1.0.0</p>
          </div>
        </div>

        {/* Mission */}
        <Card className="p-4 bg-gradient-card border-border">
          <div className="text-center space-y-3">
            <Heart className="h-8 w-8 mx-auto text-red-500" />
            <h3 className="font-semibold text-foreground">Our Mission</h3>
            <p className="text-sm text-muted-foreground">
              To protect millions of users worldwide from fraud, scams, and cyber threats 
              through AI-powered detection and community-driven intelligence.
            </p>
          </div>
        </Card>

        {/* Features */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
          
          <Card className="p-4 bg-gradient-card border-border space-y-3">
            <div className="flex items-center space-x-3">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Real-time Protection</p>
                <p className="text-sm text-muted-foreground">AI-powered scam detection</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Community Reports</p>
                <p className="text-sm text-muted-foreground">Crowdsourced threat intelligence</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Global Database</p>
                <p className="text-sm text-muted-foreground">Worldwide scam tracking</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Awards */}
        <Card className="p-4 bg-gradient-to-r from-primary/10 to-primary/20 border-primary/20">
          <div className="flex items-center space-x-3">
            <Award className="h-8 w-8 text-primary" />
            <div>
              <h3 className="font-semibold text-foreground">Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Featured in Top Security Apps 2024 • Trusted by 1M+ users
              </p>
            </div>
          </div>
        </Card>

        {/* Team */}
        <Card className="p-4 bg-gradient-card border-border">
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-foreground">Development Team</h3>
            <p className="text-sm text-muted-foreground">
              Built with ❤️ by cybersecurity experts and AI researchers dedicated to 
              making the digital world safer for everyone.
            </p>
          </div>
        </Card>

        {/* Links */}
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full h-12 justify-between"
            onClick={() => window.open('https://fraudeguard.com/privacy', '_blank')}
          >
            Privacy Policy
            <ExternalLink className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-12 justify-between"
            onClick={() => window.open('https://fraudeguard.com/terms', '_blank')}
          >
            Terms of Service
            <ExternalLink className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-12 justify-between"
            onClick={() => window.open('https://fraudeguard.com/licenses', '_blank')}
          >
            Open Source Licenses
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-4 pb-8">
          <p className="text-xs text-muted-foreground">
            © 2024 Fraude Guard. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;