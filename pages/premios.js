import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FRAC</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="UTF-8"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      </Head>

      <main>
        
        <Header/>

        <h1>Prémios</h1>

        <h2>A Origem</h2>
        <p>
          No mês de outubro do ano de 2022, no decorrer de um jantar na Cantina de Engenharia, surgiu ao Articona e ao Zé dos Xutos a ideia que daria origem a uma nova tradição.
          Algo que se repetiria todos os anos, e seria motivo de expetativa entre os piças, ao mesmo tempo que constituiria uma bonita oportunidade de praxar para cima.
        </p>

        <h2>Em que consiste?</h2>
        <p>
          O prémio FRACAE assume um nome diferente todos os anos, mas que é sempre o nome de um aprendiz, decidido através de consenso entre os caloiros.
          O motivo do prémio varia também todos os anos, e é decidido entre diferentes propostas apresentadas, através de um consenso entre caloiros.
          Finalmente, os caloiros juntam-se e votam em quem deverá receber o prémio FRACAE. O prémio é sempre uma garrafa com um rótulo personalizado,
          de preferência com fotos de estouro da altura de caloiro do Tuno em questão, dado no Jantar de Aniversário da Tuna.
          É também importante que se registre no caderno preto, a letra de praxe ou não, a razão pela qual o Tuno x foi premiado com o prémio FRACAE esse ano, e que todos os caloiros assinem no fim. 
        </p>

        <h2>Historial</h2>
        <h3 class="premio">Prémio Pastor - 2022</h3>
        <h4>Atribuído ao Boris por ser o Tuno Mais Caloiro</h4>
        <img class="premio-pastor" src="/premios/premio_pastor1.png" alt="Premio Pastor" width="92%" />
        <img class="premio-pastor" src="/premios/premio_pastor2.png" alt="Premio Pastor" width="92%" />

        <h3 class="premio">Prémio Moregado - 2023</h3>
        <h4>Atribuído ao Carl por ser o Tuno Mais Cadáver</h4>
        <img class="center premio-moregado" src="/premios/premio_moregado1.png" alt="Premio Moregado" width="92%" />
        <img class="center premio-moregado" src="/premios/premio_moregado2.png" alt="Premio Moregado" width="92%" />

        <h3 class="premio">Prémio Faísca McCona - 2024</h3>
        <h4>Atribuído ao Pirúgrafo por ser o Tuno Mais Cringe</h4>
        <img class="center premio-moregado" src="/premios/premio_faisca1.jpg" alt="Premio Faísca McCona" width="92%" />
        <img class="center premio-moregado" src="/premios/premio_faisca2.jpg" alt="Premio Faísca McCona" width="92%" />

      </main>
            
    </div>
  )
}
