import { useFela } from "react-fela";
import styles from "./styles";

const VisuallyHidden = ({ as: Component = "span", ...props }) => {
  const { css } = useFela();

  return <Component {...props} className={css(styles.hidden)} />;
};

export default VisuallyHidden;
