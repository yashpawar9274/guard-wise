import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface QuickTileProps {
  title: string;
  icon: ReactNode;
  onClick?: () => void;
  className?: string;
}

const QuickTile = ({ title, icon, onClick, className }: QuickTileProps) => {
  return (
    <Card 
      className={cn(
        "p-4 bg-gradient-card border-border shadow-card transition-all hover:scale-105 hover:shadow-button cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="text-2xl text-primary">
          {icon}
        </div>
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
    </Card>
  );
};

export default QuickTile;