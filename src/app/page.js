import Image from "next/image";
import React from 'react';


export default function Home() {
  return (
    <div className="telaInicial">
      <header>
        <h1 className="titulo">Consciência Sóbria</h1>
      </header>
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
