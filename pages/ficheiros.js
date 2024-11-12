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

        <h1 id="title">Ficheiros</h1>

        <ul>
          <li id="file">
            <h3><a href="/sebenta.pdf" download="Sebenta da FRAC.pdf" type="application/pdf" target="_blank">Sebenta da FRAC</a></h3></li>
          <li id="file">
            <h3><a href="https://docs.google.com/spreadsheets/d/1f3O_a2X_Vu-LTchIh0ZXOqw_OIp-l8RoCYJsLTFm8CQ/edit?gid=1218093059#gid=1218093059" target="_blank">Cábula FRACÆ</a></h3>
          </li>
        </ul>
        
      </main>

    </div>
  )
}
