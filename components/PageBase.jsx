import React, { useState, useEffect } from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import AlertBox from "./AlertBox";
import styled from "styled-components";
import colors from "./styles/design";

const PageBaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 426px;
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
        <title>Saman Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <AlertBox alert={alert} />
      {children}
      <Footer setAlert={setAlert} />
    </PageBaseWrapper>
  );
}
