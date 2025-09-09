import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  gradient = "from-primary/10 to-secondary/10" 
}: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border border-border/50 p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
          <Icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-card-foreground">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-primary opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
    </div>
  );
};