import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Forward Virtual Assistant
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              At TFVA we believe in offering the best to our customers. I specialize in transforming raw data into actionable insights that drive better business decisions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With expertise in data modeling, data cleaning, data visualization, and comprehensive data analysis, I help businesses uncover the stories behind their numbers and make informed decisions that lead to success.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Try my services: Data Modeling, Data Cleaning, Data Visualization & Data Analysis and you will never regret.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Data Modeling", description: "Structure your data for optimal analysis and insights" },
              { title: "Data Cleaning", description: "Ensure data quality and accuracy for reliable results" },
              { title: "Data Visualization", description: "Transform complex data into clear, actionable visualizations" },
              { title: "Data Analysis", description: "Extract meaningful insights to drive business growth" }
            ].map((service, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;