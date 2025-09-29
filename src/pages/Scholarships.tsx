import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Scholarships = () => {
  const items = [
    { name: "National Merit Scholarship", deadline: "Dec 20, 2024" },
    { name: "STEM Innovators Grant", deadline: "Jan 10, 2025" },
    { name: "Women in Tech Scholarship", deadline: "Jan 25, 2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/5 via-background to-accent/10">
      <Header />
      <main className="container py-10">
        <div className="relative overflow-hidden rounded-2xl mb-8 border border-border bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 p-8">
          <div className="absolute -top-12 -right-10 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
          <h1 className="relative text-3xl font-bold gradient-text">Scholarships</h1>
          <p className="relative mt-2 text-muted-foreground">Find funding opportunities and keep track of deadlines.</p>
        </div>

        <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.08 }}
        >
          {items.map((s, i) => (
            <motion.div key={i} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <Card className="p-6 bg-card/90 backdrop-blur hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-lg font-semibold">{s.name}</h2>
                <div className="mt-2 inline-flex items-center rounded-md bg-warning/10 px-2 py-1 text-xs font-medium text-warning border border-warning/20">Deadline: {s.deadline}</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-border p-3 bg-background/50"><div className="font-semibold">₹50,000</div><div className="text-muted-foreground">Award</div></div>
                  <div className="rounded-lg border border-border p-3 bg-background/50"><div className="font-semibold">Merit</div><div className="text-muted-foreground">Type</div></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Scholarships;


