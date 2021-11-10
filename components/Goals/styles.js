const styles = {
  titleContainer: {
    marginBottom: "6em",
  },
  listContainer: {
    display: "flex",
  },
  list: {
    display: "grid",
    gap: "4rem",
    listStyleType: "none",
    margin: 0,
    padding: 0,

    "@media (min-width: 600px)": { gridTemplateColumns: "1fr 1fr" },
  },
  listItem: ({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    borderRadius: "0.8em",
    border: "solid 1px #e6e6e6",
    color: "#ffffff",
  }),
  listInnerBox: {
    padding: "3em 2.5em",
    borderRadius: "0.8em",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
  },
  question: {
    fontSize: "1.7em",
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: "3rem",
    marginRight: "1rem",

    "@media (min-width: 600px)": { fontSize: "1.7em" },
  },
  icon: {
    minWidth: "4em",
    height: "4em",
    borderRadius: "100%",
    backgroundColor: "rgba(216, 216, 216, 0.16)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  details: {
    width: "100%",

    "[open] > summary > div": {
      backgroundImage: "url('/images/line.svg')",
      backgroundPositionY: "top",
    },

    ":not([open]) > summary > div": {
      backgroundImage: "url('/images/arrowDown.svg')",
    },
  },
  summary: {
    display: "block",
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",

    "::-webkit-details-marker": {
      display: "none",
    },
  },
};

export default styles;
