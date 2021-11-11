const styles = {
  summary: {
    cursor: "pointer",
    fontSize: "1.7em",
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
    borderRadius: "0.8em",
    border: "solid 1px #e6e6e6",
    padding: "1em",
    margin: "0 auto 2em",
    backgroundColor: "#ffffff",
    display: "flex",
    width: "fit-content",
    alignItems: "center",

    "::-webkit-details-marker": {
      display: "none",
    },
  },
  icon: {
    width: "2em",
    height: "2em",
    borderRadius: "100%",
    backgroundColor: "rgba(216, 216, 216, 0.16)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    marginLeft: "1em",
  },
  details: {
    marginTop: "6em",
    textAlign: "center",

    "[open] > summary > div": {
      backgroundImage: "url('/images/line.svg')",
      backgroundPositionY: "-3px",
    },

    ":not([open]) > summary > div": {
      backgroundImage: "url('/images/arrowDown.svg')",
    },
  },
  list: {
    display: "grid",
    gap: "4rem",
    listStyleType: "none",
    margin: 0,
    padding: 0,

    "@media (min-width: 600px)": { gridTemplateColumns: "1fr 1fr" },
  },
  listItem: {
    textAlign: "left",
    padding: "3em 2.5em",
    marginBottom: "0.8em",
    borderRadius: "0.8em",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: "1.7em",
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "3rem",
    marginRight: "1rem",

    "@media (min-width: 600px)": { fontSize: "1.7em" },
  },
};

export default styles;
