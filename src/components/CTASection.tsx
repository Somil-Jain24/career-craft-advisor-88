import { HeroButton } from "@/components/ui/hero-button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const CTASection = () => {
  const navigate = useNavigate();
  
  const benefits = [
    "Personalized AI career recommendations",
    "Access to 1000+ career paths",
    "Real-time scholarship opportunities",
    "Expert mentorship network"
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
      
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            Ready to Discover Your Perfect Career Path?
          </h2>
          
          <p className="text-lg text-white/90 mb-8">
            Join thousands of students who have already found their direction with Career Craft. 
            Start your personalized career journey today.
          </p>
          
          <div className="grid gap-4 sm:grid-cols-2 mb-8 text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-sm text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <HeroButton 
              variant="hero" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 group"
              onClick={() => navigate("/quiz")}
            >
              Start Free Career Assessment
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </HeroButton>
            
            <HeroButton variant="hero-outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => navigate("/login")}>
              Login
            </HeroButton>
          </div>
          
          <p className="text-xs text-white/70 mt-6">
            Free forever • No credit card required • Start in 2 minutes
          </p>
        </div>
      </div>
    </section>
  );
};