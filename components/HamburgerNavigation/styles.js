const styles = {
  container: (isOpen) => ({
    position: "absolute",
    flexDirection: "column",
    width: "100%",
    left: "0",
    right: "0",
    padding: "1em",
    ...(isOpen && { background: "rgb(50 42 33 / 0.95)", zIndex: "2" }),

    "@media (min-width: 900px)": {
      paddingTop: "2em",
      paddingBottom: "2em",
    },
  }),
  toggleBox: (isOpen) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  toggle: {
    border: "none",
    margin: "0",
    padding: "0",
    width: "auto",
    background: "transparent",
    fontSize: "3em",
    color: "#ffffff",
  },
  icon: {
    height: "2.5em",
    width: "2.5em",
  },
  label: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "2rem",
    fontWeight: 800,
    letterSpacing: "0.6px",
  },
  list: {
    fontFamily: "'Montserrat', sans-serif",
    listStyleType: "none",
    margin: "2rem 0 0 0",
    padding: 0,
    fontSize: "1.8rem",
    display: "flex",
    flexDirection: "column",

    "> li": {
      paddingBottom: "2rem",
    },
  },
  nav: (isVisible) => ({
    ...(!isVisible && { display: "none" }),
  }),
};

export default styles;
