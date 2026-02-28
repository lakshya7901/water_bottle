import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    /* Using relative z-10 to stay above the WaterBackground */
    <footer className="relative z-10 border-t border-border/20 bg-background/50 backdrop-blur-sm pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-start">
          
          {/* Brand Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 group">
              <Droplets className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
              <span className="text-xl font-display font-bold text-gradient-water">
                AquaPure
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
              Premium mineral water for a healthier tomorrow.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>

          {/* Legal Information */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-border/10 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} AquaPure Industries Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;