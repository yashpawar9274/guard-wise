import { ArrowLeft, AlertTriangle, Shield, TrendingUp, Clock, ExternalLink, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const ScamNewsPage = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState("India");
  const [techNews, setTechNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const regions = ["India", "Maharashtra", "Delhi", "Karnataka", "Global"];

  // Live scammer alerts with timestamps
  const liveAlerts = [
    {
      id: 1,
      title: "🚨 HIGH ALERT: New UPI QR Code Scam Detected",
      description: "Scammers are creating fake UPI QR codes that redirect to malicious payment links. Always verify merchant details before scanning.",
      timestamp: "2 mins ago",
      severity: "high",
      region: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      title: "⚠️ WhatsApp Business Verification Scam",
      description: "Fraudsters impersonating WhatsApp support asking for verification codes. WhatsApp never asks for codes via third parties.",
      timestamp: "15 mins ago",
      severity: "medium",
      region: "Delhi NCR"
    },
    {
      id: 3,
      title: "🔔 Cryptocurrency Investment Fraud Alert",
      description: "Fake crypto investment platforms promising 500% returns in 30 days. Remember: if it sounds too good to be true, it probably is.",
      timestamp: "1 hour ago",
      severity: "high",
      region: "Bangalore, Karnataka"
    }
  ];

  // Safety tips and guidance
  const safetyTips = [
    {
      category: "Digital Payments",
      tips: [
        "Never share your UPI PIN, OTP, or banking passwords with anyone",
        "Always verify merchant details before making payments",
        "Use official payment apps from trusted app stores only",
        "Enable transaction alerts and monitor your account regularly"
      ]
    },
    {
      category: "Phone Calls",
      tips: [
        "Banks never ask for sensitive information over phone calls",
        "If caller claims emergency, verify independently before acting",
        "Use truecaller or similar apps to identify unknown numbers",
        "Report suspicious numbers to cybercrime authorities"
      ]
    },
    {
      category: "Online Shopping",
      tips: [
        "Shop only on verified websites with secure payment gateways",
        "Check seller ratings and reviews before purchasing",
        "Avoid deals that seem too good to be true",
        "Use credit cards instead of debit cards for online transactions"
      ]
    }
  ];

  // Mock tech news related to cybersecurity and scams
  const cybersecurityNews = [
    {
      title: "Microsoft Warns of New Phishing Campaign Targeting Office 365 Users",
      summary: "Cybercriminals are using sophisticated email templates to steal Microsoft credentials through fake login pages.",
      source: "Microsoft Security Blog",
      timestamp: "3 hours ago",
      readTime: "3 min read",
      category: "Cybersecurity"
    },
    {
      title: "Indian Government Launches New Cyber Crime Reporting Portal",
      summary: "Citizens can now report cybercrime incidents through an enhanced portal that promises faster response times.",
      source: "Ministry of Electronics & IT",
      timestamp: "6 hours ago",
      readTime: "2 min read",
      category: "Government"
    },
    {
      title: "AI-Powered Deepfake Scams on the Rise: How to Protect Yourself",
      summary: "Scammers are using AI to create convincing fake videos and audio calls to deceive victims into financial fraud.",
      source: "TechCrunch",
      timestamp: "8 hours ago",
      readTime: "5 min read",
      category: "AI & Technology"
    },
    {
      title: "WhatsApp Introduces New Security Features to Combat Business Scams",
      summary: "New verification badges and reporting mechanisms help users identify legitimate business accounts.",
      source: "WhatsApp Blog",
      timestamp: "12 hours ago",
      readTime: "4 min read",
      category: "Social Media"
    }
  ];

  // Simulate fetching real-time news
  const fetchLatestNews = async () => {
    setLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setTechNews(cybersecurityNews);
      setLoading(false);
      toast({
        title: "News Updated",
        description: "Latest cybersecurity news has been loaded.",
      });
    }, 1500);
  };

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-xl font-semibold">Cybersecurity News & Alerts</h1>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={fetchLatestNews}
          disabled={loading}
        >
          <TrendingUp className="h-4 w-4 mr-2" />
          {loading ? "Updating..." : "Refresh"}
        </Button>
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

      {/* Tabs for different content types */}
      <Tabs defaultValue="alerts" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            Live Alerts
          </TabsTrigger>
          <TabsTrigger value="news" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Tech News
          </TabsTrigger>
          <TabsTrigger value="safety" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Safety Guide
          </TabsTrigger>
        </TabsList>

        {/* Live Alerts Tab */}
        <TabsContent value="alerts" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Scammer Alerts</span>
          </div>
          {liveAlerts.map((alert) => (
            <Card key={alert.id} className="border-l-4 border-l-red-500">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-sm">{alert.title}</h3>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getSeverityColor(alert.severity)}`}></div>
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {alert.timestamp}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                <p className="text-xs text-primary">{alert.region}</p>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Tech News Tab */}
        <TabsContent value="news" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Latest Cybersecurity News</span>
          </div>
          {techNews.map((news, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-base mb-2">{news.title}</CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{news.category}</Badge>
                      <span className="text-xs text-muted-foreground">{news.readTime}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{news.summary}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary">{news.source}</span>
                  <span className="text-xs text-muted-foreground">{news.timestamp}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Safety Guide Tab */}
        <TabsContent value="safety" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-4 w-4 text-green-500" />
            <span className="text-sm font-medium">Safety Guidelines & Tips</span>
          </div>
          {safetyTips.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                  {section.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          
          {/* Emergency Contacts */}
          <Card className="bg-red-50 dark:bg-red-950/20 border-red-200">
            <CardHeader>
              <CardTitle className="text-base text-red-700 dark:text-red-400">
                🚨 Emergency Cyber Crime Contacts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <p><strong>National Cyber Crime Helpline:</strong> 1930</p>
                <p><strong>Cyber Crime Reporting Portal:</strong> cybercrime.gov.in</p>
                <p><strong>Reserve Bank of India:</strong> 14440 (Banking Frauds)</p>
                <p><strong>Women Helpline:</strong> 181</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ScamNewsPage;