import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, Phone, MessageSquare, Link, Monitor } from "lucide-react";

const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-lg font-semibold">Fraud Protection</h1>
        <button className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
          <span className="text-sm">?</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Stay protected from scams
        </h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Our AI-powered app scans calls, SMS, links, and more to keep you safe from fraud.
        </p>

        {/* Features */}
        <div className="space-y-6">
          {/* Real-time Scanning */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-green-200 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-700" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-500 mb-1">Real-time Scanning</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call & SMS Protection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Scans calls and SMS in real-time to identify and block potential threats. This feature provides 
                immediate protection against unwanted calls and messages, ensuring your communication remains 
                secure and free from disruptions.
              </p>
            </div>
          </div>

          {/* AI Threat Analysis */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-orange-200 flex items-center justify-center">
                <Monitor className="w-5 h-5 text-orange-700" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-500 mb-1">AI Threat Analysis</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Advanced Threat Detection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Uses AI to analyze threats from various sources, including links, apps, and websites. Our AI 
                algorithms continuously learn and adapt to new threats, providing robust protection against 
                evolving scams and malware.
              </p>
            </div>
          </div>

          {/* Community Feedback */}
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-pink-200 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-pink-700" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-500 mb-1">Community Feedback</p>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Community-Powered Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Leverages community feedback to identify and report new scams and threats. By sharing insights 
                and experiences, users contribute to a collective defense against fraud, enhancing the overall 
                security of the app.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="p-6">
        <Button 
          onClick={() => navigate('/permissions')}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-xl font-medium"
          size="lg"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OnboardingPage;