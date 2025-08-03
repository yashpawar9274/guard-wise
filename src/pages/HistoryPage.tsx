import { useState } from "react";
import { Calendar, Phone, MessageSquare, Link2, CreditCard, Clock, Shield, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ThreatEvent {
  id: string;
  type: "call" | "sms" | "link" | "upi" | "malware";
  title: string;
  description: string;
  timestamp: string;
  status: "blocked" | "flagged" | "reported";
  severity: "high" | "medium" | "low";
}

const HistoryPage = () => {
  const [events] = useState<ThreatEvent[]>([
    {
      id: "1",
      type: "call",
      title: "Scam Call Blocked",
      description: "+91-XXXX-XXX111 - Fake bank verification call",
      timestamp: "2 hours ago",
      status: "blocked",
      severity: "high"
    },
    {
      id: "2", 
      type: "sms",
      title: "Suspicious SMS Detected",
      description: "KYC verification link detected as phishing",
      timestamp: "5 hours ago",
      status: "flagged",
      severity: "high"
    },
    {
      id: "3",
      type: "link",
      title: "Malicious Link Blocked",
      description: "Fake UPI payment link intercepted",
      timestamp: "1 day ago", 
      status: "blocked",
      severity: "medium"
    },
    {
      id: "4",
      type: "upi",
      title: "UPI Fraud Attempt",
      description: "Suspicious transaction request blocked",
      timestamp: "2 days ago",
      status: "reported", 
      severity: "high"
    },
    {
      id: "5",
      type: "malware",
      title: "Malicious App Removed",
      description: "Fake banking app uninstalled",
      timestamp: "3 days ago",
      status: "blocked",
      severity: "high"
    }
  ]);

  const getIcon = (type: string) => {
    switch (type) {
      case "call":
        return <Phone className="h-4 w-4" />;
      case "sms":
        return <MessageSquare className="h-4 w-4" />;
      case "link":
        return <Link2 className="h-4 w-4" />;
      case "upi":
        return <CreditCard className="h-4 w-4" />;
      case "malware":
        return <Shield className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "blocked":
        return <Badge variant="destructive" className="text-xs">Blocked</Badge>;
      case "flagged":
        return <Badge variant="secondary" className="text-xs">Flagged</Badge>;
      case "reported":
        return <Badge variant="default" className="text-xs">Reported</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{status}</Badge>;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "border-l-destructive";
      case "medium":
        return "border-l-warning";
      case "low":
        return "border-l-success";
      default:
        return "border-l-border";
    }
  };

  const filterEventsByType = (type: string) => {
    if (type === "all") return events;
    return events.filter(event => event.type === type);
  };

  const EventCard = ({ event }: { event: ThreatEvent }) => (
    <Card className={`p-4 bg-gradient-card border-l-4 ${getSeverityColor(event.severity)} shadow-card`}>
      <div className="flex items-start space-x-3">
        <div className="text-primary mt-1">
          {getIcon(event.type)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-semibold text-sm text-foreground">{event.title}</h3>
            {getStatusBadge(event.status)}
          </div>
          <p className="text-xs text-muted-foreground mb-2">{event.description}</p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="h-3 w-3 mr-1" />
            {event.timestamp}
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Protection History</h1>
        <p className="text-muted-foreground">Your security activity timeline</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <Card className="p-3 text-center bg-gradient-success border-success/20">
          <div className="text-lg font-bold text-success-foreground">24</div>
          <div className="text-xs text-success-foreground/80">Threats Blocked</div>
        </Card>
        <Card className="p-3 text-center bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
          <div className="text-lg font-bold text-foreground">8</div>
          <div className="text-xs text-muted-foreground">This Week</div>
        </Card>
        <Card className="p-3 text-center bg-gradient-card border-border">
          <div className="text-lg font-bold text-foreground">156</div>
          <div className="text-xs text-muted-foreground">All Time</div>
        </Card>
      </div>

      {/* Filters */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" className="text-xs">All</TabsTrigger>
          <TabsTrigger value="call" className="text-xs">Calls</TabsTrigger>
          <TabsTrigger value="sms" className="text-xs">SMS</TabsTrigger>
          <TabsTrigger value="link" className="text-xs">Links</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-3 mt-4">
          {filterEventsByType("all").map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </TabsContent>

        <TabsContent value="call" className="space-y-3 mt-4">
          {filterEventsByType("call").map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </TabsContent>

        <TabsContent value="sms" className="space-y-3 mt-4">
          {filterEventsByType("sms").map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </TabsContent>

        <TabsContent value="link" className="space-y-3 mt-4">
          {filterEventsByType("link").map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </TabsContent>
      </Tabs>

      {/* Clear History Button */}
      <div className="pt-4">
        <Button variant="outline" className="w-full">
          Clear History
        </Button>
      </div>
    </div>
  );
};

export default HistoryPage;