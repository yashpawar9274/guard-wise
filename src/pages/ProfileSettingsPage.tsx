import { useState } from "react";
import { ArrowLeft, User, Camera, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ProfileSettingsPage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "Ethan Carter",
    email: "ethan.carter@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  });

  const handleSave = () => {
    toast.success("Profile updated successfully");
    navigate(-1);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
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
        <h1 className="text-xl font-semibold text-foreground">Profile Settings</h1>
        <Button 
          onClick={handleSave}
          className="text-primary bg-transparent hover:bg-primary/10"
        >
          Save
        </Button>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Avatar */}
        <div className="text-center space-y-4">
          <div className="relative inline-block">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40 text-2xl">
                {profile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <Button 
              size="icon" 
              className="absolute -bottom-2 -right-2 rounded-full w-8 h-8"
              onClick={() => toast.info("Camera functionality coming soon")}
            >
              <Camera className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-center">
            <p className="text-primary font-medium">Premium User</p>
          </div>
        </div>

        {/* Profile Information */}
        <Card className="p-4 bg-gradient-card border-border space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <User className="h-4 w-4 mr-2" />
              Full Name
            </label>
            <Input
              value={profile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Email Address
            </label>
            <Input
              type="email"
              value={profile.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              Phone Number
            </label>
            <Input
              type="tel"
              value={profile.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </label>
            <Input
              value={profile.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
              className="bg-background border-border"
            />
          </div>
        </Card>

        {/* Premium Status */}
        <Card className="p-4 bg-gradient-to-r from-primary/10 to-primary/20 border-primary/20">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-foreground">Premium Subscription</h3>
            <p className="text-sm text-muted-foreground">
              Your premium subscription is active until Dec 2024
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Manage Subscription
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;