import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, Palette, TrendingUp, Clock, Award } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Modeling",
      description: "Design robust data structures and relationships that serve as the foundation for reliable analysis.",
      features: ["Entity Relationship Design", "Data Schema Optimization", "Performance Tuning"]
      //price: "Starting at $150"
    },
    {
      icon: BarChart3,
      title: "Data Cleaning",
      description: "Transform messy, incomplete data into clean, reliable datasets ready for analysis.",
      features: ["Data Validation", "Duplicate Removal", "Missing Value Treatment"]
      //price: "Starting at $100"
    },
    {
      icon: Palette,
      title: "Data Visualization",
      description: "Create compelling visual stories that make complex data insights accessible to stakeholders.",
      features: ["Interactive Dashboards", "Custom Charts", "Report Design"]
      //price: "Starting at $200"
    },
    {
      icon: TrendingUp,
      title: "Data Analysis",
      description: "Extract actionable insights and patterns that drive strategic business decisions.",
      features: ["Statistical Analysis", "Trend Identification", "Predictive Modeling"],
      //price: "Starting at $250"
    }
  ];

  const benefits = [
    { icon: Clock, title: "Fast Turnaround", description: "Most projects completed within 3-5 business days" },
    { icon: Award, title: "Quality Guarantee", description: "100% satisfaction guarantee with unlimited revisions" },
    { icon: TrendingUp, title: "Proven Results", description: "Helped 1+ businesses make better data-driven decisions" }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Data Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive data solutions tailored to your business needs. From raw data to actionable insights.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-primary/10">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                <p className="text-2xl font-bold text-accent">{service.price}</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-background rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Why Choose TFVA?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Transform Your Data?</h3>
          <p className="text-muted-foreground mb-6">Let's discuss your project and create a custom solution for your needs.</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
