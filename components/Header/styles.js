const styles = {
  header: ({ headerImage }) => ({
    maxHeight: "768px",
    height: "100vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
    backgroundColor: "rgb(50, 42, 33)",
    fontFamily: "'Montserrat', sans-serif",
    color: "#ffffff",
  }),
  navBackground: {
    backgroundColor: "rgb(50, 42, 33, 0.5)",
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",

    "@media (min-width: 900px)": { paddingTop: "5rem", paddingBottom: 0 },
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
    position: "relative",
    fontSize: "5rem",
    lineHeight: "1.2",

    "@media (min-width: 900px)": { fontSize: "7.5em" },
  },
  titleText: {
    zIndex: 1,
    position: "relative",
  },
  paragraph: {
    "@media (min-width: 900px)": { maxWidth: "40ch", fontSize: "2.4em" },
  },
  underline: {
    width: "100%",
    height: "50px",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgb(74, 130, 15, 0.55)",
    zIndex: 0,
    left: "-2rem",
  },
};

export default styles;
