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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h1 className="text-xl font-semibold text-foreground">Settings</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Section */}
        <div className="text-center space-y-4">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
            <User className="h-12 w-12 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Ethan Carter</h2>
            <p className="text-primary font-medium">Premium User</p>
          </div>
        </div>

        {/* General Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">General</h3>
          
          <Card className="bg-gradient-card border-border shadow-card">
            <SettingItem
              icon={darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              title="Dark Mode"
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
              title="Notification Settings"
              onClick={() => toast.info("Notification settings coming soon")}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<User className="h-5 w-5" />}
              title="Emergency Contact Setup"
              onClick={() => toast.info("Emergency contact setup coming soon")}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<RotateCcw className="h-5 w-5" />}
              title="Reset Protection Score"
              onClick={resetProtectionScore}
            />
          </Card>
        </div>

        {/* About Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-foreground">About</h3>
          
          <Card className="bg-gradient-card border-border shadow-card">
            <SettingItem
              icon={<Info className="h-5 w-5" />}
              title="About Us"
              onClick={() => toast.info("About page coming soon")}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<HelpCircle className="h-5 w-5" />}
              title="Support"
              onClick={() => toast.info("Support coming soon")}
            />
            <Separator className="mx-4" />
            <SettingItem
              icon={<Info className="h-5 w-5" />}
              title="Terms"
              onClick={() => toast.info("Terms coming soon")}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;