import { useState, useEffect } from "react";
import { PhoneOff, Phone, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const IncomingCall = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(0);
  const [riskLevel, setRiskLevel] = useState<"high" | "medium" | "low" | null>(null);
  const [reportCount] = useState(135);
  const phoneNumber = "415-555-0111";

  useEffect(() => {
    // Simulate scanning process
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          setIsScanning(false);
          setRiskLevel("high");
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleAnswer = () => {
    toast.warning("Call answered despite security warning!");
    navigate("/");
  };

  const handleDecline = () => {
    toast.success("Scam call blocked successfully!");
    navigate("/");
  };

  const getRiskColor = () => {
    switch (riskLevel) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning";
      case "low":
        return "text-success";
      default:
        return "text-muted-foreground";
    }
  };

  const getRiskBadge = () => {
    switch (riskLevel) {
      case "high":
        return <Badge variant="destructive" className="text-sm">HIGH RISK</Badge>;
      case "medium":
        return <Badge variant="secondary" className="text-sm">MEDIUM RISK</Badge>;
      case "low":
        return <Badge variant="default" className="text-sm">LOW RISK</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted flex flex-col">
      {/* Call Info */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 space-y-6">
        {/* Phone Icon */}
        <div className="relative">
          <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg animate-pulse-glow">
            <Phone className="h-16 w-16 text-primary-foreground" />
          </div>
          {riskLevel === "high" && (
            <div className="absolute -top-2 -right-2">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center animate-bounce">
                <AlertTriangle className="h-4 w-4 text-destructive-foreground" />
              </div>
            </div>
          )}
        </div>

        {/* Phone Number */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Incoming Call</h1>
          <p className="text-2xl text-muted-foreground font-mono">{phoneNumber}</p>
        </div>

        {/* Scanning Status */}
        {isScanning ? (
          <Card className="w-full max-w-sm p-4 bg-gradient-card border-border">
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5 text-primary animate-spin" />
                <span className="text-sm font-medium">Scanning...</span>
              </div>
              <Progress value={scanProgress} className="h-2" />
              <p className="text-xs text-center text-muted-foreground">
                Checking against fraud database
              </p>
            </div>
          </Card>
        ) : (
          /* Risk Assessment */
          <Card className={`w-full max-w-sm p-4 ${
            riskLevel === "high" 
              ? "bg-gradient-danger border-destructive/20" 
              : "bg-gradient-card border-border"
          }`}>
            <div className="space-y-3 text-center">
              {getRiskBadge()}
              <div className={`text-lg font-bold ${getRiskColor()}`}>
                {riskLevel === "high" && "⚠️ SCAM DETECTED"}
                {riskLevel === "medium" && "⚠️ SUSPICIOUS"}
                {riskLevel === "low" && "✅ APPEARS SAFE"}
              </div>
              {riskLevel === "high" && (
                <div className="space-y-2">
                  <p className="text-sm text-destructive-foreground">
                    Reported by {reportCount} users
                  </p>
                  <div className="text-xs space-y-1 text-destructive-foreground/80">
                    <p>• Known scam number</p>
                    <p>• Impersonates banks</p>
                    <p>• Requests personal info</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6 space-y-4">
        {!isScanning && riskLevel === "high" && (
          <div className="text-center mb-4">
            <p className="text-sm text-destructive font-medium">
              🚨 Do not answer this call
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-2 gap-6">
          {/* Decline Button */}
          <Button
            variant="destructive"
            size="lg"
            className="h-16 rounded-full shadow-danger"
            onClick={handleDecline}
          >
            <PhoneOff className="h-6 w-6" />
          </Button>

          {/* Answer Button */}
          <Button
            variant={riskLevel === "high" ? "outline" : "default"}
            size="lg"
            className={`h-16 rounded-full ${
              riskLevel === "high" 
                ? "border-success text-success hover:bg-success hover:text-success-foreground" 
                : "bg-success hover:bg-success/90 text-success-foreground shadow-button"
            }`}
            onClick={handleAnswer}
          >
            <Phone className="h-6 w-6" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center text-xs text-muted-foreground">
          <div>Decline</div>
          <div>Answer</div>
        </div>
      </div>
    </div>
  );
};

export default IncomingCall;