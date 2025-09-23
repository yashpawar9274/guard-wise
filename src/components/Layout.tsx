import { NavLink, useLocation } from "react-router-dom";
import { Home, History, Settings, Moon, Sun, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
const Layout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const {
    signOut
  } = useAuth();
  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };
  const navItems = [{
    path: "/",
    icon: Home,
    label: "Home"
  }, {
    path: "/history",
    icon: History,
    label: "History"
  }, {
    path: "/settings",
    icon: Settings,
    label: "Settings"
  }];
  return <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto relative">
      {/* Header */}
      <header className="bg-card border-b border-border p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-foreground">Fraude Guard</h1>
        <div className="flex items-center space-x-2">
          
          
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-20">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-card border-t border-border">
        <div className="flex items-center justify-around py-2">
          {navItems.map(item => {
          const isActive = location.pathname === item.path;
          return <NavLink key={item.path} to={item.path} className={cn("flex flex-col items-center py-2 px-4 rounded-lg transition-all", isActive ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground")}>
                <item.icon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>;
        })}
        </div>
      </nav>
    </div>;
};
export default Layout;