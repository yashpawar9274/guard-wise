import { useState } from "react";
import { Shield, Search, Bot, Phone, MessageSquare, CreditCard, Link2, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProtectionCard from "@/components/ProtectionCard";
import QuickTile from "@/components/QuickTile";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [scamsBlocked] = useState(3);
  const [userName] = useState("Yash");

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "scam-calls":
        navigate("/scam-calls");
        break;
      case "fraud-sms":
        navigate("/fraud-sms");
        break;
      case "upi-frauds":
        navigate("/upi-scam");
        break;
      case "link-detector":
        navigate("/link-detector");
        break;
      case "scam-lookup":
        navigate("/scam-lookup");
        break;
      case "app-scanner":
        navigate("/app-scanner");
        break;
      default:
        toast.info(`Opening ${action}...`);
    }
  };

  const handleFullScan = () => {
    toast.info("Starting full phone scan...");
    // Navigate to scan page
  };

  const quickTiles = [
    { title: "Scam Calls", icon: <Phone />, action: "scam-calls" },
    { title: "Fraud SMS", icon: <MessageSquare />, action: "fraud-sms" },
    { title: "UPI Frauds", icon: <CreditCard />, action: "upi-frauds" },
    { title: "Link Detector", icon: <Link2 />, action: "link-detector" },
    { title: "Scam Lookup", icon: <SearchCheck />, action: "scam-lookup" },
  ];

  return (
    <div className="p-4 space-y-6 animate-fade-in">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          Hey {userName} 👋
        </h1>
        <p className="text-muted-foreground">Stay protected from fraud</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4">
        <ProtectionCard
          title="Scams Blocked Today"
          value={scamsBlocked}
          icon={<Shield />}
          variant="success"
        />
        
        <ProtectionCard
          title="Latest Scan Summary"
          value="No threats found"
          subtitle="Last scanned 2 hours ago"
          icon={<Search />}
          variant="default"
        />
        
        <ProtectionCard
          title="AI Assistant Active"
          value="Real-time protection"
          subtitle="Monitoring all activities"
          icon={<Bot />}
          variant="default"
        />
      </div>

      {/* Primary CTA */}
      <Button 
        className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 shadow-button"
        onClick={handleFullScan}
      >
        📱 Full Phone Scan
      </Button>

      {/* Quick Tiles */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Tiles</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickTiles.map((tile, index) => (
            <QuickTile
              key={index}
              title={tile.title}
              icon={tile.icon}
              onClick={() => handleQuickAction(tile.action)}
              className="animate-scale-in"
            />
          ))}
        </div>
      </div>

      {/* Demo Features */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Demo Features</h2>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full h-12 justify-start"
            onClick={() => navigate("/incoming-call")}
          >
            📞 Simulate Incoming Scam Call
          </Button>
        </div>
      </div>

      {/* Fraud Alert Ticker */}
      <Card className="p-4 bg-gradient-to-r from-warning/10 to-destructive/10 border-warning/20">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-foreground">📰 Fraud Alert Ticker</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Live: New scam call blocked in your area. Stay vigilant!
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;