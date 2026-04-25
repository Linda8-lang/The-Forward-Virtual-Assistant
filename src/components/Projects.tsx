import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import reportPdf from "@/assets/autism_epilepsy_report.pdf";

const projects = [
  {
    title: "Autism/Epilepsy Analytics",
    description: "Direct access to the autism/epilepsy analytics report and live Power BI dashboard.",
    tags: ["Healthcare Analytics", "Power BI"],
    reportUrl: reportPdf,
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiMDY0ZmY5YWYtM2U0MS00YzAwLTgyYzItNGViNjVjODkxNWE3IiwidCI6ImRkMjQ2ZTRhLTU0MzQtNGUxNS04YWUzLTkxYWQ5Nzk3YjIwOSIsImMiOjN9"
  },
  {
    title: "Virtual Support Automation",
    description: "Streamlined workflow for a real estate firm, saving 10 hours weekly.",
    tags: ["Virtual Assistance", "Automation"],
    url: "/projects/virtual-support-automation"
  },
  {
    title: "Financial Forecasting",
    description: "Predictive modeling for small business budget planning.",
    tags: ["Statistics", "Excel"],
    url: "/projects/financial-forecasting"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const card = (
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
                  {project.reportUrl ? (
                    <div className="mt-4 flex flex-col gap-3">
                      <a
                        href={project.reportUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition"
                      >
                        Download Report
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center w-full rounded-md border border-primary/20 bg-secondary/20 px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/30 transition"
                      >
                        View Live Power BI
                      </a>
                    </div>
                  ) : (
                    <Link to={project.url} className="mt-4 inline-flex w-full justify-center rounded-md border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-medium text-primary hover:bg-primary/20 transition">
                      View Case Study →
                    </Link>
                  )}
                </CardContent>
              </Card>
            );

            return project.reportUrl ? (
              <div key={index}>{card}</div>
            ) : (
              <Link key={index} to={project.url}>{card}</Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;