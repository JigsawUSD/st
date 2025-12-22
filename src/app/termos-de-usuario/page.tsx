
import { BabyBitesLogo } from '@/components/icons';
import Link from 'next/link';

export default function TermosDeUsuario() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/">
          <BabyBitesLogo />
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-xl max-w-none">
          <h1>Termos de Usuário</h1>
          <p>
            Estes Termos de Usuário regem o seu acesso e uso dos produtos e serviços oferecidos pela Crescendo Saudável.
          </p>
          
          <h2>1. Sua Conta</h2>
          <p>
            Ao criar uma conta conosco ou realizar uma compra, você é responsável por manter a confidencialidade de
            suas informações de acesso. Você concorda em aceitar a responsabilidade por todas as atividades que
            ocorram sob sua conta.
          </p>

          <h2>2. Conduta do Usuário</h2>
          <p>
            Você concorda em não usar o site para qualquer finalidade ilegal ou proibida por estes termos. Você não
            pode usar o site de qualquer maneira que possa danificar, desativar, sobrecarregar ou prejudicar o site
            ou interferir no uso e aproveitamento de qualquer outra parte.
          </p>

          <h2>3. Conteúdo Gerado pelo Usuário</h2>
          <p>
            Se você postar comentários, depoimentos ou outro conteúdo, você concede à Crescendo Saudável um direito
            não exclusivo, livre de royalties, perpétuo, irrevogável e totalmente sublicenciável de usar, reproduzir,
            modificar, adaptar, publicar, traduzir, criar trabalhos derivados, distribuir e exibir tal conteúdo
            em todo o mundo, em qualquer mídia.
          </p>

          <h2>4. Privacidade</h2>
          <p>
            Nossa Política de Privacidade, que também rege sua visita ao nosso site, pode ser encontrada [aqui - link para política de privacidade, se houver]. Por favor, revise nossa Política de Privacidade para entender nossas práticas.
          </p>

          <h2>5. Isenção de Garantias e Limitação de Responsabilidade</h2>
          <p>
            Este site e todo o conteúdo são fornecidos "como estão", sem garantias de qualquer tipo. A Crescendo Saudável não garante que o site, suas informações ou emails enviados estejam livres de vírus ou outros componentes prejudiciais.
          </p>
          
          <h2>6. Lei Aplicável</h2>
          <p>
            Ao visitar nosso site, você concorda que as leis do Brasil, sem levar em conta os princípios de conflito de leis, regerão estes Termos de Usuário e qualquer disputa de qualquer tipo que possa surgir entre você e a Crescendo Saudável.
          </p>

          <p className="mt-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>
      </main>
      <footer className="bg-card border-t mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
            <p className="text-sm text-muted-foreground">COPYRIGHT © {new Date().getFullYear()} | TODOS OS DIREITOS RESERVADOS A CRESCENDO SAUDÁVEL.</p>
        </div>
      </footer>
    </div>
  );
}
