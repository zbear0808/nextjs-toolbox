import Head from 'next/head'
import Link from 'next/link'
import PageHeader from "@components/PageHeader";
import Footer from '@components/Footer'

import { Global, css } from "@emotion/react";

// idk wtf this actually means. But this is how i set the outermost div or body? to be the width of the screen without any scrolling
const GlobalStyle = css`
  body {
    width: 100vw
    margin: 0;
    padding: 0;
    background-color: black;
  }
`;

const mainStyle = css({
  color: "white"
})

export default function Success() {
  return (
    <div className="container">
      <Head>
        <title>zugood lasers | sent message!</title>
        <link rel="icon" href="/laser warning.svg" />
      </Head>
      <Global styles={GlobalStyle} />
      <PageHeader/>
      <main css={mainStyle}>
        <h1>Submission Received!</h1>
        <p>Thank you for your message! Head back to the 
          <Link href="/"> home page </Link>
          .</p>
      </main>
    </div>
  )
}
