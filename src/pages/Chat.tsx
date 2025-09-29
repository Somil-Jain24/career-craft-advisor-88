import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { HeroButton } from "@/components/ui/hero-button";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const assistantMsg: ChatMessage = { id: crypto.randomUUID(), role: "assistant", content: data.reply };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: "assistant", content: "Sorry, I ran into an error." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 max-w-3xl">
        <Card className="p-0">
          <div ref={listRef} className="h-[60vh] overflow-y-auto p-4 space-y-3">
            {messages.length === 0 && (
              <div className="text-sm text-muted-foreground">Ask career questions like exams, colleges, or skills.</div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block rounded-lg px-3 py-2 text-sm ${m.role === "user" ? "bg-primary text-white" : "bg-muted"}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex items-center space-x-2">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <HeroButton variant="hero" size="sm" onClick={sendMessage} disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </HeroButton>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Chat;


