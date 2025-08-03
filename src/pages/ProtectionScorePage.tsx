import { ArrowLeft, Search, Shield, ShieldCheck, Flag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProtectionScorePage = () => {
  const navigate = useNavigate();

  const factors = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Scan Frequency",
      description: "Scanned 12 times this week"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Real-time Protection", 
      description: "Real-time protection is ON"
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Threats Blocked",
      description: "Blocked 5 threats this month"
    },
    {
      icon: <Flag className="h-6 w-6" />,
      title: "Reporting Activity",
      description: "Reported 2 suspicious activities"
    }
  ];

  const tips = [
    {
      icon: <Search className="h-6 w-6" />,
      text: "Scan more frequently"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      text: "Keep real-time protection ON"
    },
    {
      icon: <Flag className="h-6 w-6" />,
      text: "Report suspicious activities"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate(-1)} className="p-2">
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold">Protection Score</h1>
      </div>

      {/* Protection Score */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium">Your Protection Score</h2>
          <span className="text-2xl font-bold">75/100</span>
        </div>
        <Progress value={75} className="h-3 mb-2" />
        <p className="text-sm text-primary">Updated 2 days ago</p>
      </div>

      {/* Factors */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Factors</h3>
        <div className="space-y-3">
          {factors.map((factor, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    {factor.icon}
                  </div>
                  <div>
                    <div className="font-medium">{factor.title}</div>
                    <div className="text-sm text-primary">{factor.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tips to Improve */}
      <div>
        <h3 className="text-xl font-bold mb-4">Tips to Improve</h3>
        <div className="space-y-3">
          {tips.map((tip, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-muted rounded-lg">
                    {tip.icon}
                  </div>
                  <span className="font-medium">{tip.text}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProtectionScorePage;