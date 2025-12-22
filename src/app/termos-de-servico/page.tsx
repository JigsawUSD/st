
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
          <h1 className="mb-8">Termos de Serviço</h1>
          <p className="mb-4">
            Bem-vindo ao Crescendo Saudável. Ao adquirir nossos produtos, você concorda em
            cumprir os seguintes termos e condições. A leitura e aceitação integral deste documento são obrigatórias para o uso de nossos materiais.
          </p>

          <h2 className="mt-10 mb-4">1. Objeto</h2>
          <p className="mb-4">
            Este produto consiste em um e-book digital (“Produto”) contendo receitas saudáveis, com finalidade exclusivamente educacional e informativa. O conteúdo tem como objetivo auxiliar na organização alimentar e apresentar sugestões de preparo de alimentos.
          </p>
          
          <h2 className="mt-10 mb-4">2. Propriedade Intelectual e Direitos Autorais</h2>
          <p className="mb-4">
            Todo o conteúdo incluído neste site e no e-book, como textos, gráficos, logos, imagens, receitas, bem como a compilação dos mesmos, é propriedade exclusiva da Crescendo Saudável e protegido pelas leis brasileiras de direitos autorais.
          </p>
          <p className="mb-4">
            É estritamente proibido copiar, reproduzir, revender, distribuir, compartilhar, modificar, adaptar, traduzir ou criar trabalhos derivados do conteúdo, total ou parcialmente, sem a autorização prévia e expressa do autor. A violação destes direitos constitui crime e sujeitará o infrator às medidas legais cabíveis na esfera cível e criminal.
          </p>

          <h2 className="mt-10 mb-4">3. Forma de Acesso e Uso do Produto</h2>
          <p className="mb-4">
            Por se tratar de um produto 100% digital, o acesso é liberado conforme informado no momento da compra, não havendo envio de qualquer material físico. Após a confirmação do pagamento, você receberá acesso imediato ao conteúdo digital.
          </p>
          <p className="mb-4">
            O acesso ao produto é destinado ao seu uso pessoal e não comercial.
          </p>
          
          <h2 className="mt-10 mb-4">4. Pagamento</h2>
          <p className="mb-4">
            Aceitamos várias formas de pagamento, conforme listado em nosso checkout. Todas as transações são
            processadas através de gateways de pagamento seguros, que garantem a confidencialidade e a segurança dos seus dados.
          </p>

          <h2 className="mt-10 mb-4">5. Política de Reembolso</h2>
          <p className="mb-4">
            Oferecemos uma garantia incondicional de 7 (sete) dias. Se, por qualquer motivo, você não estiver satisfeito com o produto, poderá solicitar o reembolso integral do valor pago dentro deste período, sem necessidade de justificativa.
          </p>
          
          <h2 className="mt-10 mb-4">6. Alterações nos Termos</h2>
          <p className="mb-4">
            Reservamo-nos o direito de fazer alterações em nosso site, políticas e nestes Termos de Serviço a
            qualquer momento, sem aviso prévio. A versão mais recente estará sempre disponível nesta página.
          </p>

          <h2 className="mt-10 mb-4">7. Aceitação dos Termos</h2>
          <p className="mb-4">
            Ao efetuar a compra e acessar o conteúdo do e-book, o usuário declara ter lido, compreendido e concordado integralmente com todos os termos e condições descritos neste documento.
          </p>

          <p className="mt-12 text-sm">
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
