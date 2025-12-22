
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
          <h1>Termos de Uso e Responsabilidade do Usuário</h1>
          <p>
            Estes Termos de Usuário regem o seu acesso e uso dos produtos e serviços oferecidos pela Crescendo Saudável. Ao adquirir nosso produto, você concorda com as condições de uso, isenções e limitações de responsabilidade detalhadas abaixo.
          </p>
          
          <h2>1. Isenção de Responsabilidade Profissional</h2>
          <p>
            O usuário declara estar ciente de que o conteúdo deste e-book tem caráter meramente informativo e educacional e não substitui, em hipótese alguma, o acompanhamento médico, nutricional ou de qualquer outro profissional de saúde habilitado.
          </p>
          <p>
            Antes de iniciar ou modificar qualquer plano alimentar para si ou para terceiros, especialmente em casos de doenças preexistentes, alergias, intolerâncias alimentares, uso de medicamentos, ou em condições especiais como gestação, lactação e para alimentação infantil, é indispensável e obrigatória a consulta a um médico ou nutricionista.
          </p>

          <h2>2. Responsabilidade do Usuário e Variação de Resultados</h2>
          <p>
            O uso das informações e receitas contidas neste e-book é de inteira e exclusiva responsabilidade do usuário. O sucesso e os resultados obtidos a partir das receitas podem variar significativamente de pessoa para pessoa, dependendo de fatores individuais como metabolismo, rotina, disciplina, genética e condições de saúde preexistentes.
          </p>
          <p>
            Não há qualquer promessa ou garantia de emagrecimento, cura de doenças, melhora clínica ou resultados específicos. O autor e o vendedor isentam-se de qualquer responsabilidade por:
          </p>
          <ul>
            <li>Uso inadequado das receitas ou das informações contidas no material.</li>
            <li>Reações adversas, alérgicas ou qualquer outro problema de saúde decorrente do consumo dos alimentos sugeridos.</li>
            <li>Interpretação incorreta do conteúdo.</li>
            <li>Decisões tomadas com base nas informações do e-book sem a devida consulta a um profissional de saúde.</li>
          </ul>

          <h2>3. Conduta do Usuário</h2>
          <p>
            Você concorda em não usar o site e o produto para qualquer finalidade ilegal ou proibida por estes termos. Você não pode usar os serviços de qualquer maneira que possa danificar, desativar, sobrecarregar ou prejudicar a plataforma ou interferir no uso e aproveitamento de qualquer outra parte.
          </p>

          <h2>4. Privacidade</h2>
          <p>
            O tratamento de seus dados pessoais é regido por nossa Política de Privacidade. Por favor, revise-a para entender nossas práticas.
          </p>
          
          <h2>5. Lei Aplicável e Foro</h2>
          <p>
            Ao visitar nosso site e adquirir nossos produtos, você concorda que as leis da República Federativa do Brasil regerão estes Termos de Usuário e qualquer disputa que possa surgir. Fica eleito o foro da comarca de domicílio do autor para dirimir quaisquer controvérsias, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
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
