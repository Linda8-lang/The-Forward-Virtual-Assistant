import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex-shrink-0" onClick={() => setIsOpen(false)}>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <span className="hidden sm:inline">The Forward Virtual Assistant</span>
              <span className="sm:hidden">TFVA</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-colors"
                asChild
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
            <Button className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span className="sr-only">{isOpen ? "Close main menu" : "Open main menu"}</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base text-muted-foreground hover:text-primary hover:bg-secondary/50"
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#contact" onClick={() => setIsOpen(false)}>Start Your Project</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
