import { Header } from "@/components/Header";
import { HeroButton } from "@/components/ui/hero-button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Brain, 
  MapPin, 
  Trophy, 
  BookOpen, 
  MessageCircle,
  TrendingUp,
  Calendar,
  Star,
  Target
} from "lucide-react";

const Dashboard = () => {
  const userProgress = {
    careerQuiz: 100,
    profileCompletion: 75,
    skillAssessment: 60,
    collegeApplications: 40
  };

  const upcomingDeadlines = [
    { title: "JEE Main Application", date: "Dec 15, 2024", type: "exam" },
    { title: "Merit Scholarship", date: "Dec 20, 2024", type: "scholarship" },
    { title: "College Fair Registration", date: "Jan 5, 2025", type: "event" }
  ];

  const recommendedActions = [
    { title: "Complete Skill Assessment", description: "Identify your strengths and areas for improvement", icon: Target },
    { title: "Apply for Scholarships", description: "3 new scholarships match your profile", icon: Trophy },
    { title: "Explore Virtual Tours", description: "Visit top colleges from your shortlist", icon: BookOpen }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <div className="grid gap-8">
          {/* Welcome Section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, <span className="gradient-text">Priya</span>! 👋
              </h1>
              <p className="text-muted-foreground mt-2">
                Continue your career journey and explore new opportunities.
              </p>
            </div>
            <HeroButton variant="hero">
              <MessageCircle className="mr-2 h-4 w-4" />
              Ask AI Career Coach
            </HeroButton>
          </div>

          {/* Progress Overview */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center">
                  <Brain className="h-4 w-4 text-success" />
                </div>
                <span className="font-medium">Career Quiz</span>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-success">Complete</div>
                <Progress value={userProgress.careerQuiz} className="h-2" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Profile</span>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">{userProgress.profileCompletion}%</div>
                <Progress value={userProgress.profileCompletion} className="h-2" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-accent" />
                </div>
                <span className="font-medium">Skills</span>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">{userProgress.skillAssessment}%</div>
                <Progress value={userProgress.skillAssessment} className="h-2" />
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-8 w-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-secondary" />
                </div>
                <span className="font-medium">Applications</span>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary">{userProgress.collegeApplications}%</div>
                <Progress value={userProgress.collegeApplications} className="h-2" />
              </div>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recommended Actions */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  Recommended for You
                </h2>
                <div className="space-y-4">
                  {recommendedActions.map((action, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <action.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-medium">{action.title}</h3>
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        </div>
                      </div>
                      <HeroButton variant="hero-ghost" size="sm">
                        Start
                      </HeroButton>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Career Matches */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Your Top Career Matches</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Software Engineering</h3>
                      <span className="text-sm font-bold text-primary">92%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      High growth potential with strong job market
                    </p>
                    <HeroButton variant="hero-outline" size="sm">
                      Explore Path
                    </HeroButton>
                  </div>
                  <div className="p-4 border border-border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Data Science</h3>
                      <span className="text-sm font-bold text-secondary">87%</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      Emerging field with excellent opportunities
                    </p>
                    <HeroButton variant="hero-outline" size="sm">
                      Explore Path
                    </HeroButton>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Deadlines */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-warning" />
                  Upcoming Deadlines
                </h2>
                <div className="space-y-3">
                  {upcomingDeadlines.map((deadline, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <h3 className="font-medium text-sm">{deadline.title}</h3>
                        <p className="text-xs text-muted-foreground">{deadline.date}</p>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        deadline.type === 'exam' ? 'bg-primary/10 text-primary' :
                        deadline.type === 'scholarship' ? 'bg-success/10 text-success' :
                        'bg-accent/10 text-accent'
                      }`}>
                        {deadline.type}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Quick Stats */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Colleges Explored</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Scholarships Found</span>
                    <span className="font-semibold">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Career Paths</span>
                    <span className="font-semibold">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Mentorship Hours</span>
                    <span className="font-semibold">5.5h</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;