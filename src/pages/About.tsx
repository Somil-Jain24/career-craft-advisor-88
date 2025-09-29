import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/5 via-background to-primary/10">
      <Header />
      <main className="container py-10 max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl mb-8 border border-border bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-8">
          <div className="absolute -top-12 -left-14 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-12 -right-14 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <h1 className="relative text-3xl font-bold gradient-text">About Career Craft</h1>
          <p className="relative mt-2 text-muted-foreground">Our story, mission, and the impact we strive for.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Card className="p-6 space-y-3 bg-card/90 backdrop-blur">
              <h2 className="text-xl font-semibold">Mission</h2>
              <p className="text-muted-foreground">
                Empower every student to make confident, informed career decisions with accessible AI guidance.
              </p>
            </Card>
          </motion.div>
          <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            <Card className="p-6 space-y-3 bg-card/90 backdrop-blur">
              <h2 className="text-xl font-semibold">What we do</h2>
              <p className="text-muted-foreground">
                From aptitude discovery and roadmaps to college and scholarship matching, we simplify career planning.
              </p>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default About;


