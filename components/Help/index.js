import React from "react";
import { useFela } from "react-fela";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import Paragraph from "../Paragraph";
import Container from "../Container";
import styles from "./styles";
import HelpOut from "../HelpOut";

const getComponents = (expandProps) => {
  const components = {
    p: (props) => <Paragraph {...props} {...expandProps} />,
  };
  components.p.displayName = "Paragraph";

  return components;
};

const Help = () => {
  const { css } = useFela();
  const { contributions } = content;

  return (
    <section className={css(styles.background)}>
      <Container
        expandStyles={{
          flexDirection: "column",
          paddingTop: 0,

          "@media (min-width: 600px)": { paddingTop: "6rem" },
        }}
      >
        <div className={css(styles.titleContainer)}>
          <Title
            id="help"
            as="h2"
            expandStyles={{ fontSize: "3em", textAlign: "center" }}
          >
            {contributions.title}
          </Title>
          <ReactMarkdown
            components={getComponents({ expand: { textAlign: "center" } })}
          >
            {contributions.description}
          </ReactMarkdown>
        </div>

        <div className={css(styles.listContainer)}>
          <ul className={css(styles.list)}>
            {contributions.helpList.map(
              ({ title, description, icon }, index) => (
                <li key={index} className={css(styles.listItem)}>
                  {icon && (
                    <Image
                      src={icon}
                      alt=""
                      width={44}
                      height={44}
                      style={{ marginBottom: "2.4rem" }}
                    />
                  )}
                  <Title as="h3" expandStyles={styles.question}>
                    {title}
                  </Title>
                  <ReactMarkdown components={getComponents()}>
                    {description}
                  </ReactMarkdown>
                </li>
              )
            )}
          </ul>
        </div>
        <HelpOut />
      </Container>
    </section>
  );
};

export default Help;
