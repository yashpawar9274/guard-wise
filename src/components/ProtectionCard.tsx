import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProtectionCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  variant?: "default" | "success" | "warning" | "danger";
  className?: string;
}

const ProtectionCard = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  variant = "default",
  className 
}: ProtectionCardProps) => {
  const variants = {
    default: "bg-gradient-card border-border",
    success: "bg-gradient-success border-success/20 text-success-foreground",
    warning: "bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20",
    danger: "bg-gradient-danger border-destructive/20 text-destructive-foreground"
  };

  return (
    <Card 
      className={cn(
        "p-4 shadow-card transition-all hover:scale-105 hover:shadow-button",
        variants[variant],
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium opacity-80">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          {subtitle && (
            <p className="text-xs opacity-60 mt-1">{subtitle}</p>
          )}
        </div>
        <div className="text-3xl opacity-80">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default ProtectionCard;