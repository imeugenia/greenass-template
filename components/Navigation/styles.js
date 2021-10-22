const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "3em",
    maxWidth: "102.4rem",
    flexDirection: "column",
    color: "#ffffff",
    fontFamily: "'Montserrat', sans-serif",

    "@media (min-width: 900px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "0 auto",
    },
  },
  list: {
    fontFamily: "'Montserrat', sans-serif",
    listStyleType: "none",
    margin: 0,
    padding: 0,
    fontSize: "1.8rem",
    display: "flex",
    justifyContent: "space-between",

    "@media (min-width: 600px)": {
      justifyContent: "flex-start",
    },

    "> li": {
      paddingBottom: "2rem",
      display: "inline-block",

      "@media (min-width: 600px)": {
        padding: "0 5rem 0 0",
      },

      "@media (min-width: 900px)": { padding: "0 0 0 5rem" },
    },
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
};

export default styles;
