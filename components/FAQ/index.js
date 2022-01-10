import React from "react";
import { useFela } from "react-fela";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import Paragraph from "../Paragraph";
import styles from "./styles";

const useComponents = (expandProps) => {
  const { css } = useFela();

  const components = {
    img: (props) => {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={css({ maxWidth: "100%", margin: "1rem 0" })}
          src={props.src}
          alt={props.alt}
        />
      );
    },
    a: (props) => (
      <a className={css({ color: "rgb(74 130 15)" })} {...props}>
        {props.children}
      </a>
    ),
  };
  components.img.displayName = "Image";
  components.a.displayName = "Link";

  return components;
};

const FAQ = () => {
  const { css } = useFela();
  const { faq } = content;
  const RichTextComponents = useComponents();

  return (
    <section className={css(styles.section)}>
      <Title
        id="about"
        as="h2"
        expandStyles={{ fontSize: "3em", textAlign: "center" }}
      >
        FAQ
      </Title>

      <div className={css(styles.listContainer)}>
        <div className={css(styles.image)} />
        <ul className={css(styles.list)}>
          {faq.map(({ question, answer, image, imageDescription }, index) => (
            <li key={index} className={css(styles.listItem)}>
              <details className={css(styles.details)}>
                <summary className={css(styles.summary)}>
                  <Title as="h3" expandStyles={styles.question}>
                    {question}
                  </Title>
                  <div className={css(styles.icon)} />
                </summary>
                <Paragraph>
                  <ReactMarkdown components={RichTextComponents}>
                    {answer}
                  </ReactMarkdown>
                </Paragraph>
                {image && (
                  <Image
                    width="224"
                    height="94"
                    src={image}
                    alt={imageDescription || ""}
                  ></Image>
                )}
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
