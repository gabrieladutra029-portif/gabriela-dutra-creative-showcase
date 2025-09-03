import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "gabriela.dutra@email.com",
      action: "mailto:gabriela.dutra@email.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (61) 98365-5910",
      action: "tel:+5561983655910",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/gabidutra.designer/",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gabriela-dutra-oliveira",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          {/* Título */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="text-gradient-primary">Conversar</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Tem um projeto em mente? Entre em contato comigo e vamos criar algo
            incrível juntos.
          </p>

          {/* Informações de contato */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="shadow-soft border-0 bg-white/80 backdrop-blur-sm hover:shadow-medium transition-smooth"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
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

          {/* Redes sociais */}
          <div className="mt-12">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Me siga nas redes
            </h4>
            <div className="flex justify-center space-x-4">
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
    </section>
  );
};

export default Contact;
