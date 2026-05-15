import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DynamicRowLevelSecurity = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-secondary"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Button>

        <article className="space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dynamic Row-Level Security in Power BI: Synthetic Data
            </h1>
            <p className="text-xl text-muted-foreground">
              Security of Data in organization is very important, and it can be enforced by filtering people. Once people are filtered, the data follows suit.
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                This repository demonstrates a professional implementation of Dynamic Row-Level Security in Power BI. The project solves a common business challenge: ensuring users only see their own data, while managers can see a consolidated view of their entire reporting line.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Dynamic Row Level Security Project</h2>
              <div className="grid gap-4 md:grid-cols-2">

                <a
                  href="https://github.com/Linda8-lang/Dynamic-Row-Level-Security/blob/main/README.md"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-primary/30 bg-secondary/20 p-6 hover:bg-secondary transition-colors"
                >
                  <div className="text-4xl mb-3">🔗</div>
                  <h3 className="text-lg font-semibold mb-2">View Live Power BI Project</h3>
                  <p className="text-sm text-muted-foreground">
                    Open the dynamic row-level security demonstration in Power BI.
                  </p>
                </a>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DynamicRowLevelSecurity;
