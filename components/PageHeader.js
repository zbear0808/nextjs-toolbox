

import { Global, css } from "@emotion/react";


const header = css({
    justifyContent: "center",
    color: "white",
    overflowX: "hidden",
    backgroundColor: "black",
    //width: "100vw",
    display: "flex",
    flexDirection: "row",
  });
  const headerColumn = css({
    display: "flex",
    flex: 1,
    height: "100%",
    padding: 5,
    justifyContent: "center"
  });
  const headerColumnLeft = css({
    display: "flex",
    flex: 1,
    height: "100%",
    padding: 5,
    justifyContent: "flex-start"
  });
  const headerColumnRight = css({
    display: "flex",
    flex: 1,
    height: "100%",
    padding: 5,
    justifyContent: "flex-end"
  });
  const bigHead = css({
    color: "white",
   fontSize: 40,
   padding: 10,
   textDecoration: "none"
  });

  export default function PageHeader() {
    return (
  <header css={header}>
      
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

      </header>
    )}