import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";

const PageBaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export default function PageBase({ children }) {
  return (
    <PageBaseWrapper>
      <Head>
        <title>Saman Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </PageBaseWrapper>
  );
}
