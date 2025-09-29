import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HeroButton } from "@/components/ui/hero-button";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setStatus("Thank you! Your message has been sent.");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      setStatus("Sorry, something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <Header />
      <main className="container py-10 max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl mb-8 border border-border bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />
          <h1 className="relative text-3xl font-bold gradient-text">Contact Us</h1>
          <p className="relative mt-2 text-muted-foreground">Send your queries—we’ll get back to you soon.</p>
        </div>

        <Card className="p-6 space-y-4">
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Your name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Your email</label>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <textarea className="w-full rounded-md border border-input bg-background p-2 text-sm" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="How can we help?" />
            </div>
            {status && <div className="text-sm text-muted-foreground">{status}</div>}
            <HeroButton variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </HeroButton>
          </form>
          <p className="text-xs text-muted-foreground">Or email us at <span className="font-medium">somiljain024@gmail.com</span></p>
        </Card>
      </main>
    </div>
  );
};

export default Contact;


