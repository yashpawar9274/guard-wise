import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, Smartphone, FileText, MessageSquare, Phone, Link2, Package, Trash2, Ban, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

interface ScanItem {
  name: string;
  icon: React.ReactNode;
  status: "scanning" | "safe" | "warning" | "danger";
  details?: string;
}

const PhoneScanPage = () => {
  const navigate = useNavigate();
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(true);
  const [currentScan, setCurrentScan] = useState("");
  const [showFixSection, setShowFixSection] = useState(false);
  const [scanItems, setScanItems] = useState<ScanItem[]>([
    { name: "Installed Apps", icon: <Package className="w-5 h-5" />, status: "scanning" },
    { name: "SMS Messages", icon: <MessageSquare className="w-5 h-5" />, status: "scanning" },
    { name: "Call History", icon: <Phone className="w-5 h-5" />, status: "scanning" },
    { name: "Documents", icon: <FileText className="w-5 h-5" />, status: "scanning" },
    { name: "Links & URLs", icon: <Link2 className="w-5 h-5" />, status: "scanning" },
    { name: "System Security", icon: <Shield className="w-5 h-5" />, status: "scanning" },
  ]);

  useEffect(() => {
    if (!isScanning) return;

    const scanDuration = 8000; // 8 seconds
    const updateInterval = 100;
    const totalUpdates = scanDuration / updateInterval;
    let currentUpdate = 0;

    const interval = setInterval(() => {
      currentUpdate++;
      const progress = (currentUpdate / totalUpdates) * 100;
      setScanProgress(progress);

      // Update current scan item
      const itemIndex = Math.floor((currentUpdate / totalUpdates) * scanItems.length);
      if (itemIndex < scanItems.length) {
        setCurrentScan(scanItems[itemIndex].name);
      }

      if (currentUpdate >= totalUpdates) {
        clearInterval(interval);
        setIsScanning(false);
        completeScan();
      }
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isScanning]);

  const completeScan = () => {
    // Simulate scan results
    const results: ScanItem[] = [
      { 
        name: "Installed Apps", 
        icon: <Package className="w-5 h-5" />, 
        status: "safe",
        details: "32 apps scanned - All safe"
      },
      { 
        name: "SMS Messages", 
        icon: <MessageSquare className="w-5 h-5" />, 
        status: "warning",
        details: "2 suspicious messages detected"
      },
      { 
        name: "Call History", 
        icon: <Phone className="w-5 h-5" />, 
        status: "danger",
        details: "1 known scam number found"
      },
      { 
        name: "Documents", 
        icon: <FileText className="w-5 h-5" />, 
        status: "safe",
        details: "All documents secure"
      },
      { 
        name: "Links & URLs", 
        icon: <Link2 className="w-5 h-5" />, 
        status: "safe",
        details: "No malicious links found"
      },
      { 
        name: "System Security", 
        icon: <Shield className="w-5 h-5" />, 
        status: "safe",
        details: "System protection active"
      },
    ];
    setScanItems(results);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe": return "text-success";
      case "warning": return "text-warning";
      case "danger": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "safe": return <CheckCircle className="w-5 h-5 text-success" />;
      case "warning": return <AlertTriangle className="w-5 h-5 text-warning" />;
      case "danger": return <AlertTriangle className="w-5 h-5 text-destructive" />;
      default: return null;
    }
  };

  const threatCount = scanItems.filter(item => item.status === "danger" || item.status === "warning").length;

  const handleDeleteSMS = () => {
    toast.success("2 suspicious SMS messages deleted successfully");
    setScanItems(prev => prev.map(item => 
      item.name === "SMS Messages" 
        ? { ...item, status: "safe", details: "All messages are safe" }
        : item
    ));
    setShowFixSection(false);
  };

  const handleBlockNumber = () => {
    toast.success("Scam number +91-9876543210 blocked successfully");
    setScanItems(prev => prev.map(item => 
      item.name === "Call History" 
        ? { ...item, status: "safe", details: "No threats in call history" }
        : item
    ));
    setShowFixSection(false);
  };

  const handleViewDetails = (itemName: string) => {
    if (itemName === "SMS Messages") {
      navigate("/fraud-sms");
    } else if (itemName === "Call History") {
      navigate("/scam-calls");
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">Phone Security Scan</h1>
      </div>

      {/* Scan Progress */}
      {isScanning ? (
        <Card className="p-6 space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Smartphone className="w-20 h-20 text-primary animate-pulse" />
              <Shield className="w-8 h-8 text-primary absolute -bottom-1 -right-1 animate-bounce" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold text-foreground">Scanning Your Device...</h2>
              <p className="text-sm text-muted-foreground">
                Currently scanning: <span className="font-medium text-foreground">{currentScan}</span>
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <Progress value={scanProgress} className="h-3" />
            <p className="text-sm text-center text-muted-foreground">
              {Math.round(scanProgress)}% Complete
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {scanItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center space-x-2 p-2 rounded-lg transition-all ${
                  item.name === currentScan ? "bg-primary/10" : "bg-muted/50"
                }`}
              >
                {item.icon}
                <span className="text-xs text-foreground">{item.name}</span>
              </div>
            ))}
          </div>
        </Card>
      ) : (
        <>
          {/* Scan Summary */}
          <Card className={`p-6 ${
            threatCount > 0 
              ? "bg-gradient-to-br from-destructive/10 to-warning/10 border-destructive/20" 
              : "bg-gradient-success border-success/20"
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">Scan Complete</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {threatCount > 0 
                    ? `${threatCount} issue${threatCount > 1 ? 's' : ''} found that need attention`
                    : "Your device is secure!"}
                </p>
              </div>
              <div className={`text-5xl ${threatCount > 0 ? "text-destructive" : "text-success"}`}>
                {threatCount > 0 ? <AlertTriangle className="w-12 h-12" /> : <Shield className="w-12 h-12" />}
              </div>
            </div>
          </Card>

          {/* Scan Results */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Scan Results</h3>
            {scanItems.map((item, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3 flex-1">
                    <div className={getStatusColor(item.status)}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.details}</p>
                    </div>
                  </div>
                  {getStatusIcon(item.status)}
                </div>
              </Card>
            ))}
          </div>

          {/* Fix Issues Section */}
          {showFixSection && threatCount > 0 && (
            <Card className="p-6 space-y-4 bg-gradient-to-br from-destructive/5 to-warning/5 border-destructive/20">
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Fix Issues</h3>
              </div>

              {scanItems.find(item => item.name === "SMS Messages" && item.status === "warning") && (
                <div className="space-y-3 p-4 bg-background rounded-lg border border-warning/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground flex items-center space-x-2">
                        <MessageSquare className="w-4 h-4 text-warning" />
                        <span>Suspicious SMS Messages</span>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Found 2 messages with potential phishing links
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground space-y-1">
                        <p>• "Congratulations! You won ₹50,000. Click here..."</p>
                        <p>• "Your account will be blocked. Verify now..."</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="flex-1"
                      onClick={handleDeleteSMS}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete Messages
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails("SMS Messages")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              )}

              {scanItems.find(item => item.name === "Call History" && item.status === "danger") && (
                <div className="space-y-3 p-4 bg-background rounded-lg border border-destructive/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-destructive" />
                        <span>Known Scam Number</span>
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Number reported 847 times for fraud
                      </p>
                      <div className="mt-2 text-xs text-muted-foreground">
                        <p className="font-medium">+91-9876543210</p>
                        <p className="text-warning">• Fake bank representative scam</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="flex-1"
                      onClick={handleBlockNumber}
                    >
                      <Ban className="w-4 h-4 mr-2" />
                      Block Number
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleViewDetails("Call History")}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          )}

          {/* Actions */}
          <div className="space-y-3">
            {threatCount > 0 && !showFixSection && (
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90" 
                size="lg"
                onClick={() => setShowFixSection(true)}
              >
                Fix Issues Now
              </Button>
            )}
            {threatCount > 0 && showFixSection && (
              <Button 
                variant="outline"
                className="w-full" 
                size="lg"
                onClick={() => setShowFixSection(false)}
              >
                Hide Fix Options
              </Button>
            )}
            <Button 
              variant="outline" 
              className="w-full" 
              size="lg"
              onClick={() => navigate("/dashboard")}
            >
              Back to Dashboard
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneScanPage;
