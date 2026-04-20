import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Data Analysis Dashboard",
    description: "Interactive visualization of sales trends using Python and Tableau.",
    tags: ["Data Analysis", "Python"],
    url: "/projects/data-analysis-dashboard"
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
          {projects.map((project, index) => (
            <Link key={index} to={project.url}>
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
                  <Button variant="ghost" className="mt-4 w-full justify-start text-primary hover:bg-primary/10">
                    View Case Study →
                  </Button>
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