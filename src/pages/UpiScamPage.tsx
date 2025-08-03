import { useState } from "react";
import { ArrowLeft, Camera, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UpiScamPage = () => {
  const navigate = useNavigate();
  const [upiId, setUpiId] = useState("");

  const handleScanUpi = () => {
    if (!upiId.trim()) {
      toast.error("Please enter UPI ID");
      return;
    }
    toast.info("Scanning UPI ID for fraud reports...");
    // Add UPI scanning logic here
  };

  const handleOpenCamera = () => {
    toast.info("Opening camera to scan QR code...");
    // Add camera functionality here
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
        <h1 className="text-xl font-semibold text-foreground">UPI Scam Scanner</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* UPI ID Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Scan UPI ID</h2>
          
          <Input
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
            className="h-12 bg-muted/30 border-border"
          />
          
          <Button 
            onClick={handleScanUpi}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <CreditCard className="h-4 w-4 mr-2" />
            Check UPI ID
          </Button>
        </div>

        {/* QR Code Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Scan QR Code</h2>
          
          <Button 
            onClick={handleOpenCamera}
            variant="outline"
            className="w-full h-12 border-border"
          >
            <Camera className="h-4 w-4 mr-2" />
            Open Camera
          </Button>
        </div>

        {/* Safety Tips */}
        <Card className="p-4 bg-gradient-card border-border">
          <div className="space-y-2">
            <h3 className="font-medium text-foreground">UPI Safety Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Never share your UPI PIN with anyone</li>
              <li>• Verify the merchant before making payments</li>
              <li>• Check for secure payment gateways</li>
              <li>• Be wary of QR codes from unknown sources</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default UpiScamPage;