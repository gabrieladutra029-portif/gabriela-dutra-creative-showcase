import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "gabriela.dutra@email.com",
      action: "mailto:gabriela.dutra@email.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (61) 98365-5910",
      action: "tel:+556198365-5910"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", url: "https://www.instagram.com/gabidutra.designer/" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/gabriela-dutra-oliveira" }
  ];

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos <span className="text-gradient-primary">Conversar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tem um projeto em mente? Vamos transformar suas ideias em realidade. 
              Entre em contato e vamos criar algo incrível juntos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-soft border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Envie uma Mensagem
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nome
                      </label>
                      <Input 
                        placeholder="Seu nome completo"
                        className="border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email
                      </label>
                      <Input 
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        className="border-border/50 focus:border-primary transition-smooth"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Assunto
                    </label>
                    <Input 
                      placeholder="Sobre o que você gostaria de falar?"
                      className="border-border/50 focus:border-primary transition-smooth"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensagem
                    </label>
                    <Textarea 
                      placeholder="Conte-me mais sobre seu projeto..."
                      rows={5}
                      className="border-border/50 focus:border-primary transition-smooth resize-none"
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-primary hover:shadow-medium transition-bounce text-white border-0"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="shadow-soft border-0 bg-white/80 backdrop-blur-sm hover:shadow-medium transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{item.title}</h4>
                          {item.action ? (
                            <a 
                              href={item.action}
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {item.info}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{item.info}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Me Siga nas Redes
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-white hover:shadow-medium transition-bounce"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;