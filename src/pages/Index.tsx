import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <footer className="border-t border-border py-8 bg-muted/30">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© 2024 Career Craft. All rights reserved. Empowering students to shape their future.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;