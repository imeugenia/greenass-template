import React from "react";
import { useFela } from "react-fela";
import Container from "../Container";
import content from "../../_data/landing-page.json";
import Title from "../Title";
import Paragraph from "../Paragraph";

const Contact = () => {
  const { css } = useFela();
  const { contact } = content;

  return (
    <Container
      expandStyles={{
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Title>{contact.title}</Title>
      <Paragraph>{contact.description}</Paragraph>
      <Paragraph expand={{ fontWeight: 700 }}>{contact.email}</Paragraph>
    </Container>
  );
};

export default Contact;
