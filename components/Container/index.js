import { useFela } from "react-fela";

const styles = {
  display: "flex",
  justifyContent: "center",
  padding: "10em 3em",
  maxWidth: "102.4rem",
  margin: "auto",

  "@media (min-width: 900px)": { padding: "13em 10em" },
};

const Container = ({ children, expandStyles, as }) => {
  const { css } = useFela();
  const Component = as || "div";

  return (
    <Component className={css(styles, expandStyles)}>{children}</Component>
  );
};

export default Container;
