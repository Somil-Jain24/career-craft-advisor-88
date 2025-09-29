import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Colleges = () => {
  const items = [
    { name: "Indian Institute of Technology Bombay", city: "Mumbai", rank: 1 },
    { name: "Indian Institute of Technology Delhi", city: "New Delhi", rank: 2 },
    { name: "Indian Institute of Science", city: "Bengaluru", rank: 3 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <Header />
      <main className="container py-10">
        <div className="relative overflow-hidden rounded-2xl mb-8 border border-border bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-8">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />
          <h1 className="relative text-3xl font-bold gradient-text">Top Colleges</h1>
          <p className="relative mt-2 text-muted-foreground">Explore renowned institutions and their highlights.</p>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          {items.map((c, i) => (
            <motion.div key={i} variants={{ hidden: { y: 16, opacity: 0 }, visible: { y: 0, opacity: 1 } }}>
              <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card/90 backdrop-blur">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{c.name}</h2>
                    <p className="text-sm text-muted-foreground">{c.city}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-white shadow">#{c.rank}</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="rounded-lg border border-border p-3 bg-background/50"><div className="font-semibold">95%</div><div className="text-muted-foreground">Placement</div></div>
                  <div className="rounded-lg border border-border p-3 bg-background/50"><div className="font-semibold">A+</div><div className="text-muted-foreground">NAAC</div></div>
                  <div className="rounded-lg border border-border p-3 bg-background/50"><div className="font-semibold">100+</div><div className="text-muted-foreground">Courses</div></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Colleges;


