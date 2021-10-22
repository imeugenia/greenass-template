const styles = {
  header: ({ headerImage }) => ({
    maxHeight: "768px",
    height: "100vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    fontFamily: "'Montserrat', sans-serif",

    "@media (min-width: 600px)": {},
  }),
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#ffffff",
    margin: "0 3em",

    "@media (min-width: 600px)": {
      margin: "0 10em",
    },
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    fontSize: "1.5rem",

    "> li": {
      paddingBottom: "2rem",

      "@media (min-width: 600px)": {
        display: "inline-block",
        paddingLeft: "5rem",
      },
    },
  },
};

export default styles;
