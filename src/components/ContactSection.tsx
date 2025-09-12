import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+254702430510",
      href: "https://wa.me/254702430510",
      emoji: "📱"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254702430510", 
      href: "tel:+254702430510",
      emoji: "☎️"
    },
    {
      icon: Mail,
      label: "Email",
      value: "alusolinda2020@gmail.com",
      href: "mailto:alusolinda2020@gmail.com",
      emoji: "✉️"
    }
  ];

  const socialLinks = [
    {
      label: "Twitter",
      value: "@LOpudo",
      href: "https://twitter.com/LOpudo",
      emoji: "🐦"
    },
    {
      label: "LinkedIn", 
      value: "View Profile",
      href: "https://www.linkedin.com/in/linda-aluso-business-data-analytics/",
      emoji: "💼"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to help you move forward with confidence
          </p>
        </div>

        <Card className="p-8 backdrop-blur-sm bg-background/80 border border-primary/20 shadow-2xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <Button
                key={method.label}
                variant="ghost"
                className="h-auto p-6 flex flex-col items-center space-y-3 hover:bg-secondary/50 hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary/20"
                asChild
              >
                <a href={method.href} target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl">{method.emoji}</span>
                  <method.icon className="h-6 w-6 text-primary" />
                  <div className="text-center">
                    <div className="font-semibold text-foreground">{method.label}</div>
                    <div className="text-sm text-muted-foreground">{method.value}</div>
                  </div>
                </a>
              </Button>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-border/50">
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  className="flex items-center space-x-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <span>{social.emoji}</span>
                    <span>{social.label}</span>
                    <span className="text-sm text-muted-foreground">
                      {social.value}
                    </span>
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg italic text-primary font-medium">
              I'm just a message away. Ready to help you move forward with confidence.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;