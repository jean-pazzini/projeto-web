import React from 'react';
import Link from 'next/link';

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
      <div className="main">
        <main className="conteudo">
          <h3>Abuso de drogas e álcool: Impactos e Consequências</h3>

          <p>
            Aqui estão alguns pontos-chave sobre o assunto:
          </p>

          <ol>
            <li>
              <h4>Efeitos imediatos graves:</h4>
              <ul>
                <li>Intoxicação aguda que pode levar a comportamentos perigosos ou imprudentes.</li>
                <li>Alterações de humor, incluindo agressão, depressão ou ansiedade.</li>
                <li>Diminuição da coordenação motora e raciocínio prejudicado, aumentando o risco de 
                  acidentes.</li>
              </ul>
            </li>

            <li>
              <h4>Consequências de longo prazo:</h4>
              <ul>
                <li>Dependência física e psicológica das substâncias, dificultando a cessação do uso.</li>
                <li>Danos ao cérebro e órgãos vitais, resultando em problemas de saúde crônicos e 
                  irreversíveis.</li>
                <li>Complicações financeiras decorrentes do custo contínuo das substâncias e perda de 
                  emprego devido ao abuso.</li>
              </ul>
            </li>

            <li>
              <h4>Impacto social e comunitário:</h4>
              <ul>
                <li>Desintegração de relacionamentos familiares devido ao comportamento associado ao 
                  abuso.</li>
                <li>Aumento da criminalidade, incluindo crimes relacionados ao uso de drogas para 
                  financiar o vício.</li>
                <li>Sobrecarga dos sistemas de saúde e assistência social devido às demandas decorrentes 
                  do abuso de substâncias.</li>
              </ul>
            </li>

            <li>
              <h4>Consequências legais:</h4>
              <ul>
                <li>Possíveis ações legais, como prisão por posse ou distribuição de substâncias 
                  ilegais.</li>
                <li>Perda de custódia de filhos devido a um ambiente familiar instável ou negligência 
                  associada ao abuso.</li>
              </ul>
            </li>
          </ol>
        </main>

        {/* Adicionando o vídeo do YouTube */}
        {/* <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/laqBgr8sKT4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            style={{boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px'}}
          ></iframe>
        </div> */}
      </div>
    </>
  );
}
