
import { BabyBitesLogo } from '@/components/icons';
import Link from 'next/link';

export default function TermosDeServico() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link href="/">
          <BabyBitesLogo />
        </Link>
      </header>
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose lg:prose-xl max-w-none">
          <h1>Termos de Serviço</h1>
          <p>
            Bem-vindo ao Crescendo Saudável. Ao acessar nosso site e adquirir nossos produtos, você concorda em
            cumprir os seguintes termos e condições. Por favor, leia-os com atenção.
          </p>
          
          <h2>1. Uso do Site</h2>
          <p>
            Este site e seu conteúdo são destinados ao seu uso pessoal e não comercial. Você não pode modificar,
            copiar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar, criar trabalhos
            derivados, transferir ou vender qualquer informação, software, produtos ou serviços obtidos a partir
            deste site.
          </p>

          <h2>2. Produtos Digitais</h2>
          <p>
            Nossos produtos são entregues digitalmente. Após a confirmação do pagamento, você receberá acesso
            imediato ao conteúdo. Não há envio físico de produtos.
          </p>

          <h2>3. Pagamento</h2>
          <p>
            Aceitamos várias formas de pagamento, conforme listado em nosso checkout. Todas as transações são
            processadas através de gateways seguros.
          </p>

          <h2>4. Política de Reembolso</h2>
          <p>
            Oferecemos uma garantia de satisfação de 7 dias. Se você não estiver satisfeito com o produto, pode
            solicitar o reembolso total do valor pago dentro deste período.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo incluído neste site, como textos, gráficos, logos, imagens, bem como a compilação
            dos mesmos, é propriedade da Crescendo Saudável e protegido por leis de direitos autorais.
          </p>

          <h2>6. Limitação de Responsabilidade</h2>
          <p>
            As informações e receitas fornecidas em nosso ebook são para fins educacionais. Embora sigamos
            recomendações de órgãos de saúde, é crucial que você consulte o pediatra do seu bebê antes de
            introduzir novos alimentos. Não nos responsabilizamos por quaisquer problemas de saúde ou alergias
            que possam ocorrer.
          </p>
          
          <h2>7. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de fazer alterações em nosso site, políticas e nestes Termos de Serviço a
            qualquer momento.
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
