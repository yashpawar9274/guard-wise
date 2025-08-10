import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col items-center justify-center p-6 text-white animate-fade-in">
      {/* Logo/Shield */}
      <div className="relative mb-8 animate-scale-in" style={{ animationDelay: "0.05s" }}>
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl pulse"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <Shield className="w-32 h-32 text-cyan-400" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-400/10 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
        Fraude Guard
      </h1>

      {/* Subtitle */}
      <p className="text-xl text-slate-300 text-center mb-12 max-w-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
        Protecting you from fraud with AI
      </p>

      {/* Get Started Button */}
      <Button 
        onClick={() => navigate('/onboarding')}
        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-12 py-4 text-lg rounded-full font-medium shadow-lg hover-scale animate-scale-in"
        size="lg"
        style={{ animationDelay: "0.3s" }}>

        Get Started
      </Button>
    </div>
  );
};

export default Index;
