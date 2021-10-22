const styles = {
  titleContainer: {
    marginBottom: "6em",
  },
  listContainer: {
    display: "flex",
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "stretch",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    margin: "3.6em",

    "@media (min-width: 600px)": { flex: "calc(50% - 3.6em * 2)" },
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
    marginBottom: "2.4rem",
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
