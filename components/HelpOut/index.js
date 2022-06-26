import React from "react";
import { useFela } from "react-fela";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import Paragraph from "../Paragraph";
import styles from "./styles";

const HelpOut = () => {
  const { css } = useFela();
  const { moreHelp } = content.contributions;

  return (
    <details className={css(styles.details)}>
      <summary className={css(styles.summary)}>
        <span>More things you can do</span>
        <div className={css(styles.icon)} />
      </summary>
      <Paragraph expand={{ marginBottom: "3em" }}>
        <ReactMarkdown>{moreHelp.description}</ReactMarkdown>
      </Paragraph>
      <ul className={css(styles.list)}>
        {moreHelp.list.map(({ title, description }, index) => {
          return (
            <li key={index} className={css(styles.listItem)}>
              <>
                <Title as="h4" expandStyles={styles.title}>
                  {title}
                </Title>
                <Paragraph>
                  <ReactMarkdown>{description}</ReactMarkdown>
                </Paragraph>
              </>
            </li>
          );
        })}
      </ul>
    </details>
  );
};

export default HelpOut;
