const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} The Forward Virtual Assistant (TFVA). All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="mailto:alusolinda2020@gmail.com" className="hover:text-primary transition-colors">
            Email
          </a>
          <a href="https://wa.me/254702430510" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/linda-aluso-business-data-analytics/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
