import { useState } from "react";
import { ArrowLeft, Search, ThumbsUp, ThumbsDown, AlertTriangle, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ScamLookupPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error("Please enter something to search");
      return;
    }
    setShowResults(true);
    toast.info("Searching our database...");
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-primary' : 'text-muted-foreground'}`}>
        ★
      </span>
    ));
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
        <h1 className="text-xl font-semibold text-foreground">Scam Lookup</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Search Input */}
        <div className="space-y-4">
          <Input
            placeholder="Enter Phone Number, Email, URL, or UPI ID"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-12 bg-muted/30 border-border"
          />
          
          <Button 
            onClick={handleSearch}
            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        {/* Results */}
        {showResults && (
          <div className="space-y-4">
            {/* Risk Level Card */}
            <Card className="p-4 bg-gradient-to-r from-destructive/20 to-destructive/30 border-destructive/20">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Scam Type: Phishing, Last Report: 2 weeks ago
                </p>
                <h2 className="text-xl font-bold text-foreground">Risk Level: High</h2>
                <p className="text-sm text-foreground">
                  This contact has been reported 12 times for scam activity.
                </p>
              </div>
            </Card>

            {/* User Reviews */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">User Reviews</h3>
              
              {/* Review 1 */}
              <Card className="p-4 bg-gradient-card border-border">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>E</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground">Ethan</span>
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(1)}
                    </div>
                    <p className="text-sm text-foreground mb-3">
                      This number sent me a suspicious link claiming to be from my bank. 
                      It was definitely a phishing attempt.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">5</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Review 2 */}
              <Card className="p-4 bg-gradient-card border-border">
                <div className="flex items-start space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user2.jpg" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-foreground">Sophia</span>
                      <span className="text-sm text-muted-foreground">1 month ago</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(2)}
                    </div>
                    <p className="text-sm text-foreground mb-3">
                      I received multiple calls from this number asking for personal information. 
                      It seemed like a scam.
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">2</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsDown className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant="outline" 
                className="h-12 border-warning text-warning hover:bg-warning/10"
                onClick={() => toast.info("Report submitted")}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report
              </Button>
              <Button 
                variant="outline" 
                className="h-12 border-success text-success hover:bg-success/10"
                onClick={() => toast.info("Marked as safe")}
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Mark Safe
              </Button>
            </div>

            <Button 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => toast.info("Number blocked")}
            >
              <Lock className="h-4 w-4 mr-2" />
              Block
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScamLookupPage;