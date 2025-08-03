import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Sparkles } from "lucide-react";

const SetupCompletePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4">
        <button 
          onClick={() => navigate('/permissions')}
          className="mr-4"
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-lg font-semibold text-slate-900">Setup Complete</h1>
      </div>

      {/* Celebration Animation */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Confetti-like dots */}
        <div className="relative mb-8">
          <div className="absolute -top-16 -left-8 w-3 h-3 bg-orange-400 rounded-full animate-bounce"></div>
          <div className="absolute -top-12 left-12 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute -top-20 left-4 w-4 h-4 bg-green-400 rounded-full animate-bounce delay-200"></div>
          <div className="absolute -top-8 -left-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute -top-16 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce delay-75"></div>
          <div className="absolute -top-24 -left-4 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-150"></div>
          <div className="absolute -top-14 left-8 w-3 h-3 bg-red-400 rounded-full animate-bounce delay-250"></div>
          
          {/* Hands illustration area */}
          <div className="w-48 h-32 relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-24 bg-gradient-to-t from-slate-400 to-slate-300 rounded-t-full"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 -translate-x-8">
              <div className="w-8 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full transform rotate-12"></div>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 translate-x-8">
              <div className="w-8 h-12 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full transform -rotate-12"></div>
            </div>
          </div>
          
          {/* More confetti */}
          <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-400"></div>
          <div className="absolute -bottom-12 right-12 w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-500"></div>
          <div className="absolute -bottom-6 right-4 w-4 h-4 bg-teal-400 rounded-full animate-bounce delay-600"></div>
        </div>

        <h2 className="text-4xl font-bold text-slate-900 mb-6">
          You're all set!
        </h2>

        <p className="text-slate-700 leading-relaxed max-w-sm">
          Your device is now protected against scam calls, spam SMS, phishing links, UPI fraud, malware apps, 
          and fake websites. Enjoy a safer digital experience with real-time threat detection and proactive 
          security measures.
        </p>
      </div>

      {/* Start Protecting Button */}
      <div className="p-6">
        <Button 
          onClick={() => navigate('/auth')}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-xl font-medium"
          size="lg"
        >
          Start Protecting
        </Button>
      </div>
    </div>
  );
};

export default SetupCompletePage;