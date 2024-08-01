import Head from "next/head";
import Link from "next/link";
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
  padding: 10,
  paddingTop: 0,
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
});

const column = css({
  flex: "1 1 450px",
  padding: 5,
});

const img = css({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  paddingTop: 5,
});

const vid = css({
  width: "100%",
  height: "100%",
  //objectFit: "cover",
  paddingTop: 5,
});

export default function Pics() {
  return (
    <div>
      {/* <header css={header}>
      
      <div css={headerColumnLeft}>
        <a css={bigHead} href="/pics"> Pictures </a>
        <a css={bigHead} href="/videos"> Videos </a>
        </div>

        <div css={headerColumn}>
        <a css={bigHead} href="/"> Zubair Ahmed </a>
        </div>

        <div css={headerColumnRight}>
        <a css={bigHead} href="/contact"> Contact </a>
        <a css={bigHead} href="/about"> About </a>
        </div>

      </header> */}
      <PageHeader />
      <div css={maindiv}>
        <Global styles={GlobalStyle} />
        <Head>
          <title>zugood lasers | Pictures</title>
          <link rel="icon" href="/laser warning.svg" />
        </Head>

        <div css={column}>
          <img
            css={img}
            src="/REYSUO front stage.webp"
            alt="Wide shot of Gensuo in between Lasers, and he's wearing earplugs, don't forget kids ALWAYS use protection"
          />
          <img
            css={img}
            src="/indigo b2b.webp"
            alt="E/J b2b indigo, with liquid sky effect above"
          />
          <img
            css={img}
            src="/boogie boi.webp"
            alt="Hot dudes DJ with a laser"
          />
          <img
            css={img}
            src="/yeahdudesame.webp"
            alt="b2b of gudemami and yeahdudesame"
          />
          <img
            css={img}
            src="/crowd.webp"
            alt="pic of crowd with lasers above"
          />
          <img
            css={img}
            src="/REYSUO BW compress.webp"
            alt="wide shot of the stage with reysuo"
          />
        </div>

        <div css={column}>
          <img
            css={img}
            src="/BASS GIRLS teddy.webp"
            alt="Hot girls perform with a laser in the foreground"
          />
          <img
            css={img}
            src="/gudemami.webp"
            alt="gudemami performing her set (she can be my mami 🥵)"
          />
          <img
            css={img}
            src="/BASS GIRLS wide.webp"
            alt="wide shot of anna weezy, jvzumi, and lapurgs"
          />
          <img
            css={img}
            src="/gensuo VERT.webp"
            alt="vertical shot of Gensuo looking sick af between lasers, with reydium in the background"
          />
        </div>
      </div>
    </div>
  );
}
