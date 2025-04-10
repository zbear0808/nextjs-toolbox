

import { Global, css } from "@emotion/react";
//import { Inter } from 'next/font/google'


const buttonHoverState = {
  background: "white",
  color: "black"
  }

const header = css({
  alignItems: "center",
    justifyContent: "center",
    color: "white",
    overflowX: "auto",
    backgroundColor: "black",
    //width: "100vw",
    display: "flex",
    flexDirection: "row",
  });
  const headerColumn = css({
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    height: "100%",
    padding: 5,
    justifyContent: "center",
    textAlign: "center"
  });
  const headerColumnLeft = css({
    display: "flex",
    flexWrap: "wrap",

    flex: 1,
    height: "100%",
    padding: 5,
    justifyContent: "flex-start"
  });
  const headerColumnRight = css({
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    height: "100%",
    padding: 5,
    justifyContent: "flex-end"
  });
  const bigHead = css({
    color: "white",
   fontSize: 40,
   padding: 10,
   textDecoration: "none",
   fontFamily: "Outfit",
   borderRadius: "100px",
   '&:hover' : buttonHoverState
  });
  const smallHead = css({
    color: "white",
   fontSize: 25,
   padding: 10,
   textDecoration: "none",
   fontFamily: "Outfit",
   borderRadius: "100px",
   '&:hover' : buttonHoverState
  });


  export default function PageHeader() {
    return (
  <header css={header}>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;400&display=swap"
        rel="stylesheet"
      />
      
      <div css={headerColumnLeft}>
        <a css={smallHead} href="/pics"> Pictures </a>
        <a css={smallHead} href="/videos"> Videos </a>
        </div>

        <div css={headerColumn}>
        <a css={bigHead} href="/"> Zubair Ahmed </a>
        </div>

        <div css={headerColumnRight}>
        <a css={smallHead} href="/contact"> Contact </a>
        <a css={smallHead} href="/about"> About </a>
        </div>

      </header>
    )}