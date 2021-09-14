import { useFela } from "react-fela";

const styles = {
  padding: "0.3em 1.2em",
  borderRadius: "1.25em",
  backgroundColor: "#4a8314",
  alignSelf: "flex-start",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "1.5em",
  fontWeight: "700",
};

const Label = ({ children, expandStyles }) => {
  const { css } = useFela();

  return <div className={css(styles, expandStyles)}>#Greenass</div>;
};

export default Label;
