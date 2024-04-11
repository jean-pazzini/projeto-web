import React from 'react';
import Link from 'next/link';
import '/src/app/tratamento/globals.css';

export default function Home() {
  return (
    <>
      <header>
        <nav className="menu">
          <Link href="../">
            <img src="/image/logo.jpg" className="logo" alt="Logo"></img>
          </Link>

          <ul>
            <li><Link href="../prevencao">Prevenção</Link></li>
            <li><Link href="../tratamento">Tratamento</Link></li>

          </ul>
        </nav>
      </header>
      <main className="conteudo">

        <div className="descricao-container">
        <h3>Tratamento</h3>
          <p>
            Se você ou alguém que você conhece está lutando contra o abuso de substâncias, saiba que você não está sozinho. Esta página foi criada para fornecer informações sobre onde e como obter ajuda para lidar com o abuso de substâncias e iniciar o caminho para a recuperação.
          </p>

          <h4>Fatores que influenciam a reabilitação dos usuários de drogas:</h4>
          <p>
            Recentemente, uma pesquisa realizada pela Fundação Oswaldo Cruz (Fiocruz), em parceria com o Instituto Brasileiro de Geografia e Estatística (IBGE), o Instituto Nacional de Câncer (INCA) e a Universidade de Princeton, nos Estados Unidos, analisou o perfil dos usuários de drogas no Brasil, com idades entre 12 e 65 anos. Os dados destacam a necessidade de buscar alternativas mais eficazes para lidar com os impactos do abuso de substâncias na saúde individual e coletiva.

            A pesquisa revelou que cada usuário de drogas estabelece uma relação única com a substância, apresentando necessidades variadas e distintas quantidades de drogas para alcançar o efeito desejado. Compreender essas nuances é crucial para os profissionais do campo escolherem tratamentos mais específicos para dependentes químicos, visando reduzir os impactos das drogas nas relações sociais, familiares e profissionais.

            O vício em entorpecentes resulta da interação de diferentes aspectos da vida do paciente, tornando essencial uma abordagem contextualizada para evitar complicações emocionais, como ansiedade e depressão. Portanto, a importância do tratamento para a dependência química envolve uma realidade complexa, sugerindo a necessidade de terapias diferenciadas que considerem todos os aspectos envolvidos.
          </p>
        </div>

        <img src="/image/tratamento.jpg" className="tratamento-img" alt="Tratamento"></img>
        <div className="opcoes-container">
        <h4>Opções Disponíveis:</h4>
          <ol>
            <li>
              <h4>Terapia comportamental:</h4>
              <ul>
                <li>Essa abordagem ajuda os indivíduos a mudarem suas atitudes e comportamentos em relação ao uso de substâncias. Isso pode incluir terapia cognitivo-comportamental, terapia motivacional e terapia de contingência.</li>
              </ul>
            </li>

            <li>
              <h4>Terapia medicamentosa:</h4>
              <ul>
                <li>Alguns medicamentos podem ser prescritos para ajudar no tratamento da dependência de substâncias, incluindo medicamentos para reduzir os sintomas de abstinência, diminuir os desejos e ajudar a prevenir recaídas.</li>
              </ul>
            </li>

            <li>
              <h4>Grupos de autoajuda:</h4>
              <ul>
                <li>Participar de grupos como Alcoólicos Anônimos (AA) ou Narcóticos Anônimos (NA) pode ser uma parte valiosa do processo de recuperação, fornecendo suporte social e compartilhamento de experiências com outras pessoas que enfrentam desafios semelhantes.</li>
              </ul>
            </li>

            <li>
              <h4>Clínicas de reabilitação</h4>
              <ul>
                <li>Para casos mais graves de dependência, a internação em uma clínica de reabilitação pode ser necessária. Isso permite que os indivíduos recebam tratamento intensivo em um ambiente controlado, com acesso a terapeutas, médicos e outros profissionais de saúde.</li>
              </ul>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}