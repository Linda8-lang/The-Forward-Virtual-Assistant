import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Linda Aluso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional Data Analyst & Virtual Assistant with a passion for turning data into actionable insights
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Personal Story */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">My Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Welcome to The Forward Virtual Assistant (TFVA). I'm Linda Aluso, a dedicated data professional with over 5 years of experience in transforming complex datasets into clear, actionable business insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                My journey began with a fascination for patterns hidden within numbers. Today, I help businesses across various industries make informed decisions through comprehensive data analysis, visualization, and strategic insights.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TFVA, I believe every dataset tells a story. My mission is to help you discover that story and use it to drive your business forward with confidence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">My Approach</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Listen First:</strong> Understanding your specific business challenges and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Quality Focus:</strong> Ensuring data accuracy and reliability in every project</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Clear Communication:</strong> Presenting insights in accessible, actionable formats</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span><strong>Continuous Support:</strong> Providing ongoing guidance for data-driven decisions</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Skills & Expertise */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Expertise & Skills</h3>
            <div className="space-y-4">
              {[
                { skill: "Data Analysis", level: "Expert", percentage: "95%" },
                { skill: "Data Visualization", level: "Expert", percentage: "90%" },
                { skill: "Excel & Google Sheets", level: "Advanced", percentage: "95%" },
                { skill: "SQL & Databases", level: "Advanced", percentage: "85%" },
                { skill: "Statistical Analysis", level: "Advanced", percentage: "80%" },
                { skill: "Project Management", level: "Proficient", percentage: "80%" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-muted-foreground">{item.level}</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: item.percentage }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Experience Highlights</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 10+ successful data projects</li>
                <li>• 5+ years in educational data analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
