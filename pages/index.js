import Head from "next/head";
import PageHeader from "@components/PageHeader";
import { Global, css } from "@emotion/react";

// idk wtf this actually means. But this is how i set the outermost div or body? to be the width of the screen without any scrolling
const GlobalStyle = css`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
  }
`;

const wrapperDiv = css({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  padding: 10
});

const vidColumn = css({
  flex: "1.5 1.5 600px",
  height: "100%",
  padding: 5,
  textAlign: "center",
});

const picColumn = css({
  flex: "1 1 400px",
  height: "100%",
  padding: 5,
  textAlign: "center",
});
const img = css({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  paddingTop: 5,
});

const anchorStyle = css({
  color: "white",
  textAlign: "center",
  textDecoration: "none",
  fontFamily: "Outfit",
});

export default function Home() {
  return (
    <div className="container">
      
      <Head>
        <title>Good Lasers</title>
        <link rel="icon" href="laser warning.svg" />
      </Head>
      <Global styles={GlobalStyle} />

      <PageHeader />
      <div css={wrapperDiv}>
        <div css={vidColumn}>
          <a css={anchorStyle} href="/videos">
            <img css={img} src="/laserVid.gif" alt="gif of a laser video" />
            Videos
          </a>
        </div>

        <div css={picColumn}>
          <a css={anchorStyle} href="/pics">
            <img
              css={img}
              src="/slowerSlideshow.gif"
              alt="slideshow of various pictures of lasers taken at shows"
            />
            Pictures
          </a>
        </div>
      </div>
    </div>
  );
}
