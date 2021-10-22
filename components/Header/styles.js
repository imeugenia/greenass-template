const styles = {
  header: ({ headerImage }) => ({
    maxHeight: "768px",
    height: "100vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    fontFamily: "'Montserrat', sans-serif",
    color: "#ffffff",
  }),
  container: {
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 0,
    paddingBottom: 0,

    "@media (min-width: 900px)": { paddingTop: 0, paddingBottom: 0 },
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
  title: {
    "@media (min-width: 900px)": { fontSize: "7.5em" },
  },
  paragraph: {
    "@media (min-width: 900px)": { maxWidth: "40ch", fontSize: "2.4em" },
  },
};

export default styles;
