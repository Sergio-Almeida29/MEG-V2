import Head from 'next/head'
import Header from '@components/Header'
import Antigos from '@components/Antigos'

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

        <h1 id="title">Antigos Caloiros</h1>

        <div id="card-container"></div>

        <Antigos/>
        
      </main>

    </div>
  )
}
