import { Button } from "@/components/ui/button";
import profilePhoto from "/lovable-uploads/41a6eac1-b9e4-40f9-ad15-4902d2be918b.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Quality Data.
                </span>
                <br />
                <span className="text-foreground">Better Decisions.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Uncovering the stories behind numbers with professional data analysis and virtual assistance services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="#contact">Get in Touch </a>
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant ring-4 ring-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Professional headshot" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
