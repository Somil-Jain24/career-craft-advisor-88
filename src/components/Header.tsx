import { HeroButton } from "@/components/ui/hero-button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

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
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => navigate("/colleges")}
            >
              Colleges
            </button>
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => navigate("/scholarships")}
            >
              Scholarships
            </button>
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => navigate("/about")}
            >
              About
            </button>
            <button
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <span className="text-sm text-foreground/70">Hi, {user.name}</span>
                <HeroButton variant="hero-ghost" size="sm" onClick={() => navigate("/dashboard")}>
                  Dashboard
                </HeroButton>
                <HeroButton variant="hero-outline" size="sm" onClick={logout}>
                  Logout
                </HeroButton>
              </>
            ) : (
              <>
                <HeroButton variant="hero-outline" size="sm" onClick={() => navigate("/login")}>
                  Login
                </HeroButton>
                <HeroButton variant="hero" size="sm" onClick={() => navigate("/quiz")}>
                  Take Quiz
                </HeroButton>
              </>
            )}
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
            <button
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              onClick={() => { setIsMenuOpen(false); navigate("/colleges"); }}
            >
              Colleges
            </button>
            <button
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              onClick={() => { setIsMenuOpen(false); navigate("/scholarships"); }}
            >
              Scholarships
            </button>
            <button
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              onClick={() => { setIsMenuOpen(false); navigate("/about"); }}
            >
              About
            </button>
            <button
              className="block px-2 py-1 text-sm text-foreground/60 hover:text-foreground"
              onClick={() => { setIsMenuOpen(false); navigate("/contact"); }}
            >
              Contact
            </button>
            <div className="flex space-x-2 pt-2">
              {user ? (
                <>
                  <HeroButton variant="hero-ghost" size="sm" className="flex-1" onClick={() => navigate("/dashboard")}>
                    Dashboard
                  </HeroButton>
                  <HeroButton variant="hero-outline" size="sm" className="flex-1" onClick={logout}>
                    Logout
                  </HeroButton>
                </>
              ) : (
                <>
                  <HeroButton variant="hero-outline" size="sm" className="flex-1" onClick={() => navigate("/login")}>
                    Login
                  </HeroButton>
                  <HeroButton variant="hero" size="sm" className="flex-1" onClick={() => navigate("/quiz")}>
                    Take Quiz
                  </HeroButton>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};