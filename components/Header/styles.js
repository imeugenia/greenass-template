const styles = {
  header: ({ headerImage }) => ({
    maxHeight: "768px",
    height: "100vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",

    "@media (min-width: 600px)": {},
  }),
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#ffffff",
    margin: "0 3em",

    height: "100%",

    "@media (min-width: 600px)": {
      margin: "0 10em",
    },
  },
};

export default styles;
