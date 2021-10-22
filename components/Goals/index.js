import React from "react";
import { useFela } from "react-fela";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import Paragraph from "../Paragraph";
import Container from "../Container";
import styles from "./styles";

const getComponents = (expandProps) => {
  const components = {
    p: (props) => <Paragraph {...props} {...expandProps} />,
  };
  components.p.displayName = "Paragraph";

  return components;
};

const Goals = () => {
  const { css } = useFela();
  const { goals } = content;

  return (
    <Container
      expandStyles={{
        flexDirection: "column",
        paddingTop: 0,

        "@media (min-width: 600px)": { paddingTop: 0 },
      }}
    >
      <div className={css(styles.titleContainer)}>
        <Title
          id="goals"
          as="h2"
          expandStyles={{ fontSize: "3em", textAlign: "center" }}
        >
          {goals.title}
        </Title>
        <ReactMarkdown
          components={getComponents({ expand: { textAlign: "center" } })}
        >
          {goals.description}
        </ReactMarkdown>
      </div>

      <div className={css(styles.listContainer)}>
        <ul className={css(styles.list)}>
          {goals.goalList.map(
            ({ title, description, image, imageDescription }, index) => (
              <li key={index} className={css(styles.listItem({ image }))}>
                <div className={css(styles.listInnerBox)}>
                  <Title as="h3" expandStyles={styles.question}>
                    {title}
                  </Title>
                  <ReactMarkdown components={getComponents()}>
                    {description}
                  </ReactMarkdown>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Goals;
