import { HeroButton } from "@/components/ui/hero-button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <span className="hidden font-bold sm:inline-block gradient-text">
              Career Craft
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#features"
            >
              Features
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#colleges"
            >
              Colleges
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#scholarships"
            >
              Scholarships
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#about"
            >
              About
            </a>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            <HeroButton variant="hero-ghost" size="sm" onClick={() => navigate("/dashboard")}>
              Dashboard
            </HeroButton>
            <HeroButton variant="hero" size="sm" onClick={() => navigate("/quiz")}>
              Take Quiz
            </HeroButton>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="container py-4 space-y-2">
            <a
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              href="#features"
            >
              Features
            </a>
            <a
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              href="#colleges"
            >
              Colleges
            </a>
            <a
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              href="#scholarships"
            >
              Scholarships
            </a>
            <a
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              href="#about"
            >
              About
            </a>
            <div className="flex space-x-2 pt-2">
              <HeroButton variant="hero-ghost" size="sm" className="flex-1" onClick={() => navigate("/dashboard")}>
                Dashboard
              </HeroButton>
              <HeroButton variant="hero" size="sm" className="flex-1" onClick={() => navigate("/quiz")}>
                Take Quiz
              </HeroButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};