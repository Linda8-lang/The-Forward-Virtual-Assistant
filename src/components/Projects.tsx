import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

// Cards commented out below are hidden from the live site but kept for future updates.
// Their pages and routes in App.tsx are unchanged, so un-commenting an entry is enough to show it again.
const projects = [
  // Hidden: card text (Python/Tableau sales trends) does not match the page (Power BI autism & epilepsy report).
  // Suggested replacement text when re-enabling:
  //   title: "Autism & Epilepsy Analytics Dashboard",
  //   description: "Clinical analytics report and live Power BI dashboard on diagnosis trends and patient outcomes.",
  //   tags: ["Power BI", "Healthcare Analytics"],
  // {
  //   title: "Data Analysis Dashboard",
  //   description: "Interactive visualization of sales trends using Python and Tableau.",
  //   tags: ["Data Analysis", "Python"],
  //   url: "/projects/data-analysis-dashboard"
  // },
  {
    title: "Dynamic Row-Level Security",
    description: "A Power BI demonstration project built on synthetic data: each user sees only their own records, while managers see their whole reporting line.",
    tags: ["Power BI", "Security", "Demo Project"],
    url: "/projects/dynamic-row-level-security"
  },
  // Hidden: case study page still shows placeholder boxes instead of real visuals.
  // {
  //   title: "Virtual Support Automation",
  //   description: "Streamlined workflow for a real estate firm, saving 10 hours weekly.",
  //   tags: ["Virtual Assistance", "Automation"],
  //   url: "/projects/virtual-support-automation"
  // },
  // Hidden: case study page still shows placeholder boxes instead of real visuals.
  // {
  //   title: "Financial Forecasting",
  //   description: "Predictive modeling for small business budget planning.",
  //   tags: ["Statistics", "Excel"],
  //   url: "/projects/financial-forecasting"
  // }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projects that show how we approach common business data challenges.
          </p>
        </div>

        {/* Flex layout keeps the cards centred however many are visible */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={project.url}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <Card className="border-primary/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-primary">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* A span rather than a <Button>: a button inside a link is invalid HTML */}
                  <span className="mt-4 inline-flex text-sm font-medium text-primary">
                    View Case Study →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
