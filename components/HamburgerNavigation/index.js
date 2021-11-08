import React from "react";
import { useFela } from "react-fela";
import Hamburger from "../Icons/Hamburger";
import Cross from "../Icons/Cross";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./styles";

const HamburgerNavigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { css } = useFela();

  return (
    <div>
      <button
        className={css(styles.toggle)}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        {isOpen ? <Cross /> : <Hamburger />}
        <VisuallyHidden>Open menu</VisuallyHidden>
      </button>
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
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerNavigation;
