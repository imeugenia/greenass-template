import { useFela } from "react-fela";
import styles from "./styles";

const Paragraph = ({ children }) => {
  const { css } = useFela();
  return <p className={css(styles.paragraph)}>{children}</p>;
};

export default Paragraph;
