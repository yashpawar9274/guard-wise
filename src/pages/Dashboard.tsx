import { useState, useEffect } from "react";
import { Shield, Search, Bot, Phone, MessageSquare, CreditCard, Link2, SearchCheck, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProtectionCard from "@/components/ProtectionCard";
import QuickTile from "@/components/QuickTile";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import documentVault3D from "@/assets/document-vault-3d.png";
import protectionScore3D from "@/assets/protection-score-3d.png";
import scamNews3D from "@/assets/scam-news-3d.png";
const Dashboard = () => {
  const navigate = useNavigate();
  const {
    user
  } = useAuth();
  const [scamsBlocked] = useState(3);
  const [userName, setUserName] = useState("User");
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!user) return;
      try {
        const {
          data
        } = await supabase.from('profiles').select('full_name').eq('id', user.id).single();
        if (data?.full_name) {
          setUserName(data.full_name.split(' ')[0]); // Use first name only
        } else if (user.email) {
          // Fallback to email name part
          setUserName(user.email.split('@')[0]);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        if (user.email) {
          setUserName(user.email.split('@')[0]);
        }
      }
    };
    fetchUserProfile();
  }, [user]);
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
  const quickTiles = [{
    title: "Scam Calls",
    icon: <Phone />,
    action: "scam-calls"
  }, {
    title: "Fraud SMS",
    icon: <MessageSquare />,
    action: "fraud-sms"
  }, {
    title: "UPI Frauds",
    icon: <CreditCard />,
    action: "upi-frauds"
  }, {
    title: "Link Detector",
    icon: <Link2 />,
    action: "link-detector"
  }, {
    title: "Scam Lookup",
    icon: <SearchCheck />,
    action: "scam-lookup"
  }];
  return <div className="p-4 space-y-6 animate-fade-in">
      {/* Greeting */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">
          Hey {userName} 👋
        </h1>
        <p className="text-muted-foreground">Stay protected from fraud</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4">
        <ProtectionCard title="Scams Blocked Today" value={scamsBlocked} icon={<Shield />} variant="success" />
        
        <ProtectionCard title="Latest Scan Summary" value="No threats found" subtitle="Last scanned 2 hours ago" icon={<Search />} variant="default" />
        
        <ProtectionCard title="AI Assistant Active" value="Real-time protection" subtitle="Monitoring all activities" icon={<Bot />} variant="default" />
      </div>

      {/* Primary CTA */}
      <Button className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:opacity-90 shadow-button" onClick={handleFullScan}> Full Phone Scan</Button>

      {/* Quick Tiles */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Quick Tiles</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickTiles.map((tile, index) => <QuickTile key={index} title={tile.title} icon={tile.icon} onClick={() => handleQuickAction(tile.action)} className="animate-scale-in" />)}
        </div>
      </div>

      {/* Additional Features */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Additional Features</h2>
        <div className="grid grid-cols-1 gap-3">
          <QuickTile title="Document Vault" icon={<img src={documentVault3D} alt="Document Vault" className="w-8 h-8" />} onClick={() => navigate("/document-vault")} className="animate-scale-in" />
          <QuickTile title="Protection Score" icon={<img src={protectionScore3D} alt="Protection Score" className="w-8 h-8" />} onClick={() => navigate("/protection-score")} className="animate-scale-in" />
          <QuickTile title="Scam News & Alerts" icon={<img src={scamNews3D} alt="Scam News" className="w-8 h-8" />} onClick={() => navigate("/scam-news")} className="animate-scale-in" />
        </div>
      </div>

      {/* Demo Features */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-foreground">Demo Features</h2>
        <div className="space-y-3">
          <Button variant="outline" className="w-full h-12 justify-start" onClick={() => navigate("/incoming-call")}>
            📞 Simulate Incoming Scam Call
          </Button>
        </div>
      </div>

      {/* News & Alerts Section */}
      <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
              <Newspaper className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-foreground">📰 Latest Cyber News</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Stay updated with latest scam alerts & safety tips
              </p>
            </div>
          </div>
          <Button 
            variant="default" 
            size="sm"
            onClick={() => navigate("/scam-news")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View News
          </Button>
        </div>
      </Card>

      {/* Fraud Alert Ticker */}
      <Card className="p-4 bg-gradient-to-r from-warning/10 to-destructive/10 border-warning/20">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-destructive rounded-full animate-pulse"></div>
          <div className="flex-1">
            <h3 className="font-semibold text-sm text-foreground">🚨 Live Alert Ticker</h3>
            <p className="text-xs text-muted-foreground mt-1">
              New UPI QR code scam detected in Mumbai. Verify before scanning!
            </p>
          </div>
        </div>
      </Card>
    </div>;
};
export default Dashboard;