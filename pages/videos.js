import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'

export default function Videos() {
  return (
    <div className="container">
      <Head>
        <title>Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qEGCYq2mwR8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        <h1>Submission Received!</h1>
        <p>Thank you for your feedback! Head back to the 
          <Link href="/"> home page </Link>
          .</p>
      </main>

      <Footer />
    </div>
  )
}
