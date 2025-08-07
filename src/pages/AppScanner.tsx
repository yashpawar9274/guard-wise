import { useState, useEffect } from "react";
import { ArrowLeft, Smartphone, Trash2, CheckCircle, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface AppInfo {
  id: string;
  name: string;
  type: "malicious" | "cloned" | "spyware" | "safe";
  description: string;
  icon: string;
  packageName?: string;
}

const AppScanner = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);
  const [apps, setApps] = useState<AppInfo[]>([]);

  const mockApps: AppInfo[] = [
    {
      id: "1",
      name: "Fake SBI Mobile",
      type: "malicious",
      description: "Malicious Banking App",
      icon: "🏦",
      packageName: "com.sbi.fake.mobile"
    },
    {
      id: "2", 
      name: "WhatsApp Clone",
      type: "cloned",
      description: "Cloned Messaging App",
      icon: "💬",
      packageName: "com.whatsapp.fake"
    },
    {
      id: "3",
      name: "Phone Cleaner Pro",
      type: "spyware", 
      description: "Contains Spyware",
      icon: "🧹",
      packageName: "com.cleaner.spyware"
    },
    {
      id: "4",
      name: "Paytm Fake",
      type: "malicious",
      description: "Fake Payment App",
      icon: "💳",
      packageName: "com.paytm.clone"
    },
    {
      id: "5",
      name: "Instagram Clone", 
      type: "cloned",
      description: "Unofficial Instagram",
      icon: "📸",
      packageName: "com.instagram.unofficial"
    },
    {
      id: "6",
      name: "Data Monitor",
      type: "spyware",
      description: "Tracks Your Data",
      icon: "📊",
      packageName: "com.data.tracker"
    },
    {
      id: "7",
      name: "Google Pay",
      type: "safe",
      description: "Legitimate Payment App",
      icon: "🎯",
      packageName: "com.google.android.apps.nbu.paisa.user"
    },
    {
      id: "8",
      name: "WhatsApp Messenger",
      type: "safe",
      description: "Official Messaging App",
      icon: "💬",
      packageName: "com.whatsapp"
    },
    {
      id: "9",
      name: "Truecaller",
      type: "safe",
      description: "Caller ID & Spam Blocking",
      icon: "📞",
      packageName: "com.truecaller"
    },
    {
      id: "10",
      name: "PhonePe",
      type: "safe",
      description: "Official Payment App",
      icon: "💜",
      packageName: "com.phonepe.app"
    },
    {
      id: "11",
      name: "Fake PhonePe",
      type: "malicious",
      description: "Malicious Payment Clone",
      icon: "⚠️",
      packageName: "com.phonepe.secure"
    },
    {
      id: "12",
      name: "Battery Saver Pro",
      type: "spyware",
      description: "Hidden Data Collection",
      icon: "🔋",
      packageName: "com.battery.spyware"
    }
  ];

  const handleScan = () => {
    setIsScanning(true);
    setApps([]);
    
    setTimeout(() => {
      setApps(mockApps);
      setIsScanning(false);
      const maliciousCount = mockApps.filter(app => app.type === "malicious" || app.type === "spyware" || app.type === "cloned").length;
      toast.success(`Scan completed! Found ${maliciousCount} security issues.`);
    }, 3000);
  };

  const handleUninstall = (appId: string, appName: string) => {
    toast.success(`${appName} removed successfully`);
    setApps(apps.filter(app => app.id !== appId));
  };

  const getAppBadgeVariant = (type: string) => {
    switch (type) {
      case "malicious":
      case "spyware":
        return "destructive";
      case "cloned":
        return "secondary";
      case "safe":
        return "default";
      default:
        return "default";
    }
  };

  const getAppCardStyle = (type: string) => {
    switch (type) {
      case "malicious":
      case "spyware":
        return "border-destructive/20 bg-gradient-to-br from-destructive/5 to-destructive/10";
      case "cloned":
        return "border-warning/20 bg-gradient-to-br from-warning/5 to-warning/10";
      case "safe":
        return "border-success/20 bg-gradient-to-br from-success/5 to-success/10";
      default:
        return "bg-gradient-card border-border";
    }
  };

  useEffect(() => {
    // Auto-scan on component mount
    handleScan();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border p-4 flex items-center space-x-3">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-bold text-foreground">App Scanner</h1>
        <div className="flex-1" />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleScan}
          disabled={isScanning}
        >
          <RefreshCw className={`h-5 w-5 ${isScanning ? 'animate-spin' : ''}`} />
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Scanning Status */}
        {isScanning && (
          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <div>
                <h3 className="font-semibold">Scanning installed apps...</h3>
                <p className="text-sm text-muted-foreground">Checking for malicious, cloned, and spyware apps</p>
              </div>
            </div>
          </Card>
        )}

        {/* Apps List */}
        {apps.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Installed Apps ({apps.length} found)</h2>
            
            {apps.map((app) => (
              <Card 
                key={app.id}
                className={`p-4 shadow-card ${getAppCardStyle(app.type)}`}
              >
                <div className="flex items-center space-x-4">
                  {/* App Icon */}
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
                    {app.icon}
                  </div>
                  
                  {/* App Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-semibold text-foreground">{app.name}</h3>
                      <Badge variant={getAppBadgeVariant(app.type)} className="text-xs">
                        {app.description}
                      </Badge>
                    </div>
                    {app.packageName && (
                      <p className="text-xs text-muted-foreground font-mono">{app.packageName}</p>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex items-center">
                    {app.type === "safe" ? (
                      <CheckCircle className="h-6 w-6 text-success" />
                    ) : (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleUninstall(app.id, app.name)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!isScanning && apps.length === 0 && (
          <Card className="p-8 text-center bg-gradient-card border-border">
            <Smartphone className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">No Apps Scanned Yet</h3>
            <p className="text-muted-foreground mb-4">
              Tap the refresh button to scan your installed apps for security threats
            </p>
            <Button onClick={handleScan} className="bg-gradient-primary">
              Start Scanning
            </Button>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AppScanner;
