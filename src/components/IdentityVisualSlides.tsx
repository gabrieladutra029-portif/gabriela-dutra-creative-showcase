import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const IdentityVisualSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const totalSlides = 14;

  const slides = [
    {
      title: "Identidade Visual - Página 1",
      content: "Conceitos iniciais e briefing do projeto de identidade visual."
    },
    {
      title: "Identidade Visual - Página 2", 
      content: "Análise de mercado e referências visuais."
    },
    {
      title: "Identidade Visual - Página 3",
      content: "Desenvolvimento do conceito e moodboard."
    },
    {
      title: "Identidade Visual - Página 4",
      content: "Estudos tipográficos e paleta de cores."
    },
    {
      title: "Identidade Visual - Página 5",
      content: "Criação do logotipo - primeira versão."
    },
    {
      title: "Identidade Visual - Página 6",
      content: "Refinamento e evolução do logotipo."
    },
    {
      title: "Identidade Visual - Página 7",
      content: "Versões do logotipo e variações."
    },
    {
      title: "Identidade Visual - Página 8",
      content: "Manual de identidade visual - grid e construção."
    },
    {
      title: "Identidade Visual - Página 9",
      content: "Aplicações em papelaria institucional."
    },
    {
      title: "Identidade Visual - Página 10",
      content: "Aplicações digitais e redes sociais."
    },
    {
      title: "Identidade Visual - Página 11",
      content: "Sinalização e materiais promocionais."
    },
    {
      title: "Identidade Visual - Página 12",
      content: "Mockups e apresentação final."
    },
    {
      title: "Identidade Visual - Página 13",
      content: "Guia de implementação e uso da marca."
    },
    {
      title: "Identidade Visual - Página 14",
      content: "Conclusão e entregáveis finais do projeto."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => navigate('/')}>
            <X className="h-4 w-4 mr-2" />
            Fechar
          </Button>
          <h1 className="text-xl font-semibold">Identidade Visual</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          {currentSlide + 1} de {totalSlides}
        </div>
      </div>

      {/* Main slide area */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-4xl bg-card rounded-lg border p-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {slides[currentSlide].content}
          </p>
          
          {/* Slide content */}
          <div className="mt-12">
            {currentSlide === 0 ? (
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/e305cb7b-1ed7-4a97-ba19-17144d1a76b3.png" 
                  alt="Manual de Marca - Cafezinho da Tânia" 
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ) : (
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">
                  Conteúdo da página {currentSlide + 1}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-card border-t p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>

          {/* Slide indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide
                    ? 'bg-primary'
                    : 'bg-muted hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
          >
            Próximo
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IdentityVisualSlides;