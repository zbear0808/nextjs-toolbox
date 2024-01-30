
import Head from 'next/head'
import Link from 'next/link'

import Footer from '@components/Footer'


export default function PoarnVideo() {
    return (
      <div className="container">
        <Head>
          <title>Next.js Toolbox Template!</title>
          <link rel="icon" href="/laser warning.svg" />
        </Head>
  
        <main>
          <h1>Submission Received!</h1>
          <p>Thank you for your feedback! Head back to the 
            <Link href="/"> home page </Link>
            .</p>
        </main>
  
        <Footer />
      </div>
    )
  }