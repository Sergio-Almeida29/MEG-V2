import Head from 'next/head'
import Header from '@components/Header'
import Slideshow from '@components/Slideshow'

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

        <Slideshow/>
        
      </main>

    </div>
  )
}
