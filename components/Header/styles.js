const styles = {
  header: ({ headerImage }) => ({
    maxHeight: "768px",
    height: "100vh",
    backgroundImage: `url(${headerImage})`,
    backgroundSize: "cover",
  }),
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "#ffffff",
    margin: "0 10em",
    height: "100%",
  },
};

export default styles;
