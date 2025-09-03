import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Award, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const skills = [
    "Design Gráfico", "UX/UI Design", "Branding", "Ilustração", 
    "Adobe Creative Suite", "Figma", "Prototipagem", "Design Thinking"
  ];

  const achievements = [
    { icon: Award, title: "2+ Anos", description: "Experiência em Design" }
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-gradient-primary">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sou uma designer apaixonada por criar soluções visuais que conectam marcas 
              aos seus públicos de forma autêntica e impactante.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Minha Jornada Criativa
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Com mais de 2 anos de experiência em design, especializo-me em criar 
                identidades visuais marcantes e experiências digitais intuitivas. 
                Minha abordagem combina criatividade estratégica com execução técnica precisa.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Acredito que o bom design vai além da estética - ele comunica, 
                inspira e resolve problemas reais. Cada projeto é uma oportunidade 
                de contar uma história única e memorável.
              </p><br />


              <a href="/CurriculoGabrielaATS.pdf" download>
              <Button 
                className="bg-gradient-primary hover:shadow-medium transition-smooth text-white border-0"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Habilidades & Especialidades
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-3 py-1 text-sm bg-skills-orange text-skills-orange-foreground border border-skills-orange hover:bg-skills-orange/80 transition-smooth"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((item, index) => (
              <Card key={index} className="text-center p-6 shadow-soft hover:shadow-medium transition-smooth border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-primary">{item.title}</h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;