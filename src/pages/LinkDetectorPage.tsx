import { useState } from "react";
import { ArrowLeft, Link2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LinkDetectorPage = () => {
  const navigate = useNavigate();
  const [link, setLink] = useState("");

  const handleScanLink = () => {
    if (!link.trim()) {
      toast.error("Please enter a link");
      return;
    }
    toast.info("Scanning link for threats...");
    // Add link scanning logic here
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
        <h1 className="text-xl font-semibold text-foreground">Link Scanner</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Link Input */}
        <div className="space-y-4">
          <Input
            placeholder="Enter link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="h-12 bg-muted/30 border-border"
          />
          
          <Button 
            onClick={handleScanLink}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Search className="h-4 w-4 mr-2" />
            Scan Link
          </Button>
        </div>

        {/* Instructions */}
        <div className="text-center space-y-2">
          <p className="text-foreground">
            Paste a link to check if it's safe. We'll scan it for phishing, malware, and other threats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LinkDetectorPage;