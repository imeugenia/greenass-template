const styles = {
  columns: {
    display: "flex",
    flexDirection: "column",

    "@media (min-width: 600px)": { wrap: "no-wrap", flexDirection: "row" },
  },
  paragraph: {
    lineHeight: "1.69",
  },
  background: {
    backgroundColor: "#322a21",
    color: "#ffffff",
  },
};

export default styles;
