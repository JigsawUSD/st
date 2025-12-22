
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
          <h1 className="mb-8">Termo de Responsabilidade – E-book de Receitas para Bebês</h1>
          <p className="mb-4">
            Ao adquirir e utilizar este e-book, o usuário declara estar ciente e de acordo com os termos abaixo, assumindo total responsabilidade pela aplicação das informações apresentadas.
          </p>

          <h2 className="mt-10 mb-4">1. Finalidade do Conteúdo</h2>
          <p className="mb-4">
            Este e-book tem caráter exclusivamente educativo e informativo, apresentando sugestões de receitas e orientações gerais sobre alimentação saudável para bebês. O conteúdo não substitui, em hipótese alguma, acompanhamento médico, pediátrico ou nutricional.
          </p>

          <h2 className="mt-10 mb-4">2. Consulta Médica e Alergias</h2>
          <p className="mb-4">
            A mãe, pai ou responsável legal declara estar ciente de que deve consultar um médico ou nutricionista antes de iniciar a introdução alimentar do bebê, bem como para verificar alergias alimentares, intolerâncias e restrições específicas. Cada bebê possui necessidades, reações e tempos diferentes. O autor/vendedor não se responsabiliza por reações alérgicas, intolerâncias ou complicações de saúde decorrentes do consumo dos alimentos sugeridos.
          </p>
          
          <h2 className="mt-10 mb-4">3. Resultados Variáveis</h2>
          <p className="mb-4">
            O usuário reconhece que os resultados variam de bebê para bebê. Não há promessa de aceitação alimentar, ganho de peso, emagrecimento ou desenvolvimento específico. O comportamento alimentar depende de fatores individuais, emocionais e físicos da criança.
          </p>

          <h2 className="mt-10 mb-4">4. Respeito ao Tempo e aos Limites do Bebê</h2>
          <p className="mb-4">
            O responsável declara estar ciente de que é inteiramente responsável por respeitar o tempo do bebê, não forçar a criança a comer alimentos que ela rejeite, e interromper a alimentação em caso de desconforto, choro ou recusa persistente. Entender que a rejeição alimentar faz parte do processo natural de desenvolvimento é fundamental. Qualquer tentativa de forçar a alimentação é de responsabilidade exclusiva do responsável legal.
          </p>

          <h2 className="mt-10 mb-4">5. Corte dos Alimentos e Risco de Engasgo</h2>
          <p className="mb-4">
           O usuário reconhece que o tamanho, formato e textura dos alimentos são de responsabilidade exclusiva da mãe, pai ou responsável. O autor/vendedor não se responsabiliza por engasgos, sufocamentos ou acidentes durante a alimentação. É dever do responsável conhecer e aplicar práticas seguras de alimentação infantil.
          </p>
          
          <h2 className="mt-10 mb-4">6. Emergências</h2>
          <p className="mb-4">
            Em caso de engasgo, mal-estar grave ou qualquer emergência, o responsável deve buscar ajuda imediata, entrando em contato com os serviços de emergência (Corpo de Bombeiros: 193; SAMU: 192). Este e-book não substitui atendimento de urgência.
          </p>

          <h2 className="mt-10 mb-4">7. Isenção de Responsabilidade</h2>
          <p className="mb-4">
            O autor/vendedor isenta-se de qualquer responsabilidade por uso inadequado das receitas, interpretação incorreta do conteúdo, decisões tomadas pelo usuário, e quaisquer danos físicos, emocionais ou materiais decorrentes da aplicação das informações.
          </p>

          <h2 className="mt-10 mb-4">8. Aceitação</h2>
          <p className="mb-4">
            Ao adquirir e utilizar este material, o usuário declara que leu e compreendeu este Termo de Responsabilidade, assume total responsabilidade pelo uso do conteúdo e está ciente de que o bem-estar do bebê depende de acompanhamento profissional e decisões responsáveis.
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
