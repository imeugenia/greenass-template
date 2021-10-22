import { useFela } from "react-fela";
import styles from "./styles";

const Title = ({ children, as, expandStyles, id }) => {
  const { css } = useFela();
  const Component = as || "h1";

  return (
    <Component id={id} className={css(styles.title, expandStyles)}>
      {children}
    </Component>
  );
};

export default Title;
