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
  padding: 10,
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
  // replacing gif with webm vid doesn't work
  // this is bc a video elemetn is interactive. and you cannot place an interactive
  // element inside of an anchor <a/>
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
            <video
              css={img}
              src="/laserVid.webm"
              autoPlay
              loop
              muted
              playsInline
            >
              Video not supported
            </video>
            Videos
          </a>
        </div>

        <div css={picColumn}>
          <a css={anchorStyle} href="/pics">
            <video
              css={img}
              src="/slowerSlideshow.webm"
              alt="slideshow of various pictures of lasers taken at shows"
              autoPlay
              loop
              muted
              playsInline
              >
              Video not supported
            </video>
            Pictures
          </a>
        </div>
      </div>
    </div>
  );
}
