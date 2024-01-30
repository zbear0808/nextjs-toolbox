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
  //width: "100vw",
  //padding: 200,
  //display: "flex",
  //flexDirection: "row",
  columnCount: 3,
});

const column = css({
  display: "flex",
  flexDirection: "column",
  //margin: 40
  padding: "20%",
  paddingTop: 0,
  paddingBottom: 0,
});

const vid = css({
  paddingTop: 10,
});

const videoIds = [
  "JWaN034pKbQ",
  "jOo3sgdbWy8",
  "OAJiO6TRosA",
  "EigAW9_Kko4",
  "qEGCYq2mwR8",
  "5GHO4rhm4Ps",
  "XlnbJfx5i8o",
];

export default function Videos() {
  return (
    <div //css={maindiv}
      className="container"
    >
      <Head>
        <title>Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Global styles={GlobalStyle} />

      <PageHeader />

      <div css={column}>
        {videoIds.map((id) => (
          <iframe
            key={id}
            css={vid}
            height="500"
            src={`https://www.youtube.com/embed/${id}`}
            frameborder="0"
            allowfullscreen="true"
          ></iframe>
        ))}
      </div>
    </div>
  );
}
