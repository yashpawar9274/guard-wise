import { useState } from "react";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const FraudSmsPage = () => {
  const navigate = useNavigate();
  const [smsContent, setSmsContent] = useState("");

  const handleScanSms = () => {
    if (!smsContent.trim()) {
      toast.error("Please enter SMS content");
      return;
    }
    toast.info("Scanning SMS for threats...");
    // Add SMS scanning logic here
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
        <h1 className="text-xl font-semibold text-foreground">SMS Scanner</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* SMS Input */}
        <div className="space-y-4">
          <Textarea
            placeholder="Paste or type SMS here"
            value={smsContent}
            onChange={(e) => setSmsContent(e.target.value)}
            className="min-h-[200px] bg-muted/30 border-border resize-none"
          />
          
          <Button 
            onClick={handleScanSms}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            Scan SMS
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-center text-sm text-muted-foreground">
          <p>Paste any suspicious SMS to check if it's a scam.</p>
          <p>We'll analyze it for phishing, malware, and other threats.</p>
        </div>
      </div>
    </div>
  );
};

export default FraudSmsPage;