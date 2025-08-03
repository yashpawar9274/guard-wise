import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const ScamNewsPage = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState("India");

  const regions = ["India", "Maharashtra", "Delhi", "Karnataka"];

  const newsItems = [
    {
      title: "UPI Fraud Alert: New Tactics Used by Scammers",
      description: "Scammers are now using fake UPI payment requests to trick users into sending money. Stay vigilant and verify all payment requests before authorizing.",
      color: "bg-teal-100 dark:bg-teal-900/20",
      icon: "💰"
    },
    {
      title: "KYC Update Scam: Beware of Phishing Attempts", 
      description: "Fraudsters are sending fake KYC update requests via SMS and email. Do not click on suspicious links or share personal information.",
      color: "bg-orange-100 dark:bg-orange-900/20",
      icon: "📋"
    },
    {
      title: "Bank Spoofing: Scammers Impersonating Bank Officials",
      description: "Be cautious of calls from unknown numbers claiming to be bank officials. Never share your account details or OTPs over the phone.",
      color: "bg-blue-100 dark:bg-blue-900/20", 
      icon: "🏛️"
    },
    {
      title: "Tech Support Scam: Fake Alerts and Malware",
      description: "Scammers are using fake tech support alerts to trick users into downloading malware. Only trust official app stores and websites.",
      color: "bg-red-100 dark:bg-red-900/20",
      icon: "💻"
    },
    {
      title: "PAN Card Scam: Protect Your Financial Information",
      description: "Fraudsters are using fake PAN card verification requests to steal financial information. Always verify the source before sharing your PAN details.",
      color: "bg-yellow-100 dark:bg-yellow-900/20",
      icon: "💳"
    },
    {
      title: "Fake RBI Alert: Beware of Misleading Communications",
      description: "Be wary of communications claiming to be from the Reserve Bank of India (RBI). Verify any such alerts through official RBI channels.",
      color: "bg-purple-100 dark:bg-purple-900/20",
      icon: "🏦"
    },
    {
      title: "Credit Card Scam: Unauthorized Transactions on the Rise",
      description: "Monitor your credit card statements regularly for any unauthorized transactions. Report any suspicious activity to your bank immediately.",
      color: "bg-green-100 dark:bg-green-900/20",
      icon: "💳"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Scam News & Alerts</h1>
      </div>

      {/* Region Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto">
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
              selectedRegion === region
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {region}
          </button>
        ))}
      </div>

      {/* News Items */}
      <div className="space-y-4">
        {newsItems.map((item, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex">
                <div className="flex-1 p-4">
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <div className={`w-16 flex items-center justify-center ${item.color}`}>
                  <span className="text-2xl">{item.icon}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ScamNewsPage;