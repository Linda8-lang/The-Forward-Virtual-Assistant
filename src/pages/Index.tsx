import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        {/*Comment out the About, Services, Contact*/}
        <AboutSection />
        {/*<ServicesSection />*/}
        {/*<ContactSection />*/}
      </main>
    </div>
  );
};

export default Index;
