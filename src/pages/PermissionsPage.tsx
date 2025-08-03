import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, MessageSquare, Link, Monitor } from "lucide-react";
import { useState } from "react";

const PermissionsPage = () => {
  const navigate = useNavigate();
  const [permissions, setPermissions] = useState({
    phone: false,
    messages: false,
    links: false,
    apps: false,
  });

  const handlePermissionChange = (permission: keyof typeof permissions, value: boolean) => {
    setPermissions(prev => ({ ...prev, [permission]: value }));
  };

  const allPermissionsGranted = Object.values(permissions).every(Boolean);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-slate-100">
        <button 
          onClick={() => navigate('/onboarding')}
          className="mr-4"
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-lg font-semibold text-slate-900">Permissions Required</h1>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          To protect you from fraud, we need access to the following:
        </h2>

        {/* Permission Items */}
        <div className="space-y-6">
          {/* Phone Permission */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  This allows Fraude Guard to identify and block potential scam calls in real-time.
                </p>
                <p className="text-xs text-slate-500 mt-1">Call Log Access</p>
              </div>
            </div>
            <Switch
              checked={permissions.phone}
              onCheckedChange={(checked) => handlePermissionChange('phone', checked)}
            />
          </div>

          {/* Message Permission */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">Message Bubble</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enables analysis of SMS messages for spam and phishing attempts.
                </p>
                <p className="text-xs text-slate-500 mt-1">SMS Access</p>
              </div>
            </div>
            <Switch
              checked={permissions.messages}
              onCheckedChange={(checked) => handlePermissionChange('messages', checked)}
            />
          </div>

          {/* Link Permission */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                <Link className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">Link</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Allows scanning of links in messages and apps for malicious content.
                </p>
                <p className="text-xs text-slate-500 mt-1">Link Scanning</p>
              </div>
            </div>
            <Switch
              checked={permissions.links}
              onCheckedChange={(checked) => handlePermissionChange('links', checked)}
            />
          </div>

          {/* App Window Permission */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div className="flex items-start space-x-4 flex-1">
              <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 mb-1">App Window</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Enables detection of potentially harmful apps installed on your device.
                </p>
                <p className="text-xs text-slate-500 mt-1">App Scanning</p>
              </div>
            </div>
            <Switch
              checked={permissions.apps}
              onCheckedChange={(checked) => handlePermissionChange('apps', checked)}
            />
          </div>
        </div>

        <p className="text-sm text-slate-600 mt-8 text-center">
          Your data is processed securely and will not be shared with third parties.
        </p>
      </div>

      {/* Continue Button */}
      <div className="p-6">
        <Button 
          onClick={() => navigate('/setup-complete')}
          disabled={!allPermissionsGranted}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          size="lg"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default PermissionsPage;