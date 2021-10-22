const styles = {
  container: {
    display: "flex",
    color: "#ffffff",
    fontFamily: "'Montserrat', sans-serif",

    "@media (min-width: 600px)": {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "baseline",
      margin: "0 auto",
      maxWidth: "102.4rem",
      padding: "6rem 0",
    },
  },
  list: {
    fontFamily: "'Montserrat', sans-serif",

    listStyleType: "none",
    margin: 0,
    padding: 0,
    fontSize: "1.3rem",

    "> li": {
      paddingBottom: "2rem",

      "@media (min-width: 600px)": {
        display: "inline-block",
        paddingLeft: "5rem",
      },
    },
  },
  label: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "0.6px",
    paddingBottom: "4rem",

    "@media (min-width: 600px)": {
      paddingBottom: 0,
    },
  },
};

export default styles;
