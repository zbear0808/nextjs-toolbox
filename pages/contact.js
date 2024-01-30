import Head from "next/head";
import PageHeader from "@components/PageHeader";
import FeedbackForm from "@components/FeedbackForm";

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

const maindiv = css({
  overflowX: "hidden",
  backgroundColor: "black",
  columnCount: 3,
});

const column = css({
  display: "flex",
  flexDirection: "column",
  padding: "20%",
  paddingTop: 0,
  paddingBottom: 0,
  color: "white"
});

const vid = css({
  paddingTop: 10,
});


export default function Contact() {
  return (
    <div //css={maindiv}
      className="container"
    >
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/laser warning.svg" />
      </Head>
      <Global styles={GlobalStyle} />

      <PageHeader />

      <div css={column}>
       email: zugood.lasers@gmail.com
      </div>

      <FeedbackForm />
    </div>
  );
}
