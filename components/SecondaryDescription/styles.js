const styles = {
  columns: {
    display: "flex",
    flexDirection: "column",

    "@media (min-width: 600px)": { wrap: "no-wrap", flexDirection: "row" },
  },
  paragraph: {
    fontSize: "1.6em",
    lineHeight: "1.69",
  },
};

export default styles;
