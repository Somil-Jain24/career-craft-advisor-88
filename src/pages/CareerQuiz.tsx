import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroButton } from "@/components/ui/hero-button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Brain, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CareerQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      question: "Which activity do you find most engaging?",
      options: [
        "Solving complex mathematical problems",
        "Creating visual designs or artwork", 
        "Helping others with their problems",
        "Building or fixing things with your hands"
      ]
    },
    {
      question: "What type of work environment motivates you most?",
      options: [
        "A quiet office with focused individual work",
        "A collaborative team environment",
        "An outdoor or field-based setting",
        "A fast-paced, dynamic workplace"
      ]
    },
    {
      question: "Which subject did you enjoy most in school?",
      options: [
        "Science and Mathematics",
        "Literature and Languages",
        "Social Studies and History",
        "Arts and Creative subjects"
      ]
    },
    {
      question: "What drives you the most in your career?",
      options: [
        "Making a positive impact on society",
        "Financial stability and growth",
        "Creative expression and innovation",
        "Leadership and management opportunities"
      ]
    },
    {
      question: "How do you prefer to solve problems?",
      options: [
        "Through logical analysis and data",
        "By brainstorming creative solutions",
        "By collaborating with others",
        "Through hands-on experimentation"
      ]
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const careerRecommendations = [
    { title: "Software Engineering", match: "92%", description: "High analytical skills and problem-solving abilities" },
    { title: "Data Science", match: "87%", description: "Strong mathematical foundation and logical thinking" },
    { title: "Product Management", match: "83%", description: "Leadership potential and strategic thinking" },
  ];

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-success/20 bg-success/5 px-3 py-1 text-xs font-medium text-success mb-4">
                <CheckCircle className="mr-1 h-3 w-3" />
                Assessment Complete
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Your Personalized <span className="gradient-text">Career Recommendations</span>
              </h1>
              <p className="text-muted-foreground">
                Based on your responses, here are your top career matches with detailed pathways.
              </p>
            </div>

            <div className="grid gap-6 mb-8">
              {careerRecommendations.map((career, index) => (
                <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{career.title}</h3>
                    <div className="text-2xl font-bold text-primary">{career.match}</div>
                  </div>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <HeroButton variant="hero-outline" size="sm" onClick={() => navigate("/dashboard")}>
                    View Career Path
                  </HeroButton>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <HeroButton variant="hero" size="lg" onClick={() => navigate("/dashboard")}>
                Continue to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </HeroButton>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-20">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
              <Brain className="mr-1 h-3 w-3" />
              Career Discovery Quiz
            </div>
            <h1 className="text-3xl font-bold mb-4">
              Discover Your Perfect <span className="gradient-text">Career Path</span>
            </h1>
            <p className="text-muted-foreground">
              Answer a few questions to get personalized career recommendations powered by AI.
            </p>
          </div>

          <Card className="p-8 mb-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <h2 className="text-xl font-semibold mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className="w-full p-4 text-left border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          </Card>

          <div className="flex justify-between">
            <HeroButton
              variant="hero-ghost"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </HeroButton>

            <HeroButton variant="hero-ghost" onClick={() => navigate("/")}>
              Exit Quiz
            </HeroButton>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerQuiz;