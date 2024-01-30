import Head from "next/head";
import PageHeader from "@components/PageHeader";
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


export default function About() {
  return (
    <div //css={maindiv}
      className="container"
    >
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={GlobalStyle} />

      <PageHeader />

      <div css={column}>
       Zubair is really cool and sexy and hot. 
       and he's the greatest laser artist alive



        sometimes he also makes Visuals, (looking to learn to be a VJ soon)
        experienced with setting up and operating laser equipment. 

        Performed at various shows ran by small artist, as well as insomniac festivals. 

        performed for artists such as Acraze and Reaper

      </div>
    </div>
  );
}
