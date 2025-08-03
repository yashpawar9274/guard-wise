import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AuthPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
        
        navigate('/dashboard');
      } else {
        const { error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              full_name: formData.fullName,
            },
          },
        });

        if (error) throw error;

        toast({
          title: "Account created",
          description: "Please check your email to verify your account.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Authentication failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-slate-100">
        <button 
          onClick={() => navigate('/setup-complete')}
          className="mr-4"
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-lg font-semibold text-slate-900">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <form onSubmit={handleAuth} className="space-y-6">
          {!isLogin && (
            <div>
              <Input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                required={!isLogin}
                className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
              />
            </div>
          )}

          <div>
            <Input
              name="email"
              type="email"
              placeholder={isLogin ? "Username or Email" : "Email"}
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
            />
          </div>

          <div>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
            />
          </div>

          {isLogin && (
            <div className="text-left">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-slate-500 underline text-sm"
              >
                Forgot Password?
              </button>
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-medium h-14"
          >
            {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
          </Button>

          {isLogin && (
            <Button
              type="button"
              variant="outline"
              className="w-full border-slate-200 text-slate-600 py-4 rounded-xl font-medium h-14"
            >
              <User className="w-5 h-5 mr-2" />
              Login with Account
            </Button>
          )}
        </form>

        {!isLogin && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsLogin(true)}
              className="text-slate-500 underline"
            >
              Already have an account? Sign In
            </button>
          </div>
        )}

        {isLogin && (
          <div className="text-center mt-8">
            <button
              onClick={() => setIsLogin(false)}
              className="text-slate-500 underline"
            >
              Don't have an account? Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPage;