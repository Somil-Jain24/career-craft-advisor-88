import { FeatureCard } from "@/components/FeatureCard";
import { 
  Brain, 
  MapPin, 
  GraduationCap, 
  MessageCircle, 
  Trophy, 
  Users,
  Zap,
  Globe,
  BookOpen
} from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Career Discovery",
      description: "Take our scientifically validated aptitude quiz and get personalized career recommendations powered by advanced AI algorithms.",
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: MapPin,
      title: "Smart College Finder",
      description: "Find the perfect colleges and courses near you with geolocation-based recommendations tailored to your interests and budget.",
      gradient: "from-accent/10 to-accent/5"
    },
    {
      icon: GraduationCap,
      title: "Step-by-Step Roadmaps",
      description: "Get detailed career journeys with required skills, exams, timelines, and growth opportunities visualized clearly.",
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: MessageCircle,
      title: "24/7 AI Chatbot",
      description: "Ask career-related questions anytime. Get instant guidance on exams, courses, and career planning from our intelligent assistant.",
      gradient: "from-primary/10 to-accent/5"
    },
    {
      icon: Trophy,
      title: "Scholarship Database",
      description: "Access thousands of scholarships with automatic deadline reminders and personalized application guidance.",
      gradient: "from-success/10 to-success/5"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Connect with industry professionals and get personalized feedback to accelerate your career growth.",
      gradient: "from-secondary/10 to-primary/5"
    },
    {
      icon: Zap,
      title: "Skill Gap Analysis",
      description: "Identify skill gaps for your dream career and get personalized course recommendations to bridge them effectively.",
      gradient: "from-accent/10 to-secondary/5"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Access career guidance in multiple Indian languages, making it accessible for students from all backgrounds.",
      gradient: "from-primary/10 to-secondary/5"
    },
    {
      icon: BookOpen,
      title: "Virtual Campus Tours",
      description: "Experience immersive 3D virtual tours of colleges and classrooms before making your final decision.",
      gradient: "from-secondary/10 to-accent/5"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
            <Zap className="mr-1 h-3 w-3" />
            Powerful Features
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Shape Your Future</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Comprehensive tools and AI-powered insights to guide you through every step of your career journey, 
            from discovery to achievement.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};