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
            <li><Link href="../">Recursos</Link></li>
          </ul>
        </nav>
      </header>
      <main className="conteudo">

        <div className="descricao-container">
          <h3>Recursos</h3>
          <h4>
            Por que prevenção é importante ?
          </h4>
          <p>
          
Quando se trata de lidar com o abuso de substâncias, incluindo drogas entorpecentes e o uso nocivo do álcool, é fundamental ter acesso a uma variedade de recursos confiáveis que possam oferecer suporte, orientação e assistência. Aqui estão alguns recursos possíveis:
          </p>
        </div>
        <div className="opcoes-container">
          <ol>
            <li>
              <h4>Centros de Atenção Psicossocial (CAPS): </h4>
              <ul>
                <li>Os CAPS oferecem assistência especializada em saúde mental, incluindo tratamento para dependência química. Eles fornecem avaliação, suporte psicológico, terapia em grupo e encaminhamento para outros serviços quando necessário.</li>
              </ul>
            </li>

            <li>
              <h4>Centros de Acolhimento e Reabilitação:</h4>
              <ul>
                <li>Existem várias instituições, públicas e privadas, dedicadas à reabilitação de dependentes químicos. Esses centros oferecem programas de desintoxicação, acompanhamento médico, terapia individual e em grupo, além de atividades de reintegração social.
                </li>
              </ul>
            </li>

            <li>
              <h4>Programas de Prevenção e Educação:</h4>
              <ul>
                <li>O governo e organizações não governamentais (ONGs) realizam programas de prevenção e educação sobre drogas e álcool em escolas, comunidades e locais de trabalho. Esses programas visam conscientizar sobre os riscos do abuso de substâncias e promover estilos de vida saudáveis.
                </li>
              </ul>
            </li>

            <li>
              <h4>Linhas de Ajuda e Serviços de Apoio Telefônico:</h4>
              <ul>
                <li>Há linhas telefônicas de ajuda e serviços de apoio disponíveis para aqueles que precisam de assistência imediata ou desejam obter informações sobre tratamento e suporte. Esses serviços são confidenciais e oferecem orientação de profissionais treinados.</li>
              </ul>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}