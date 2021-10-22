import { useFela } from "react-fela";

const styles = {
  display: "flex",
  justifyContent: "center",
  padding: "10em 3em",
  maxWidth: "102.4rem",
  margin: "auto",

  "@media (min-width: 900px)": { padding: "13em 10em" },
};

const Container = ({ children, expandStyles }) => {
  const { css } = useFela();

  return <div className={css(styles, expandStyles)}>{children}</div>;
};

export default Container;
