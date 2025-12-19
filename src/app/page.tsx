import Image from 'next/image';
import { Baby, Carrot, ChefHat, ChevronDown, Heart, Sparkles, UtensilsCrossed } from 'lucide-react';
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
    <div className="flex flex-col min-h-dvh bg-background">
      <header className="container mx-auto px-4 py-6">
        <BabyBitesLogo className="text-primary" />
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative text-center py-20 md:py-32 overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover object-center z-0 opacity-20"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="container relative z-10 mx-auto px-4">
            <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground/90">
              Receitas Deliciosas e Saudáveis para o seu Bebê
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/70">
              Cansada de não saber o que cozinhar? Nosso livro de receitas e gerador com IA são a solução perfeita para mamães modernas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <a href="#pricing">Comprar Agora</a>
              </Button>
              <div className="text-left">
                <p className="font-bold text-2xl text-foreground/80 line-through">de R$99,90</p>
                <p className="font-bold text-4xl text-accent">por R$27,90</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-foreground/60">Pagamento 100% Seguro • 7 Dias de Garantia</p>
          </div>
        </section>

        {/* AI Generator Section */}
        <section id="generator" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <Sparkles className="mx-auto h-12 w-12 text-accent" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">
              Gere Receitas na Hora com Inteligência Artificial
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-md md:text-lg text-muted-foreground">
              Sem ideias? Diga-nos os ingredientes que você tem e a idade do seu bebê, e nossa IA criará uma receita deliciosa e segura para você em segundos.
            </p>
            <RecipeGenerator />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 p-4 rounded-full">
                  <UtensilsCrossed className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold mt-4">Catálogo de Receitas</h3>
                <p className="mt-2 text-muted-foreground">Dezenas de receitas testadas e aprovadas por mamães e nutricionistas.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Baby className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold mt-4">Filtrado por Idade</h3>
                <p className="mt-2 text-muted-foreground">Encontre facilmente refeições seguras e apropriadas para cada fase do seu bebê.</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-primary/20 p-4 rounded-full">
                  <Carrot className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-headline text-xl font-bold mt-4">Ingredientes Simples</h3>
                <p className="mt-2 text-muted-foreground">Receitas fáceis de fazer com ingredientes que você encontra em qualquer lugar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Receitas que seu bebê vai amar</h2>
            <p className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-muted-foreground">
              Veja um pouco do que você encontrará em nosso catálogo. Pratos coloridos, nutritivos e, o mais importante, deliciosos!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {galleryImages.map((img, index) => img && (
                <Card key={index} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
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
        <section className="py-16 md:py-24 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <Heart className="mx-auto h-12 w-12 text-pink-500" />
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-4">O que as mamães estão dizendo</h2>
            <p className="mt-4 max-w-2xl mx-auto text-md md:text-lg text-muted-foreground">
              Nós amamos nossos clientes, e eles parecem nos amar de volta!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-left shadow-lg">
                  <CardHeader className="flex-row gap-4 items-center">
                    {testimonialImages[index] && (
                       <Image
                        src={testimonialImages[index]!.imageUrl}
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="rounded-full"
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
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Perguntas Frequentes</h2>
            <Accordion type="single" collapsible className="w-full mt-8">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Guarantee & Final CTA Section */}
        <section id="pricing" className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 text-center">
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
            <h2 className="font-headline text-3xl md:text-4xl font-bold mt-6">Risco Zero para Você!</h2>
            <p className="mt-4 max-w-3xl mx-auto text-md md:text-lg text-muted-foreground">
              Temos tanta confiança de que você vai amar nossas receitas que oferecemos uma garantia de 7 dias. Se não ficar satisfeita, devolvemos seu dinheiro, sem perguntas.
            </p>
            <div className="mt-10 p-8 bg-background rounded-2xl shadow-inner max-w-md mx-auto">
              <p className="text-lg font-bold text-foreground/80">Acesso completo por um preço especial</p>
              <div className="my-4">
                <span className="text-2xl font-bold text-foreground/60 line-through">de R$99,90</span>
                <span className="text-5xl font-bold text-accent ml-4">por R$27,90</span>
              </div>
              <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-8 py-7 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Quero Acesso Imediato!
              </Button>
              <p className="mt-4 text-xs text-muted-foreground">Compra segura e acesso vitalício.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <BabyBitesLogo className="text-primary" />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Baby Bites Hub. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
