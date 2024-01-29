import Head from "next/head";
import PageHeader from "@components/PageHeader";
import Footer from "@components/Footer";
import FeedbackForm from "@components/FeedbackForm";
import JokeBlock from "@components/JokeBlock";
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

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Good Lasers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={GlobalStyle} />

      <PageHeader />
    </div>
  );
}
