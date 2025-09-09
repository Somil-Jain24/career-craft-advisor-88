import { HeroButton } from "@/components/ui/hero-button";
import { Play, ArrowRight, Star, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-primary opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl float" />
      </div>
      
      <div className="container relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center py-20">
        {/* Content */}
        <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Star className="mr-1 h-3 w-3" />
              #1 AI-Powered Career Platform
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              Your Future Starts{" "}
              <span className="gradient-text">Here</span>
            </h1>
            
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground lg:mx-0">
              Discover your perfect career path with AI-powered recommendations, 
              personalized guidance, and comprehensive college matching. Make informed 
              decisions about your future with Career Craft.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start justify-center">
            <HeroButton variant="hero" size="lg" className="group" onClick={() => navigate("/quiz")}>
              Start Your Journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </HeroButton>
            
            <HeroButton variant="hero-outline" size="lg" className="group">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </HeroButton>
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground lg:justify-start justify-center">
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4 text-primary" />
              <span>50K+ Students</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4 text-secondary" />
              <span>1000+ Careers</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-accent" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-strong">
            <img
              src={heroImage}
              alt="Students planning their careers with AI guidance"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 rounded-2xl bg-card border border-border p-4 shadow-medium float">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-success animate-pulse" />
              <span className="text-xs font-medium text-card-foreground">Live Career Matching</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-card border border-border p-4 shadow-medium float" style={{ animationDelay: '2s' }}>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-accent" />
              <span className="text-xs font-medium text-card-foreground">AI Recommendations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};