import Image from "next/image";
import React from 'react';


export default function Home() {
  return (
    <div className="telaInicial">
      <header>
        {/* Menu dentro do cabeçalho */}
        <nav className="menu">
          <ul>
            <li><a href="gipage.js">Item de Menu 1</a></li>
            <li><a href="#">Item de Menu 2</a></li>
            <li><a href="#">Item de Menu 3</a></li>
          </ul>
        </nav>
      </header>
      <div>
        <h1 className="titulo">Consciência Sóbria</h1>
      </div>
      <main>
        <Image src="/img1.png" width={600} height={100} className="ft01" />
        
        <p className="descricao">O abuso de drogas e álcool resulta em efeitos imediatos graves e consequências de longo prazo, 
          como dependência física e psicológica, danos ao cérebro e órgãos, problemas financeiros e sociais,
          além de possíveis consequências legais. Este site oferece informações e recursos para prevenir, 
          tratar e se recuperar do abuso de substâncias, reconhecendo seu impacto abrangente no indivíduo, 
          na família, na comunidade e na sociedade.
        </p>
      </main>
    </div>
  );
}
