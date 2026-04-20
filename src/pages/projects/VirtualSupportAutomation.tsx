import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VirtualSupportAutomation = () => {
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
              Virtual Support Automation
            </h1>
            <p className="text-xl text-muted-foreground">
              Streamlined workflow for a real estate firm, saving 10 hours weekly
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                A growing real estate firm was overwhelmed with administrative tasks - property inquiries, document management, client follow-ups, and scheduling. Their small team was spending more time on repetitive tasks than on actual client relationships. I designed and implemented a comprehensive virtual support system that automated workflows, organized information, and streamlined communication processes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed">
                The firm received 50+ inquiries weekly across email, phone, and web forms with no centralized system. Agents spent 10+ hours per week on manual data entry, document organization, and follow-up reminders. Documents were scattered across different folders, client information was duplicated, and follow-ups often fell through the cracks. They needed a solution to capture, organize, and automate the entire client intake and support process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Workflow Visualization</h2>
              <div className="bg-secondary/20 rounded-lg p-8 text-center border-2 border-dashed border-primary/30">
                <div className="text-6xl mb-4">🔄</div>
                <p className="text-muted-foreground mb-2">Automated Client Intake Process Flow</p>
                <p className="text-sm text-muted-foreground">From initial inquiry to project completion - streamlined workflow diagram</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">System Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">📧</div>
                  <h4 className="font-semibold mb-2">Email Integration</h4>
                  <p className="text-sm text-muted-foreground">Automated inquiry capture and response routing</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">📁</div>
                  <h4 className="font-semibold mb-2">Document Management</h4>
                  <p className="text-sm text-muted-foreground">Organized file storage with instant access</p>
                </div>
                <div className="bg-secondary/20 rounded-lg p-6 text-center border-2 border-dashed border-primary/30">
                  <div className="text-4xl mb-3">⏰</div>
                  <h4 className="font-semibold mb-2">Automated Reminders</h4>
                  <p className="text-sm text-muted-foreground">Smart follow-up scheduling and notifications</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {["Virtual Assistance", "Automation", "Workflow Design", "Process Optimization"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Results & Impact</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>10 hours weekly time savings:</strong> Automated data entry, document organization, and reminders freed up team time for client relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Zero lost follow-ups:</strong> Automated reminders and task tracking ensured no client was forgotten, increasing closing rates</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Improved client experience:</strong> Faster response times and consistent communication increased client satisfaction scores by 40%</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Key Learnings</h2>
              <p className="text-muted-foreground leading-relaxed">
                The most successful automation projects focus on the pain points that waste the most time and create errors. In this case, understanding the real estate workflow deeply was crucial to designing a system that actually fit their needs. I learned that implementation speed matters - the sooner a team sees value, the more engaged they become in continuous improvement.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-border">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Project
            </Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default VirtualSupportAutomation;
