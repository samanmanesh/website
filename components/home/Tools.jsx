import React from "react";
import styled from "styled-components";
import { Title2, Codes} from "../styles";
import { motion } from "framer-motion";
const ToolsWrapper = styled(motion.section)``;

const Tag = styled.div`
  /* padding: 0.5rem .5rem; */
  border-bottom-left-radius: 0.3rem;
  border-bottom: 2px solid ${(props) => props.color ?? css`rgb(20, 63, 191)`};
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  ::before {
    content: "| ";
    color: ${(props) => props.color ?? css`rgb(20, 63, 191)`};
  }
  ::after {
    content: " ";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.color ?? css`rgb(20, 63, 191)`};
    mix-blend-mode: difference;
    transition: all 0.5s ease;
  }
  &:hover {
    ::after {
      /* color: #000000; */
      height: 100%;
    }
  }
`;




const ToolsContainer = styled.section`
  margin-top: 8rem;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    .tools-container {
      max-width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      & > * {
        padding: 1rem;
        margin: 1rem 1rem;
        font-size: 1.3rem;
      }
    }
  }
`;
export default function Tools({fadeInUp}) {
  return (
    <ToolsWrapper animate={fadeInUp}>
      <Codes content="section">
        <ToolsContainer>
          <Title2>Tools {"{"}</Title2>
          <section>
            <div className="tools-container">
              <Tag color="rgb(43,158,237)">Visual Studio Code</Tag>
              <Tag color="rgb(133,47,136)">Rider</Tag>
              <Tag color="rgb(247,247,247)">Unity</Tag>
              <Tag color="rgb(1,147,49)">Vi Editor</Tag>
              <Tag color="rgb(1,222,247)">Framer</Tag>
              <Tag color="rgb(235,76,29)">Figma</Tag>
            </div>
          </section>
          <Title2>{"}"}</Title2>
        </ToolsContainer>
      </Codes>
    </ToolsWrapper>
  );
}
