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

        <h1 id="title">Discografia</h1>

        <div id = "Principal"> 

          <h2>Cada Vez Mais Alto - 2022/2023 </h2> 
          <div class="responsive-iframe-container">
            <iframe src="https://www.youtube.com/embed/videoseries?si=pgqTFJdJeziy_Qnh&amp;list=PL4mcO_s2pu2wfPIs35thodOwJ2LqjxP2F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <p>
            A Fox foi gravada por mim, Dobby e Cleveland nas escadas de emergência.
            A Bella Ciao, Só uma foda, Quando a Conta Chega e Engenharia foram gravadas pela FRAC que estava presente no jantar em casa do Papi, dia 13/04 (com guitarra elétrica tocada pelo Articona, penso eu).
            A Fui Colher uma Romã foi gravada na atuação para o aniversário da AE, dia 15/03/2023.
            A Nome de Rua foi gravada por algumas pessoas, nas escadas de emergência, numa situação aleatória de estouro, dia 26/04/23.
            A Flor Sem Tempo é um arranjo feito pelo Dobby, solado pelo Macarena, e mixado pelo Toretto, que foi gravado ao longo de um dia de gravações em casa do Toretto, e que culminou em estouro evidentemente.
            A Porto Sentido foi gravada no primeiro jantar em casa do Papi, dia 19/12/23.
            A Imaculada FRACAE foi gravada à saída de um FEUP Caffe, por mim, Papi, Sirob, Articona, Adamastouro, Asa e possivelmente mais alguém.
          </p>

          <h2>Ainda Mais Alto - 2009/2010 </h2>
          
          <div class="responsive-iframe-container">
            <iframe src="https://www.youtube.com/embed/videoseries?si=FKoFn2o31A8miljR&amp;list=PL4mcO_s2pu2wQJso5Vlt9gIFQTbJknZ-9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          </div>
        
      </main>

    </div>
  )
}
