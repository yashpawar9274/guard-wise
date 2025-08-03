import { useState } from "react";
import { ArrowLeft, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ScamCallsPage = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleLookup = () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a phone number");
      return;
    }
    toast.info("Checking phone number...");
    // Add lookup logic here
  };

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
        <h1 className="text-xl font-semibold text-foreground">Scam Calls</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Search Input */}
        <div className="space-y-4">
          <Input
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="h-12 bg-muted/30 border-border"
          />
          
          <Button 
            onClick={handleLookup}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Search className="h-4 w-4 mr-2" />
            Check Number
          </Button>
        </div>

        {/* Info Card */}
        <Card className="p-4 bg-gradient-card border-border">
          <div className="flex items-center space-x-3">
            <Phone className="h-5 w-5 text-primary" />
            <div>
              <h3 className="font-medium text-foreground">Real-time Call Protection</h3>
              <p className="text-sm text-muted-foreground">
                We'll automatically detect and warn you about scam calls
              </p>
            </div>
          </div>
        </Card>

        {/* Recent Blocked Calls */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Recent Blocked Calls</h2>
          
          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Blocked 2 hours ago</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive">
                  High Risk
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-gradient-card border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">+1 (555) 987-6543</p>
                <p className="text-sm text-muted-foreground">Blocked yesterday</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-warning/10 text-warning">
                  Medium Risk
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ScamCallsPage;