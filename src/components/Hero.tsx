import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <h2 className="text-lg text-muted-foreground tracking-wider uppercase">
                Designer Criativa
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="text-gradient-primary">Gabriela</span>
                <br />
                <span className="text-foreground">Dutra</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Transformando ideias em experiências visuais únicas e impactantes através do design.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium transition-smooth text-white border-0"
                onClick={() => scrollToSection('projetos')}
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
                onClick={() => scrollToSection('contato')}
              >
                Entre em Contato
              </Button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-secondary rounded-3xl blur-2xl scale-105 opacity-30"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-strong">
                <img 
                  src="/lovable-uploads/8d9da4c5-6059-4530-a45c-bf953e6852bd.png"
                  alt="Gabriela Dutra - Designer Criativa"
                  className="w-full h-auto rounded-2xl max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection('sobre')}
            className="text-muted-foreground hover:text-primary transition-smooth"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;