import Head from "next/head";
import PageHeader from "@components/PageHeader";
import { Global, css } from "@emotion/react";
import ImageSlideshow from "@components/ImageSlideshow";

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
  display: "flex",
  flexDirection: "column",
  color: "white",
  textAlign: "center",
  textDecoration: "none",
  fontFamily: "Outfit",
});

// Define your images
const slideshowImages = [
  { src: "/CHYLPics-2.jpg", alt: "Laser show 1" },
  { src: "/CHYLPics-4.jpg", alt: "Laser show 2" },
  { src: "/CHYLPics-6.jpg", alt: "Laser show 3" },
  { src: "/CHYLPics-13.jpg", alt: "Laser show 4" },
  { src: "/CHYLPics-18.jpg", alt: "Laser show 5" },
];

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
          <img src="laserVid.gif"/>
            {/* <video
              css={img}
              src="/laserVid.webm"
              autoPlay
              loop
              muted
              playsInline
            >
              Video not supported
            </video> */}
            Videos
          </a>
        </div>

        <div css={picColumn}>
          <a css={anchorStyle} href="/pics">
          <ImageSlideshow images={slideshowImages}/>
            {/* <Slideshow images={slideshowImages} duration={25} /> */}
            Pictures
          </a>
        </div>
      </div>
    </div>
  );
}
