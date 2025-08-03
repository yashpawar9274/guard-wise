import { useState } from "react";
import { 
  User, 
  Shield, 
  Bell, 
  Phone, 
  HelpCircle, 
  Info, 
  ChevronRight,
  Moon,
  Sun,
  RotateCcw,
  Heart
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(() => 
    localStorage.getItem('theme') === 'dark'
  );
  const [notifications, setNotifications] = useState(true);
  const [realTimeProtection, setRealTimeProtection] = useState(true);
  const [autoBlock, setAutoBlock] = useState(true);

  const toggleDarkMode = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
    toast.success(`Switched to ${newTheme ? 'dark' : 'light'} mode`);
  };

  const handleNotificationToggle = (enabled: boolean) => {
    setNotifications(enabled);
    toast.success(enabled ? "Notifications enabled" : "Notifications disabled");
  };

  const handleProtectionToggle = (enabled: boolean) => {
    setRealTimeProtection(enabled);
    toast.success(enabled ? "Real-time protection enabled" : "Real-time protection disabled");
  };

  const handleAutoBlockToggle = (enabled: boolean) => {
    setAutoBlock(enabled);
    toast.success(enabled ? "Auto-block enabled" : "Auto-block disabled");
  };

  const resetProtectionScore = () => {
    toast.success("Protection score reset successfully");
  };

  const SettingItem = ({ 
    icon, 
    title, 
    description, 
    action, 
    onClick 
  }: {
    icon: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
    onClick?: () => void;
  }) => (
    <div 
      className={`flex items-center justify-between p-4 ${onClick ? 'cursor-pointer hover:bg-muted/50' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        <div className="text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
      <div className="flex items-center">
        {action}
        {onClick && <ChevronRight className="h-4 w-4 text-muted-foreground ml-2" />}
      </div>
    </div>
  );

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Settings</h1>
        <p className="text-muted-foreground">Customize your protection preferences</p>
      </div>

      {/* Profile Section */}
      <Card className="bg-gradient-card border-border shadow-card">
        <SettingItem
          icon={<User className="h-5 w-5" />}
          title="Profile Settings"
          description="Manage your account and personal information"
          onClick={() => toast.info("Profile settings coming soon")}
        />
      </Card>

      {/* Protection Settings */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground mb-3">Protection</h2>
        <Card className="bg-gradient-card border-border shadow-card">
          <SettingItem
            icon={<Shield className="h-5 w-5" />}
            title="Real-time Protection"
            description="Monitor threats in real-time"
            action={
              <Switch 
                checked={realTimeProtection}
                onCheckedChange={handleProtectionToggle}
              />
            }
          />
          <Separator className="mx-4" />
          <SettingItem
            icon={<Phone className="h-5 w-5" />}
            title="Auto Block"
            description="Automatically block known scam numbers"
            action={
              <Switch 
                checked={autoBlock}
                onCheckedChange={handleAutoBlockToggle}
              />
            }
          />
          <Separator className="mx-4" />
          <SettingItem
            icon={<RotateCcw className="h-5 w-5" />}
            title="Reset Protection Score"
            description="Reset your protection score to start fresh"
            onClick={resetProtectionScore}
          />
        </Card>
      </div>

      {/* Preferences */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground mb-3">Preferences</h2>
        <Card className="bg-gradient-card border-border shadow-card">
          <SettingItem
            icon={darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            title="Dark Mode"
            description="Toggle between light and dark themes"
            action={
              <Switch 
                checked={darkMode}
                onCheckedChange={toggleDarkMode}
              />
            }
          />
          <Separator className="mx-4" />
          <SettingItem
            icon={<Bell className="h-5 w-5" />}
            title="Notifications"
            description="Control push notifications and alerts"
            action={
              <Switch 
                checked={notifications}
                onCheckedChange={handleNotificationToggle}
              />
            }
          />
        </Card>
      </div>

      {/* Support */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-foreground mb-3">Support</h2>
        <Card className="bg-gradient-card border-border shadow-card">
          <SettingItem
            icon={<HelpCircle className="h-5 w-5" />}
            title="Help & Support"
            description="Get help and contact support"
            onClick={() => toast.info("Help center coming soon")}
          />
          <Separator className="mx-4" />
          <SettingItem
            icon={<Info className="h-5 w-5" />}
            title="About Fraude Guard"
            description="Version 1.0.0 • Terms & Privacy"
            onClick={() => toast.info("About page coming soon")}
          />
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center pt-6 pb-4">
        <div className="flex items-center justify-center space-x-1 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500" />
          <span>for your security</span>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          Fraude Guard v1.0.0
        </p>
      </div>
    </div>
  );
};

export default SettingsPage;