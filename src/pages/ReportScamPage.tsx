import { useState } from "react";
import { ArrowLeft, AlertTriangle, Phone, MessageSquare, Link2, CreditCard, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ReportScamPage = () => {
  const navigate = useNavigate();
  const [scamType, setScamType] = useState("call");
  const [scammerInfo, setScammerInfo] = useState("");
  const [description, setDescription] = useState("");
  const [evidence, setEvidence] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!scammerInfo.trim() || !description.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate report submission
    toast.success("Report submitted successfully! We'll investigate this.");
    
    // Reset form
    setScammerInfo("");
    setDescription("");
    setEvidence(null);
    
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const scamTypes = [
    { value: "call", label: "Scam Call", icon: Phone },
    { value: "sms", label: "Fraud SMS", icon: MessageSquare },
    { value: "link", label: "Malicious Link", icon: Link2 },
    { value: "upi", label: "UPI Scam", icon: CreditCard },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">Report Scam</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Alert Banner */}
        <Card className="p-4 bg-gradient-to-r from-destructive/10 to-warning/10 border-warning/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
            <div>
              <h3 className="font-semibold text-sm text-foreground">Help Stop Scammers</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Your report helps protect others from falling victim to the same scam.
              </p>
            </div>
          </div>
        </Card>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Scam Type Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Type of Scam</Label>
            <RadioGroup value={scamType} onValueChange={setScamType}>
              <div className="grid grid-cols-2 gap-3">
                {scamTypes.map((type) => (
                  <Card
                    key={type.value}
                    className={`p-4 cursor-pointer transition-all ${
                      scamType === type.value
                        ? "bg-primary/10 border-primary"
                        : "hover:bg-muted/50"
                    }`}
                    onClick={() => setScamType(type.value)}
                  >
                    <RadioGroupItem value={type.value} className="sr-only" />
                    <div className="flex flex-col items-center space-y-2">
                      <type.icon className={`h-6 w-6 ${
                        scamType === type.value ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <span className={`text-sm font-medium ${
                        scamType === type.value ? "text-primary" : "text-foreground"
                      }`}>
                        {type.label}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </RadioGroup>
          </div>

          {/* Scammer Information */}
          <div className="space-y-2">
            <Label htmlFor="scammer-info" className="text-base font-semibold">
              {scamType === "call" ? "Phone Number" : 
               scamType === "sms" ? "Phone Number" :
               scamType === "link" ? "Malicious Link/URL" :
               "UPI ID / Phone Number"}
            </Label>
            <Input
              id="scammer-info"
              placeholder={scamType === "call" ? "Enter scammer's phone number" : 
                          scamType === "sms" ? "Enter sender's phone number" :
                          scamType === "link" ? "Enter suspicious link" :
                          "Enter UPI ID or phone number"}
              value={scammerInfo}
              onChange={(e) => setScammerInfo(e.target.value)}
              required
              className="h-12"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-base font-semibold">
              What happened?
            </Label>
            <Textarea
              id="description"
              placeholder="Describe the scam incident in detail. Include what they said, what they asked for, or any suspicious behavior..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={6}
              className="resize-none"
            />
          </div>

          {/* Evidence Upload */}
          <div className="space-y-2">
            <Label htmlFor="evidence" className="text-base font-semibold">
              Evidence (Optional)
            </Label>
            <Card className="p-4 border-dashed">
              <label
                htmlFor="evidence"
                className="flex flex-col items-center justify-center space-y-2 cursor-pointer"
              >
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground text-center">
                  {evidence ? evidence.name : "Upload screenshots or recordings"}
                </p>
                <p className="text-xs text-muted-foreground">
                  PNG, JPG, MP3, MP4 (Max 10MB)
                </p>
              </label>
              <input
                id="evidence"
                type="file"
                accept="image/*,audio/*,video/*"
                onChange={(e) => setEvidence(e.target.files?.[0] || null)}
                className="hidden"
              />
            </Card>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full h-12 text-lg font-semibold bg-gradient-primary hover:opacity-90"
          >
            Submit Report
          </Button>
        </form>

        {/* Info Card */}
        <Card className="p-4 bg-muted/30">
          <h3 className="font-semibold text-sm text-foreground mb-2">
            What happens next?
          </h3>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li>• Your report is reviewed by our fraud detection team</li>
            <li>• Scammer details are added to our database</li>
            <li>• Other users are warned about this threat</li>
            <li>• Authorities may be notified for severe cases</li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default ReportScamPage;
