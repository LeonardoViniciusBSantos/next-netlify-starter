import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bem vindo ao meu site pessoal" />
        <p className="description">
          Meu nome é Leonardo Vinicius Batista Santos</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
