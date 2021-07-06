import React from "react";
import { Container, Title3 } from "./styles";
import styled from "styled-components";

const ContactGrid = styled.section`
  background: #27276a;
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "left ."
    ". right";

    .left-side{
        grid-area: left
    }

    .right-side{
        grid-area: right;
    }

  .carryout-text-img-container {
    /* background: #340101; */
    display: flex;
    align-items: flex-end;

    .carryout-text {
      /* background: #056450; */
      font-size: 2rem;
      line-height: 1.4;
      margin: 0;
    }
    .arrow-type2 {
        margin-left: auto;
      background: #c08913;
    }
  }
`;
const LinkCard = styled.div``;

export default function Footer() {
  return (
    <Container>
      <div className="titles-container">
        <Title3>Contact</Title3>
        <img
          src="arrow3-down-right.svg"
          alt="arrow type 3"
          className="arrow-type3"
        />
      </div>
      <ContactGrid>
        <div className="left-side">
          <div className="carryout-text-img-container">
            <p className="carryout-text">
              Want to work together?
              <br />
              Just want to say hi?
              <br />
              Drop me a line here
            </p>
            <img
              src="arrow2-down-left.svg"
              alt="arrow type 2"
              className="arrow-type2"
            />
          </div>
          <form action="">
            <input
              type="text"
              value="Your Name"
              onChange={(e) => console.log(e.target.value)}
              className=""
            />
            <input type="text" />
            <input type="text" />
          </form>
          <button className="button submit">
            <span>Sens Message !</span>
            <img src="" alt="arrow type 4" className="arrow-type4" />
          </button>
        </div>
        <div className="right-side">
          <div className="carryout-text-img-container">
            <p className="carryout-text">You can also find me heres</p>
            <img src="arrow2-down-left.svg" alt="arrow type 2" className="arrow-type2" />
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
