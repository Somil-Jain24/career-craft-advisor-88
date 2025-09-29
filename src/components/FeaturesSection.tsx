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
import { ServiceGrid, type Service } from "@/components/ui/service-grid";

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

  const expertServices: Service[] = [
    { name: "Chefs", imageUrl: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Prepared meals", imageUrl: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Catering", imageUrl: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Photography", imageUrl: "https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Personal training", imageUrl: "https://images.unsplash.com/photo-1546484959-f9a53db89f5d?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Massage", imageUrl: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Spa treatments", imageUrl: "https://images.unsplash.com/photo-1540558870478-4dbf4f6a2c91?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Hair styling", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Makeup", imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop", href: "#" },
    { name: "Nails", imageUrl: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400&auto=format&fit=crop", href: "#" },
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
  return (
    <section id="features">
      <div className="container py-16">
        <div className="grid gap-8">
          <div>
            {/* Existing feature cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} gradient={f.gradient} />
              ))}
            </div>
          </div>
          <ServiceGrid
            title="A world of experts, at your service"
            subtitle="Choose from thousands of services in 260 cities—provided by trusted pros."
            services={expertServices}
            className="mt-8"
          />
        </div>
      </div>
    </section>
  );
};