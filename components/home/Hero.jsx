import React from "react";
import { Title, Description, Container, ColumnLayout } from "../styles";

export default function Hero() {
  return (
    <Container>
      <Title larger>Hello I'm Saman</Title>
      <br /><br />
      <ColumnLayout columns={3}>
        <div>
          hello
        </div>
        <div>
          hello 1
        </div>
        <div>
          hello 2
        </div>
      </ColumnLayout>
    </Container>
  );
}
