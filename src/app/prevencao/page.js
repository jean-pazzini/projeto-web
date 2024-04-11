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
          <h3>Prevenção</h3>
          <h4>Por que prevenção é importante ?</h4>
          <p>
            A prevenção do abuso de substâncias, que inclui o abuso de drogas entorpecentes e o 
            uso nocivo do álcool, é fundamental para mitigar os danos individuais, sociais e de 
            saúde pública associados a essas práticas. Aqui estão algumas abordagens importantes para 
            prevenir o abuso de substâncias:
          </p>
        </div>

        {/* <div className="video">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/7CEJkPCc7z4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px'}}>
          </iframe>
        </div> */}

        <div className="opcoes-container">
          <h4>O que você deve saber ?</h4>
          <ol>
            <li>
              <h4>Educação e conscientização: </h4>
              <ul>
                <li>A educação sobre os efeitos nocivos das substâncias e os riscos associados ao 
                  seu uso é essencial. Isso inclui informações sobre os efeitos de curto e longo prazo 
                  das substâncias, os riscos à saúde física e mental, os danos sociais e legais e os 
                  recursos disponíveis para tratamento e recuperação.</li>
              </ul>
            </li>

            <li>
              <h4>Desenvolvimento de habilidades pessoais e sociais:</h4>
              <ul>
                <li>Fortalecer habilidades de resistência à pressão dos pares, habilidades de resolução 
                  de problemas, autoestima e habilidades de comunicação pode ajudar os indivíduos a 
                  evitar o abuso de substâncias. Programas de desenvolvimento de habilidades sociais e 
                  emocionais podem ser implementados em escolas, locais de trabalho e comunidades para 
                  promover o bem-estar e a resiliência.
                </li>
              </ul>
            </li>

            <li>
              <h4>Ambientes saudáveis e suporte comunitário:</h4>
              <ul>
                <li>Criar ambientes que promovam estilos de vida saudáveis e oferecer apoio social e 
                  comunitário pode ajudar a prevenir o abuso de substâncias. Isso pode incluir a 
                  implementação de políticas de controle de substâncias em locais públicos, a 
                  disponibilidade de serviços de aconselhamento e suporte, e a promoção de atividades 
                  recreativas e de lazer saudáveis.
                </li>
              </ul>
            </li>

            <li>
              <h4>Intervenção precoce e identificação de riscos:</h4>
              <ul>
                <li>Identificar e intervir precocemente em comportamentos de risco relacionados ao abuso 
                  de substâncias pode ajudar a prevenir problemas mais graves no futuro. Isso pode ser 
                  feito por meio de triagem de saúde mental, programas de prevenção nas escolas, e acesso 
                  a serviços de aconselhamento e tratamento.
                </li>
              </ul>
            </li>

            <li>
              <h4>Tratamento e recuperação acessíveis:</h4>
              <ul>
                <li>Garantir o acesso a serviços de tratamento e recuperação de qualidade para aqueles que 
                  lutam contra o abuso de substâncias é fundamental. Isso inclui o acesso a serviços de 
                  desintoxicação, aconselhamento individual e em grupo, terapia medicamentosa, e apoio 
                  contínuo para prevenir recaídas.
                </li>
              </ul>
            </li>

            <li>
              <h4>Políticas públicas eficazes: </h4>
              <ul>
                <li>A implementação de políticas públicas voltadas para a redução da disponibilidade, 
                  acessibilidade e aceitabilidade social das substâncias pode desempenhar um papel 
                  importante na prevenção do abuso de substâncias. Isso pode incluir restrições à venda 
                  de substâncias psicoativas, regulamentação da publicidade de produtos relacionados a 
                  drogas e investimento em programas de tratamento e reabilitação.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}