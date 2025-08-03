import { useState } from "react";
import { ArrowLeft, Bell, Phone, MessageSquare, Shield, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const NotificationSettingsPage = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState({
    scamAlerts: true,
    callBlocking: true,
    smsScanning: true,
    threatUpdates: false,
    weeklyReports: true,
    emergencyAlerts: true
  });

  const handleToggle = (setting: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [setting]: value }));
    toast.success(`${setting} ${value ? 'enabled' : 'disabled'}`);
  };

  const SettingItem = ({ 
    icon, 
    title, 
    description, 
    checked, 
    onChange 
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    checked: boolean;
    onChange: (value: boolean) => void;
  }) => (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-3">
        <div className="text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <Switch 
        checked={checked}
        onCheckedChange={onChange}
      />
    </div>
  );

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
        <h1 className="text-xl font-semibold text-foreground">Notification Settings</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Security Notifications */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Security Notifications</h2>
          
          <Card className="bg-gradient-card border-border">
            <SettingItem
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Scam Alerts"
              description="Get notified when scams are detected"
              checked={notifications.scamAlerts}
              onChange={(value) => handleToggle('scamAlerts', value)}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<Phone className="h-5 w-5" />}
              title="Call Blocking"
              description="Notifications when calls are blocked"
              checked={notifications.callBlocking}
              onChange={(value) => handleToggle('callBlocking', value)}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<MessageSquare className="h-5 w-5" />}
              title="SMS Scanning"
              description="Alerts for suspicious SMS messages"
              checked={notifications.smsScanning}
              onChange={(value) => handleToggle('smsScanning', value)}
            />
          </Card>
        </div>

        {/* General Notifications */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">General</h2>
          
          <Card className="bg-gradient-card border-border">
            <SettingItem
              icon={<Shield className="h-5 w-5" />}
              title="Threat Updates"
              description="Latest fraud and scam information"
              checked={notifications.threatUpdates}
              onChange={(value) => handleToggle('threatUpdates', value)}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<Bell className="h-5 w-5" />}
              title="Weekly Reports"
              description="Summary of your protection activity"
              checked={notifications.weeklyReports}
              onChange={(value) => handleToggle('weeklyReports', value)}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<AlertTriangle className="h-5 w-5" />}
              title="Emergency Alerts"
              description="Critical security notifications"
              checked={notifications.emergencyAlerts}
              onChange={(value) => handleToggle('emergencyAlerts', value)}
            />
          </Card>
        </div>

        {/* Test Notification */}
        <Button 
          variant="outline" 
          className="w-full h-12 border-border"
          onClick={() => toast.success("Test notification sent!")}
        >
          Send Test Notification
        </Button>
      </div>
    </div>
  );
};

export default NotificationSettingsPage;