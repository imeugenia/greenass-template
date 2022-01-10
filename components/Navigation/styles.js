const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "3em",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",

    "@media (min-width: 900px)": {
      margin: "0 auto",
      padding: "3em",
    },
  },
  list: (isColumnOnMobile) => ({
    fontFamily: "'Montserrat', sans-serif",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    fontSize: "1.8rem",
    display: "flex",
    ...(isColumnOnMobile && { flexDirection: "column" }),

    "@media (min-width: 600px)": {
      justifyContent: "flex-start",
    },
  }),
  listItem: {
    paddingBottom: "2rem",
    display: "inline-block",

    "@media (min-width: 600px)": {
      padding: "0 5rem 0 0",
    },

    "@media (min-width: 900px)": { padding: "0 0 0 5rem" },
  },
  label: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "0.6px",
    paddingBottom: "4rem",
    display: "none",

    "@media (min-width: 900px)": {
      paddingBottom: 0,
      display: "inline-block",
    },
  },
  back: {
    color: "#a7a7a7",
    padding: "0",
    margin: "3rem 0",

    "@media (min-width: 600px)": {
      padding: "0 0 0 5rem",
      margin: "0",
    },

    "@media (min-width: 900px)": {
      padding: "0 0 0 5rem",
      margin: "0",
    },
  },
};

export default styles;
