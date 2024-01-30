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

const main = css({
  color: "white",
});

const column = css({
  display: "flex",
  flexDirection: "column",
  padding: "20%",
  paddingTop: 0,
  paddingBottom: 0,
  color: "white",
});

const vid = css({
  paddingTop: 10,
});

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>zugood lasers | About</title>
        <link rel="icon" href="/laser warning.svg" />
      </Head>
      <Global styles={GlobalStyle} />

      <PageHeader />

      <main css={main}>
        <h1>Who is he 🤨</h1>
        <p>
          Zubair is really cool and sexy and hot 🥵. and he's the greatest laser
          artist alive
        </p>

        <h1>what he do❓</h1>
        <p>
          He is primarily a laser operator and uses Beyond. Also experienced with
          setting up and operating laser equipment at venues of all sizes.
          Performed at various shows ran by small artists, as well as insomniac
          festivals. Even performed for notable artists such as Acraze and Reaper
          <br/><br/>
          Sometimes he also makes Visuals, (looking to learn to be a VJ soon)
        </p>

        <h1>What can i pay him to do 🤑</h1>
        <ul>
          <li>Rent out and setup laser hardware (Seattle only) </li>
          <li>Operate lasers </li>
          <li>Timecoded Laser shows</li>
          <li>Timecoded Visuals</li>
        </ul>
      </main>
    </div>
  );
}
