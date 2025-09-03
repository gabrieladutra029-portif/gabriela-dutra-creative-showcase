import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Identidade Visual - TechFlow",
      category: "Branding",
      description: "Desenvolvimento completo de identidade visual para startup de tecnologia, incluindo logotipo, paleta de cores e aplicações.",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      color: "from-purple-500 to-blue-500"
    },
    {
      id: 2,
      title: "App Mobile - FitTracker",
      category: "UX/UI Design",
      description: "Design de interface e experiência do usuário para aplicativo de fitness com foco na usabilidade e engajamento.",
      tags: ["UX/UI", "Mobile Design", "Prototyping"],
      color: "from-pink-500 to-purple-500"
    },
    {
      id: 3,
      title: "Website - Arte & Cultura",
      category: "Web Design",
      description: "Criação de website responsivo para galeria de arte com foco na experiência visual e navegação intuitiva.",
      tags: ["Web Design", "Responsive", "Art Direction"],
      color: "from-blue-500 to-pink-500"
    }
  ];

  return (
    <section id="projetos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meus <span className="text-gradient-primary">Projetos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma seleção dos meus trabalhos mais recentes, onde criatividade 
              e estratégia se encontram para criar soluções impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden shadow-soft hover:shadow-strong transition-smooth border-0 bg-white/80 backdrop-blur-sm"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-smooth"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                        variant="outline"
                        onClick={() => {
                          if (project.id === 1) {
                            navigate('/identity-visual-slides');
                          }
                        }}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        Ver
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                        variant="outline"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="text-xs border-primary/20 text-primary/80 hover:bg-primary/10 transition-smooth"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
            >
              Ver Todos os Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;