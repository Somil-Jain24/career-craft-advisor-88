import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Header } from "@/components/Header";
import { HeroButton } from "@/components/ui/hero-button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      // Demo login: accept any credentials and store locally
      login({ name: name.trim(), email: email.trim() });
      navigate("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-10 max-w-lg">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-1">Login</h1>
          <p className="text-muted-foreground mb-6">Welcome back to Career Craft</p>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div className="text-sm text-red-600">{error}</div>}
            <HeroButton variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </HeroButton>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default Login;


