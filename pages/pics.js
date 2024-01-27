import Head from 'next/head'
import Link from 'next/link'
import { css } from '@emotion/react'

import Footer from '@components/Footer'




const maindiv = css({
  textDecoration: 'underline',
  columnCount: 2,
  columnGap: "20px",
  display: "flex",
  flexDirection: "row"

})

export default function Pics() {
  return (
    <div className="container">
      <Head>
        <title>Pictures</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div css={maindiv}> "whyyy" 
     
          <img src="/BASS GIRLS teddy.jpg" alt="Hot girls perform with a laser in the foreground" />
          <img src="/BASS GIRLS wide.jpg" alt="Hot girls perform with a laser in the foreground" />
          <img src="/boogie boi.jpg" alt="Hot dudes DJ with a laser" />

          <iframe width="560" height="315" src="https://www.youtube.com/embed/qEGCYq2mwR8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h1>Submission Received!</h1>
          <p>Thank you for your feedback! Head back to the 
            <Link href="/"> home page </Link>
            .</p>

      </div>

      <Footer />
    </div>
  )
}
