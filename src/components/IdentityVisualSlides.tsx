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
      title: "Manual de Identidade Visual",
      content: "Capa do manual de marca do Cafezinho da Tânia.",
      image: "/lovable-uploads/e305cb7b-1ed7-4a97-ba19-17144d1a76b3.png"
    },
    {
      title: "O Projeto - Cafezinho da Tânia", 
      content: "Conceito e propósito: oferecer uma experiência acolhedora, saborosa e única.",
      image: "/lovable-uploads/b8f8bc10-0484-4e38-afe1-20e4077eb076.png"
    },
    {
      title: "Conceito Gastronômico",
      content: "Combinando o aroma do café fresco com o sabor das melhores tapiocas da região.",
      image: "/lovable-uploads/b5ed1af1-44be-4f76-8026-c99aa4a2d4ec.png"
    },
    {
      title: "Desenvolvimento do Logotipo",
      content: "Processo criativo e conceitual para a criação da marca.",
      image: "/lovable-uploads/e1123588-c95a-413e-a915-e812c2b3707b.png"
    },
    {
      title: "Logotipo Principal",
      content: "Versão final do logotipo do Cafezinho da Tânia.",
      image: "/lovable-uploads/d09dbd59-3a24-497a-8442-3a719b13811f.png"
    },
    {
      title: "Conceito Visual - Banner",
      content: "Desenvolvimento de materiais promocionais e de comunicação.",
      image: "/lovable-uploads/98a10786-afaf-468d-b689-da96283fe331.png"
    },
    {
      title: "Material Promocional",
      content: "Banner criado para um espaço acolhedor com tapiocas artesanais e café fresco.",
      image: "/lovable-uploads/ac17f2db-d101-481f-b987-99aa0aac5c11.png"
    },
    {
      title: "Versões do Logotipo",
      content: "Diferentes aplicações e versões da marca para diversos usos.",
      image: "/lovable-uploads/c927265c-4880-42e8-88c0-4af14a790014.png"
    },
    {
      title: "Variações Cromáticas",
      content: "Estudo de cores e aplicações da marca em diferentes contextos.",
      image: "/lovable-uploads/5e4ac08f-460c-4954-ac02-fdc104bb452c.png"
    },
    {
      title: "Paleta de Cores",
      content: "Definição das cores principais e complementares da identidade visual.",
      image: "/lovable-uploads/df4280ef-ca6a-4cb6-ac4b-5d5b1ecd23f7.png"
    },
    {
      title: "Aplicações em Papelaria",
      content: "Cartão de visita e especificações técnicas das cores da marca.",
      image: "/lovable-uploads/89b10a7d-1214-4175-91b7-4efe72b10714.png"
    },
    {
      title: "Variações de Tamanho",
      content: "Diferentes tamanhos e aplicações do logotipo para diversos contextos.",
      image: "/lovable-uploads/776bb542-f742-4635-a136-bad1fd1197a6.png"
    },
    {
      title: "Tipografia e Fontes",
      content: "Definição das fontes principais: Playfair Display e Hatton.",
      image: "/lovable-uploads/eb8ae4a6-f78a-4b02-81e0-8d434737553b.png"
    },
    {
      title: "Informações de Contato",
      content: "Página final com dados de contato da designer responsável pelo projeto.",
      image: "/lovable-uploads/93b362a5-9a42-4d83-abb9-eb07d6825f08.png"
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
          <h1 className="text-xl font-semibold">Manual de Marca - Cafezinho da Tânia</h1>
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
            {slides[currentSlide].image ? (
              <div className="flex justify-center">
                <img 
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].title} 
                  className="max-w-full h-auto rounded-lg shadow-lg max-h-96 object-contain"
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