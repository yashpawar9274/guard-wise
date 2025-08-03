import { useState } from "react";
import { ArrowLeft, Upload, Brain, AlertTriangle, Shield, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ThreatAnalyzer = () => {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      toast.error("Please enter a message or link to analyze");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const scamProbability = Math.floor(Math.random() * 100);
      const isHighRisk = scamProbability > 70;
      
      setAnalysisResult({
        probability: scamProbability,
        risk: isHighRisk ? "HIGH" : scamProbability > 40 ? "MEDIUM" : "LOW",
        explanation: isHighRisk 
          ? "Message contains urgency tactics and requests for sensitive information"
          : "Message appears to be legitimate with no suspicious patterns detected",
        redFlags: isHighRisk 
          ? ["Urgency tactics", "Requests personal info", "Unknown sender", "Suspicious links"]
          : ["None detected"],
        recommendation: isHighRisk 
          ? "DO NOT respond. Block and report this message."
          : "Appears safe, but always verify sender identity."
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleUploadScreenshot = () => {
    toast.info("Screenshot upload feature coming soon!");
  };

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
        <h1 className="text-xl font-bold text-foreground">AI Threat Analyzer</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Input Section */}
        <Card className="p-4 bg-gradient-card border-border shadow-card">
          <div className="space-y-4">
            <Textarea
              placeholder="Paste message or link"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[120px] resize-none"
            />
            
            <div className="flex space-x-3">
              <Button
                variant="outline"
                onClick={handleUploadScreenshot}
                className="flex-1"
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Screenshot
              </Button>
            </div>
          </div>
        </Card>

        {/* Analyze Button */}
        <Button 
          className="w-full h-12 bg-gradient-primary text-lg font-semibold shadow-button"
          onClick={handleAnalyze}
          disabled={isAnalyzing}
        >
          {isAnalyzing ? (
            <>
              <Brain className="h-5 w-5 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            "Analyze"
          )}
        </Button>

        {/* Analysis Progress */}
        {isAnalyzing && (
          <Card className="p-4 bg-gradient-card border-border">
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium">Scanning...</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </Card>
        )}

        {/* Analysis Results */}
        {analysisResult && (
          <div className="space-y-4 animate-fade-in">
            {/* Risk Level */}
            <Card className={`p-4 ${
              analysisResult.risk === "HIGH" 
                ? "bg-gradient-danger border-destructive/20" 
                : analysisResult.risk === "MEDIUM"
                ? "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20"
                : "bg-gradient-success border-success/20"
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Scam Probability</h3>
                  <p className="text-3xl font-bold mt-1">{analysisResult.probability}%</p>
                </div>
                <Badge 
                  variant={analysisResult.risk === "HIGH" ? "destructive" : "default"}
                  className="text-sm px-3 py-1"
                >
                  {analysisResult.risk} RISK
                </Badge>
              </div>
            </Card>

            {/* AI Explanation */}
            <Card className="p-4 bg-gradient-card border-border">
              <h3 className="font-semibold mb-2 flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                AI Explanation
              </h3>
              <p className="text-sm text-muted-foreground">{analysisResult.explanation}</p>
            </Card>

            {/* Red Flags */}
            <Card className="p-4 bg-gradient-card border-border">
              <h3 className="font-semibold mb-3 flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Key Red Flags
              </h3>
              <div className="space-y-2">
                {analysisResult.redFlags.map((flag: string, index: number) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      flag === "None detected" ? "bg-success" : "bg-destructive"
                    }`} />
                    <span className="text-sm">{flag}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recommendation */}
            <Card className="p-4 bg-gradient-card border-border">
              <h3 className="font-semibold mb-2 flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Recommended Action
              </h3>
              <p className="text-sm text-muted-foreground">{analysisResult.recommendation}</p>
            </Card>

            {/* Action Buttons */}
            {analysisResult.risk === "HIGH" && (
              <div className="grid grid-cols-2 gap-3">
                <Button variant="destructive" className="flex-1">
                  Block & Report
                </Button>
                <Button variant="outline" className="flex-1">
                  Get Help
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreatAnalyzer;