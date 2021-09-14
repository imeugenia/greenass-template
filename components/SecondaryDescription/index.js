import React from "react";
import { useFela } from "react-fela";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import Paragraph from "../Paragraph";
import Container from "../Container";
import Label from "../Label";
import styles from "./styles";

const SecondaryDescription = () => {
  const { css } = useFela();
  const {
    secondaryTitle,
    secondaryDescriptionFirstColumn,
    secondaryDescriptionSecondColumn,
  } = content;

  return (
    <Container
      expandStyles={{
        flexDirection: "column",
        backgroundColor: "#322a21",
        color: "#ffffff",
      }}
    >
      <Label />
      <Title as="h2" expandStyles={{ fontSize: "3em" }}>
        {secondaryTitle}
      </Title>
      <div className={css(styles.columns)}>
        <Paragraph
          expand={{
            "@media (min-width: 600px)": { marginRight: "4em" },
            ...styles.paragraph,
          }}
        >
          <ReactMarkdown>{secondaryDescriptionFirstColumn}</ReactMarkdown>
        </Paragraph>
        <Paragraph expand={styles.paragraph}>
          <ReactMarkdown>{secondaryDescriptionSecondColumn}</ReactMarkdown>
        </Paragraph>
      </div>
    </Container>
  );
};

export default SecondaryDescription;
