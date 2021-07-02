import React from "react";
import { Title1, Description, Container, ColumnLayout } from "../styles";

export default function Hero() {
  return (
    <Container>
      <div className="title-container">
        <Title1 larger>Hi! I'm </Title1>
        <Title1>Saman,</Title1>
        <div className="subtitle">Full Stack Developer Based in Toronto</div>
      </div>
    </Container>
  );
}
