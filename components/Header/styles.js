const styles = {
  header: ({ headerImage }) => ({
    maxHeight: "768px",
    height: "100vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    fontFamily: "'Montserrat', sans-serif",
    color: "#ffffff",

    "@media (min-width: 600px)": {},
  }),
  container: {
    flexDirection: "column",
    justifyContent: "center",

    "@media (min-width: 600px)": { paddingTop: 0, paddingBottom: 0 },
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
