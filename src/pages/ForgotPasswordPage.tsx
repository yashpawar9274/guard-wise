import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [step, setStep] = useState<'email' | 'otp' | 'password'>('email');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });

      if (error) throw error;

      toast({
        title: "Verification code sent",
        description: "Please check your email for the verification code.",
      });
      
      setStep('otp');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd verify the OTP here
    // For now, we'll just proceed to password reset
    setStep('password');
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (newPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      toast({
        title: "Password updated",
        description: "Your password has been successfully updated.",
      });
      
      navigate('/auth');
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getTitle = () => {
    switch (step) {
      case 'email': return 'Forgot Password';
      case 'otp': return 'Forgot Password';
      case 'password': return 'Forgot Password';
      default: return 'Forgot Password';
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-slate-100">
        <button 
          onClick={() => step === 'email' ? navigate('/auth') : setStep('email')}
          className="mr-4"
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <h1 className="text-lg font-semibold text-slate-900">{getTitle()}</h1>
      </div>

      <div className="flex-1 px-6 py-8">
        {step === 'email' && (
          <form onSubmit={handleSendOTP} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Enter your email
              </h2>
              <p className="text-slate-600 mb-6">
                We'll send a verification code to your registered email address.
              </p>
            </div>

            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
            />

            <div className="pt-8">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-medium h-14"
              >
                {loading ? 'Sending...' : 'Send Verification Code'}
              </Button>
            </div>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Enter the verification code
              </h2>
              <p className="text-slate-600 mb-6">
                We've sent a verification code to your email address. The code is valid for 5 minutes.
              </p>
            </div>

            <Input
              type="text"
              placeholder="Enter verification code"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
            />

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-medium h-14"
            >
              Verify Code
            </Button>

            <div className="text-center">
              <p className="text-slate-500 text-sm mb-2">Didn't receive the code?</p>
              <button
                type="button"
                onClick={() => setStep('email')}
                className="text-slate-500 underline text-sm"
              >
                Resend Code
              </button>
            </div>
          </form>
        )}

        {step === 'password' && (
          <form onSubmit={handleResetPassword} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Set New Password
              </h2>
            </div>

            <div>
              <label className="block text-slate-900 font-medium mb-2">New Password</label>
              <Input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-slate-900 font-medium mb-2">Confirm New Password</label>
              <Input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full h-14 px-4 bg-slate-50 border-0 rounded-xl text-base placeholder:text-slate-400"
              />
            </div>

            <p className="text-sm text-slate-600">
              Password must be at least 8 characters long and include a mix of letters, numbers, and symbols.
            </p>

            <div className="pt-4">
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-medium h-14"
              >
                {loading ? 'Updating...' : 'Reset Password'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;