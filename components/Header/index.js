import React from "react";
import { useFela } from "react-fela";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import styles from "./styles";
import Paragraph from "../Paragraph";
import Navigation from "../Navigation";
import Container from "../Container";
import SocialMedia from "../SocialMedia";

const Header = () => {
  const { css } = useFela();
  const { headerImage, title, description } = content;

  return (
    <header className={css(styles.header({ headerImage }))}>
      <Navigation />
      <Container expandStyles={styles.container}>
        <Title expandStyles={styles.title}>
          <div className={css(styles.underline)} />
          <div className={css(styles.titleText)}>{title}</div>
        </Title>
        <Paragraph expand={styles.paragraph}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Paragraph>
        <SocialMedia />
      </Container>
    </header>
  );
};

export default Header;
