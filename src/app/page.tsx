import Image from 'next/image';
import { Baby, Carrot, ChefHat, Heart, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { RecipeGenerator } from '@/components/recipe-generator';
import { testimonials, faqs } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BabyBitesLogo } from '@/components/icons';

const findImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function Home() {
  const heroImage = findImage('hero');
  const galleryImages = [
    findImage('gallery1'),
    findImage('gallery2'),
    findImage('gallery3'),
    findImage('gallery4'),
  ].filter(Boolean);
  const guaranteeImage = findImage('guarantee');
  const testimonialImages = [
    findImage('testimonial1'),
    findImage('testimonial2'),
    findImage('testimonial3'),
  ].filter(Boolean);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
        <BabyBitesLogo className="text-primary" />
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105 rounded-full px-6 shadow-md">
          <a href="#pricing">Comprar Agora</a>
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center py-24 md:py-40 overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center z-0 opacity-10"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              A Solução Completa para a Alimentação do seu Bebê
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-foreground/80">
              Chega de dúvidas na hora de cozinhar! Tenha acesso a um livro de receitas exclusivo e um gerador com IA para criar pratos saudáveis e deliciosos em segundos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-7 rounded-full shadow-xl transition-transform transform hover:scale-105">
                <a href="#pricing">Quero Refeições Fáceis e Saudáveis</a>
              </Button>
              <div className="text-left bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-md">
                <p className="font-semibold text-lg text-foreground/70 line-through">de R$99,90</p>
                <p className="font-bold text-4xl text-primary">por R$39,90</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-foreground/60">Pagamento Único • Acesso Vitalício • 7 Dias de Garantia</p>
          </div>
        </section>

        {/* AI Generator Section */}
        <section id="generator" className="py-20 md:py-28 bg-card border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-accent/20 p-3 rounded-full mb-4">
              <Sparkles className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Crie Receitas na Hora com Nossa IA
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-md md:text-lg text-muted-foreground">
              Sem ideias para o jantar? Informe os ingredientes que você tem e a idade do seu bebê. Nossa inteligência artificial cria uma receita deliciosa e segura para você.
            </p>
            <RecipeGenerator />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Tudo que você precisa para refeições incríveis</h2>
            <div className="grid md:grid-cols-3 gap-10 text-center">
              <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <UtensilsCrossed className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mt-5">Catálogo Exclusivo</h3>
                <p className="mt-2 text-muted-foreground">Dezenas de receitas testadas e aprovadas por mamães e nutricionistas, sempre à sua mão.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Baby className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mt-5">Filtros por Idade</h3>
                <p className="mt-2 text-muted-foreground">Encontre facilmente refeições seguras e apropriadas para cada fase do seu bebê, da introdução alimentar aos 3 anos.</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-card rounded-2xl shadow-sm transition-all hover:shadow-lg hover:-translate-y-2">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Carrot className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mt-5">Ingredientes Simples</h3>
                <p className="mt-2 text-muted-foreground">Receitas práticas com ingredientes que você já tem em casa ou encontra em qualquer mercado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 md:py-28 bg-card border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Pratinhos que Despertam Sorrisos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-muted-foreground">
              Veja um pouco do que você encontrará em nosso catálogo. Pratos coloridos, nutritivos e, o mais importante, deliciosos!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {galleryImages.map((img, index) => img && (
                <Card key={index} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl rounded-2xl">
                  <CardContent className="p-0">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                      data-ai-hint={img.imageHint}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
              <Heart className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">O que as Mamães Estão Dizendo</h2>
            <p className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-muted-foreground">
              Nós amamos nossas clientes, e elas parecem nos amar de volta!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-left shadow-lg bg-card rounded-2xl">
                  <CardHeader className="flex-row gap-4 items-center">
                    {testimonialImages[index] && (
                       <Image
                        src={testimonialImages[index]!.imageUrl}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover"
                        data-ai-hint={testimonialImages[index]!.imageHint}
                      />
                    )}
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Tudo Esclarecido</h2>
            <p className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-muted-foreground text-center">
              Ainda tem alguma dúvida? Encontre sua resposta aqui.
            </p>
            <Accordion type="single" collapsible className="w-full mt-10">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-xl mb-4 shadow-sm">
                  <AccordionTrigger className="text-lg text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Guarantee & Final CTA Section */}
        <section id="pricing" className="py-20 md:py-28 bg-card border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {guaranteeImage && (
              <Image
                src={guaranteeImage.imageUrl}
                alt={guaranteeImage.description}
                width={150}
                height={150}
                className="mx-auto"
                data-ai-hint={guaranteeImage.imageHint}
              />
            )}
            <h2 className="text-3xl md:text-4xl font-bold mt-6">Sua Satisfação ou seu Dinheiro de Volta</h2>
            <p className="mt-4 max-w-3xl mx-auto text-md md:text-lg text-muted-foreground">
              Temos tanta confiança de que você vai amar nossas receitas que oferecemos uma garantia incondicional de 7 dias. Se não ficar 100% satisfeita, devolvemos seu dinheiro. Simples assim.
            </p>
            <div className="mt-12 p-8 bg-background rounded-2xl shadow-inner max-w-lg mx-auto border">
              <p className="text-xl font-bold text-foreground">Acesso completo por um preço especial de lançamento!</p>
              <div className="my-6">
                <span className="text-2xl font-semibold text-muted-foreground line-through">de R$99,90</span>
                <span className="text-6xl font-bold text-primary ml-4">por R$39,90</span>
              </div>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-8 py-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Garantir meu Acesso Imediato!
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">Compra segura e acesso vitalício por pagamento único.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <BabyBitesLogo className="text-primary" />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Baby Bites Hub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
