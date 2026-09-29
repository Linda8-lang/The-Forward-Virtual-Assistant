import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Closing call to action for case study pages, so they don't end in a dead end.
const CaseStudyCta = () => {
  return (
    <section className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
      <h2 className="text-2xl font-semibold mb-2">Have a similar challenge?</h2>
      <p className="text-muted-foreground mb-6">
        Tell us about your data and we'll discuss how we can help.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
          <Link to="/#contact">Start Your Project</Link>
        </Button>
        <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10" asChild>
          <Link to="/#services">See Our Services</Link>
        </Button>
      </div>
    </section>
  );
};

export default CaseStudyCta;
