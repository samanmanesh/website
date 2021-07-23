import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlertBox from "./home/AlertBox";
import styled from "styled-components";
import colors from "./styles/design";

const PageBaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  background: ${colors.background};
  color: ${colors.fontColor.fontColor1};
`;

export default function PageBase({ children }) {
  const [alert, setAlert] = useState(null); // { message: "", error: false }

  useEffect(() => {
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }, [alert]);

  return (
    <PageBaseWrapper>
      <Head>
        <title>Saman Manesh</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          property="og:title"
          content="Saman Manesh's personal website/portfolio"
          key="title"
        />
        <meta property="og:image" content="//www.samanmanesh.com/hero.png" />
        <meta
          property="og:description"
          content="I’m Saman Manesh a Full-Stack Developer located in Toronto...I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences..."
        />
        
      </Head>
      <NavBar />
      <AlertBox alert={alert} />
      {children}
      <Footer setAlert={setAlert} />
    </PageBaseWrapper>
  );
}
