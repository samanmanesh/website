import React from "react";
import { Container, Title3, Button, Arrow3 } from "../styles";
import styled from "styled-components";
import Education from "./Education";
import Skills from "./Skills";
import Tools from "./Tools";

//#region - styling-
const DownloadResume = styled.div`
  /* background: #562222; */
  margin-bottom: 13rem;
  .arrow-type5 {
    /* padding-left: auto; */
  }
`;
//#endregion

export default function Resume() {
  return (
    <Container>
      <section className="titles-container" id="resume">
        <Title3>Reśumé</Title3>
        <Arrow3>
          <img
            src="arrow3-down-right.svg"
            alt="arrow type3"
            className="arrow arrow-type3"
          />
        </Arrow3>
      </section>
      <Education/>
      <Skills />
      <Tools />
      <DownloadResume>
        <Button>
          <span>Download Reśumé</span>
          <img
            src="arrow5-line-right.svg"
            alt="array type 5"
            className=" arrow-type5"
          />
        </Button>
      </DownloadResume>
    </Container>
  );
}
