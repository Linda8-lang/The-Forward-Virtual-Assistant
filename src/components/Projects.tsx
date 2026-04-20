import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Data Analysis Dashboard",
    description: "Interactive visualization of sales trends using Python and Tableau.",
    tags: ["Data Analysis", "Python"]
  },
  {
    title: "Virtual Support Automation",
    description: "Streamlined workflow for a real estate firm, saving 10 hours weekly.",
    tags: ["Virtual Assistance", "Automation"]
  },
  {
    title: "Financial Forecasting",
    description: "Predictive modeling for small business budget planning.",
    tags: ["Statistics", "Excel"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-primary/10 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;