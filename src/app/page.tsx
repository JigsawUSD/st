import Image from 'next/image';
import { Baby, Carrot, ChefHat, Heart, UtensilsCrossed, CheckCircle2, HelpCircle, Flame, ShieldCheck, ListChecks, BookOpenCheck, Snowflake, ShieldAlert, BrainCircuit, Sparkles, Star, Salad, ClipboardCheck, Clock, Smile, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <BabyBitesLogo className="text-primary" />
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-transform transform hover:scale-105 rounded-full px-5 py-2 text-sm sm:px-6 sm:text-base shadow-md">
          <a href="#pricing">Comprar Agora</a>
        </Button>
      </header>

      <main className="flex-1">
        {/* VSL Section */}
        <section className="bg-slate-900 py-12 md:py-20 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              A Solução Definitiva para a Alimentação do seu Bebê
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
              Assista ao vídeo abaixo e descubra como tornar as refeições mais fáceis e nutritivas.
            </p>
            <div className="mt-8 max-w-4xl mx-auto">
              <div className="aspect-video bg-black rounded-lg shadow-2xl overflow-hidden">
                {/* Responsive Embed for Video */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=LbfL1tWc-C3hY_aF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-10">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg sm:text-xl px-10 py-7 rounded-full shadow-xl transition-transform transform hover:scale-105 animate-pulse">
                <a href="#pricing">QUERO ACESSO IMEDIATO POR R$39,90</a>
              </Button>
              <p className="mt-4 text-sm text-slate-400">Pagamento Único • Acesso Vitalício • 7 Dias de Garantia</p>
              <p className="mt-2 text-sm font-semibold text-white">Oferta válida por poucos dias!</p>
              <p className="text-sm text-slate-300">Acesso imediato após a compra</p>
            </div>
          </div>
        </section>

        {/* New Content Section */}
        <section className="py-16 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">A solução completa para alimentar seu bebê com saúde e praticidade</h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Criado por uma mãe pesquisadora que já passou pelas suas dúvidas e reuniu tudo o que você precisa — sem enrolação, sem medo de errar.
            </p>
            <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Refeições completas</h3>
                  <p className="text-muted-foreground">A partir dos 6 meses, com todos os nutrientes que seu bebê precisa.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Receitas validadas</h3>
                  <p className="text-muted-foreground">Simples, nutritivas e testadas por milhares de famílias.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Orientação clara</h3>
                  <p className="text-muted-foreground">Acompanhamento por faixas etárias para você se sentir segura.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-lg">
                <CheckCircle2 className="h-6 w-6 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold">Bônus exclusivos</h3>
                  <p className="text-muted-foreground">Ferramentas e guias para facilitar ainda mais o seu dia a dia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Achieve Section */}
        <section className="py-16 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <div className="flex justify-center items-center gap-2">
                <Star className="h-6 w-6 text-yellow-400" />
                <Star className="h-8 w-8 text-yellow-400" />
                <Star className="h-6 w-6 text-yellow-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">O que você vai conquistar com o Crescendo Saudável:</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Salad className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mais variedade</h3>
                  <p className="text-muted-foreground mt-1">Fim da monotonia no prato do bebê</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ClipboardCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Segurança alimentar</h3>
                  <p className="text-muted-foreground mt-1">Saiba o que, quando e como oferecer</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Praticidade</h3>
                  <p className="text-muted-foreground mt-1">Receitas rápidas que cabem na sua rotina</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Smile className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mais tranquilidade</h3>
                  <p className="text-muted-foreground mt-1">Sem estresse na hora de comer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Este material é para você que...</h2>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
                ...quer parar de sofrer com a alimentação do bebê e precisa de uma solução prática, segura e realista.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <Card className="bg-card text-center shadow-lg rounded-2xl p-4">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <HelpCircle className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-lg">Está insegura sobre o que oferecer</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-center shadow-lg rounded-2xl p-4">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ListChecks className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-lg">Quer refeições saudáveis e práticas</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-center shadow-lg rounded-2xl p-4">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-lg">Tem medo de engasgos e alergias</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-center shadow-lg rounded-2xl p-4">
                <CardContent className="flex flex-col items-center gap-3 pt-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Flame className="h-8 w-8 text-primary" />
                  </div>
                  <p className="font-semibold text-lg">Está cansada de não saber o que fazer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="py-16 md:py-28 bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center">
              <p className="font-bold text-primary">APROVEITE E RECEBA, TOTALMENTE GRÁTIS,</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">+ 5 BÔNUS INCRÍVEIS!</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bonus 1 */}
              <Card className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl shadow-lg border-l-4 border-primary">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <BookOpenCheck className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Guia Ilustrado Completo sobre Introdução Alimentar</CardTitle>
                  <CardDescription className="mt-1 text-sm">Tudo que você precisa saber para iniciar com segurança, com imagens e orientações práticas.</CardDescription>
                  <p className="text-xs font-semibold text-primary/80 mt-2 line-through">Valor: R$ 29,00</p>
                </div>
              </Card>
              {/* Bonus 2 */}
              <Card className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl shadow-lg border-l-4 border-primary">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Snowflake className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Dicas para congelamento e descongelamento</CardTitle>
                  <CardDescription className="mt-1 text-sm">Economize tempo com segurança e organização ao preparar as refeições do seu bebê.</CardDescription>
                   <p className="text-xs font-semibold text-primary/80 mt-2 line-through">Valor: R$ 17,00</p>
                </div>
              </Card>
              {/* Bonus 3 */}
              <Card className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl shadow-lg border-l-4 border-primary">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <ShieldAlert className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Alimentos alergênicos e a janela imunológica</CardTitle>
                  <CardDescription className="mt-1 text-sm">Aprenda como oferecer alimentos potencialmente alergênicos sem medo.</CardDescription>
                   <p className="text-xs font-semibold text-primary/80 mt-2 line-through">Valor: R$ 22,00</p>
                </div>
              </Card>
              {/* Bonus 4 */}
              <Card className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl shadow-lg border-l-4 border-primary">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Estratégias para bebês que não querem comer</CardTitle>
                  <CardDescription className="mt-1 text-sm">Soluções práticas e testadas para lidar com recusas alimentares sem estresse.</CardDescription>
                   <p className="text-xs font-semibold text-primary/80 mt-2 line-through">Valor: R$ 27,00</p>
                </div>
              </Card>
              {/* Bonus 5 */}
               <Card className="flex flex-col sm:flex-row items-start gap-4 p-5 rounded-2xl shadow-lg border-l-4 border-primary md:col-span-2">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Inspirações de pratinhos</CardTitle>
                  <CardDescription className="mt-1 text-sm">Ideias visuais para montar pratos lindos, nutritivos e atrativos para cada fase do bebê.</CardDescription>
                  <p className="text-xs font-semibold text-primary/80 mt-2 line-through">Valor: R$ 19,00</p>
                </div>
              </Card>
            </div>
             <div className="mt-12 text-center bg-background/70 p-4 rounded-lg">
                <p className="text-lg text-muted-foreground">Valor total em bônus que você receberá GRÁTIS:</p>
                <p className="text-3xl font-bold text-primary mt-1">R$ 114,00</p>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg sm:text-xl px-10 py-7 rounded-full shadow-xl transition-transform transform hover:scale-105 animate-pulse">
                <a href="#pricing">Não perca essa oportunidade</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-28 bg-card border-y">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Pratinhos que Despertam Sorrisos</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              Veja um pouco do que você encontrará em nosso catálogo. Pratos coloridos, nutritivos e, o mais importante, deliciosos!
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-12">
              {galleryImages.map((img, index) => img && (
                <Card key={index} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl rounded-xl md:rounded-2xl">
                  <CardContent className="p-0">
                    <Image
                      src={img.imageUrl}
                      alt={img.description}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full aspect-[4/3]"
                      data-ai-hint={img.imageHint}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-28 bg-secondary/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block bg-primary/10 p-3 rounded-full mb-4">
              <Heart className="h-8 w-8 md:h-10 md:w-10 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">O que as Mamães Estão Dizendo</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              Nós amamos nossas clientes, e elas parecem nos amar de volta!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-10 md:mt-12">
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
                      <CardTitle className="text-base md:text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">{testimonial.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base text-foreground/80">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* New Guarantee Section */}
        <section className="py-16 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-card rounded-2xl shadow-xl border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                {guaranteeImage && (
                  <Image
                    src={guaranteeImage.imageUrl}
                    alt={guaranteeImage.description}
                    width={200}
                    height={200}
                    className="mx-auto"
                    data-ai-hint={guaranteeImage.imageHint}
                  />
                )}
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-primary">GARANTIA <span className="bg-destructive text-destructive-foreground px-2">INCONTESTÁVEL</span> DE 7 DIAS</h2>
                <p className="mt-2 text-lg sm:text-xl font-semibold text-foreground">ZERO RISCO — SÓ BENEFÍCIO!</p>
                <p className="mt-4 max-w-xl text-base md:text-lg text-muted-foreground">
                  Se em até 7 dias você não sentir que esse material te ajudou, é só pedir reembolso. Sem perguntas, sem complicações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-28">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Tudo Esclarecido</h2>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground text-center">
              Ainda tem alguma dúvida? Encontre sua resposta aqui.
            </p>
            <Accordion type="single" collapsible className="w-full mt-10">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card px-4 sm:px-6 rounded-xl mb-4 shadow-sm">
                  <AccordionTrigger className="text-base sm:text-lg text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="pricing" className="py-16 md:py-28 bg-slate-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Pronta para transformar a alimentação do seu bebê?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
             Tenha acesso vitalício ao guia completo, bônus exclusivos e a tranquilidade que você merece.
            </p>
            <div className="mt-12 p-6 sm:p-8 bg-card text-foreground rounded-2xl shadow-2xl max-w-lg mx-auto border">
              <p className="text-lg sm:text-xl font-bold text-foreground">Acesso completo por um preço especial de lançamento!</p>
              <div className="my-6 flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-semibold text-muted-foreground line-through">de R$99,90</span>
                <span className="text-5xl sm:text-6xl font-bold text-primary">por R$39,90</span>
              </div>
              <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg sm:text-xl px-8 py-7 sm:py-8 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-pulse">
                Garantir meu Acesso Imediato!
              </Button>
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground">Compra segura e acesso vitalício por pagamento único.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center items-center gap-4 text-center">
          <a href="https://www.instagram.com/crescendosaudavel.oficial" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Instagram className="h-5 w-5" />
            <span>crescendosaudavel.oficial</span>
          </a>
          <p className="text-sm text-muted-foreground">COPYRIGHT © {new Date().getFullYear()} | TODOS OS DIREITOS RESERVADOS A CRESCENDO SAUDÁVEL.</p>
          <p className="text-xs text-muted-foreground max-w-3xl">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
          </p>
        </div>
      </footer>
    </div>
  );
}
