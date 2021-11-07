import React from "react";
import { useFela } from "react-fela";
import SocialMedia from "../SocialMedia";
import styles from "./styles";

const Navigation = ({ withSocialMedia }) => {
  const { css } = useFela();

  return (
    <div className={css(styles.container)}>
      <span className={css(styles.label)}>#greenass</span>
      <nav>
        <ul className={css(styles.list)}>
          <li>
            <a href="#about">About Project</a>
          </li>
          <li>
            <a href="#goals">Our Goals</a>
          </li>
          <li>
            <a href="#help">Help out</a>
          </li>
          {withSocialMedia && <SocialMedia />}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
