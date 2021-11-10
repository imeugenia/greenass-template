import React from "react";
import { useFela } from "react-fela";
import SocialMedia from "../SocialMedia";
import Container from "../Container";
import HamburgerNavigation from "../HamburgerNavigation";
import styles from "./styles";

const Navigation = ({ withSocialMedia, isFooter }) => {
  const { css } = useFela();
  const [viewportWidth, setViewportWidth] = React.useState(undefined);

  React.useEffect(() => {
    setViewportWidth(
      Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
  }, []);

  if (viewportWidth < 600 && !isFooter) {
    return <HamburgerNavigation />;
  }

  return (
    <Container expandStyles={styles.container}>
      <span className={css(styles.label)}>#greenass</span>
      <nav>
        <ul className={css(styles.list(viewportWidth < 600 && isFooter))}>
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
    </Container>
  );
};

export default Navigation;
