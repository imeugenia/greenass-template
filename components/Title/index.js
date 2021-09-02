import { useFela } from "react-fela";
import styles from "./styles";

const Title = ({ children }) => {
  const { css } = useFela();
  return <h1 className={css(styles.title)}>{children}</h1>;
};

export default Title;
