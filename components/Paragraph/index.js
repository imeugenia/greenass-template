import { useFela } from "react-fela";
import styles from "./styles";

const Paragraph = ({ children, expand }) => {
  const { css } = useFela();
  return <p className={css(styles.paragraph, expand)}>{children}</p>;
};

export default Paragraph;
