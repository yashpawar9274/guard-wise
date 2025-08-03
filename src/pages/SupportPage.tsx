import { useState } from "react";
import { ArrowLeft, MessageCircle, Mail, Phone, Send, HelpCircle, Book, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SupportPage = () => {
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({
    subject: "",
    message: "",
    email: "ethan.carter@example.com"
  });

  const handleSubmit = () => {
    if (!contactForm.subject || !contactForm.message) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Support ticket submitted successfully!");
    setContactForm({ subject: "", message: "", email: contactForm.email });
  };

  const ContactOption = ({ 
    icon, 
    title, 
    description, 
    action 
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    action: () => void;
  }) => (
    <Card 
      className="p-4 bg-gradient-card border-border cursor-pointer hover:bg-muted/50 transition-colors"
      onClick={action}
    >
      <div className="flex items-center space-x-3">
        <div className="text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
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
        <h1 className="text-xl font-semibold text-foreground">Help & Support</h1>
        <div className="w-10" />
      </div>

      <div className="p-4 space-y-6">
        {/* Quick Help */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Quick Help</h2>
          
          <ContactOption
            icon={<HelpCircle className="h-5 w-5" />}
            title="FAQ"
            description="Find answers to common questions"
            action={() => toast.info("FAQ page coming soon")}
          />
          
          <ContactOption
            icon={<Book className="h-5 w-5" />}
            title="User Guide"
            description="Learn how to use Fraude Guard"
            action={() => toast.info("User guide coming soon")}
          />
          
          <ContactOption
            icon={<Bug className="h-5 w-5" />}
            title="Report a Bug"
            description="Help us improve the app"
            action={() => toast.info("Bug report form coming soon")}
          />
        </div>

        {/* Contact Methods */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
          
          <ContactOption
            icon={<MessageCircle className="h-5 w-5" />}
            title="Live Chat"
            description="Chat with our support team"
            action={() => toast.info("Live chat will open soon")}
          />
          
          <ContactOption
            icon={<Mail className="h-5 w-5" />}
            title="Email Support"
            description="support@fraudeguard.com"
            action={() => window.open('mailto:support@fraudeguard.com')}
          />
          
          <ContactOption
            icon={<Phone className="h-5 w-5" />}
            title="Phone Support"
            description="+1 (555) FRAUDE-1"
            action={() => window.open('tel:+15553728331')}
          />
        </div>

        {/* Contact Form */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Send us a Message</h2>
          
          <Card className="p-4 bg-gradient-card border-border space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                className="bg-background border-border"
                disabled
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Subject</label>
              <Input
                placeholder="What can we help you with?"
                value={contactForm.subject}
                onChange={(e) => setContactForm(prev => ({ ...prev, subject: e.target.value }))}
                className="bg-background border-border"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Message</label>
              <Textarea
                placeholder="Describe your issue or question..."
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                className="bg-background border-border min-h-[100px] resize-none"
              />
            </div>

            <Button onClick={handleSubmit} className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </Button>
          </Card>
        </div>

        {/* Response Time */}
        <Card className="p-4 bg-primary/10 border-primary/20">
          <div className="text-center">
            <h3 className="font-medium text-foreground mb-1">Response Time</h3>
            <p className="text-sm text-muted-foreground">
              We typically respond within 24 hours during business days
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SupportPage;