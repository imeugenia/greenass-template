import React from "react";
import { useFela } from "react-fela";
import styles from "./styles";
import Navigation from "../Navigation";

const Footer = () => {
  const { css } = useFela();

  return (
    <footer className={css(styles.footer)}>
      <Navigation extend={styles.extend} />
    </footer>
  );
};

export default Footer;
