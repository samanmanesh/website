import React from "react";
import { Container, Title3 } from "./styles";
import styled from "styled-components";

const ContactGrid = styled.section``;
const LinkCard = styled.div``;

export default function Footer() {
  return (
    <Container>
      <div className="title-container">
        <Title3>Contact</Title3>
        <img src="" alt="arrow type 3" className="arrow-type3" />
      </div>
      <ContactGrid>
        <div className="left-side">
          <div className="carryout-text-container">
            <p className="carryout-text">
              Want to work together?
              <br />
              Just want to say hi?
              <br />
              Drop me a line here
            </p>
            <img src="" alt="arrow type 2" className="arrow-type2" />
          </div>
          <form action="">
            <input type="text" value="Your Name" className="" />
            <input type="text" />
            <input type="text" />
          </form>
          <button className="button submit">
            <span>Sens Message !</span>
            <img src="" alt="arrow type 4" className="arrow-type4" />
          </button>
        </div>
        <div className="right-side">
          <div className="carryout-text-container">
            <p className="carryout-text">You can also find me heres</p>
            <img src="" alt="arrow type 2" className="arrow-type2" />
          </div>
          <LinkCard>
            <div className="link-row">
              <span>Instagram</span>
              <span>Link</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
            </div>
            <div className="link-row">
              <span>Linkedin</span>
              <span>Link</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
            </div>
            <div className="link-row">
              <span>Github</span>
              <span>Link</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
            </div>
            <div className="link-row">
              <span>Email</span>
              <span>Copy</span>
              <img src="" alt="arrow type 3" className="arrow-type3" />
            </div>
          </LinkCard>
        </div>
      </ContactGrid>
      <div className="footer-note-container">
        <p className="footer-note">design &amp; built by me</p>
      </div>
    </Container>
  );
}
