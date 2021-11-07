import { useFela } from "react-fela";
import VisuallyHidden from "../VisuallyHidden";
import Twitter from "../Icons/Twitter";
import Instagram from "../Icons/Instagram";
import styles from "./styles";

const SocialMedia = () => {
  const { css } = useFela();

  return (
    <ul className={css(styles.list)}>
      <li>
        <a title="Twitter" href="https://twitter.com">
          <Twitter aria-hidden="true" focusable="false" />
          <VisuallyHidden>Twitter</VisuallyHidden>
        </a>
      </li>
      <li>
        <a title="Instagram" href="https://www.instagram.com/greenasstp/">
          <Instagram aria-hidden="true" focusable="false" />
          <VisuallyHidden>Instagram</VisuallyHidden>
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
