const styles = {
  section: {
    padding: "3rem",

    "@media (min-width: 600px)": {
      padding: 0,
      paddingRight: "10em",
      margin: "13em 0",
    },
  },
  image: {
    display: "none",

    "@media (min-width: 600px)": {
      borderTopRightRadius: "0.8em",
      borderBottomRightRadius: "0.8em",
      height: "820px",
      flexGrow: 1,
      minWidth: "25%",
      display: "inline-block",
      backgroundImage: `url("/images/toilet-paper.jpeg")`,
      backgroundSize: "cover",
      marginRight: "4em",
    },
  },
  listContainer: {
    display: "flex",
  },
  list: {
    display: "inline-block",
    flexGrow: 3,
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  listItem: {
    padding: "2em 2.5em",
    marginBottom: "0.8em",
    borderRadius: "0.8em",
    border: "solid 1px #e6e6e6",
    display: "flex",
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

    ":not([open]) > summary > h3": {
      margin: 0,
    },
  },
  summary: {
    display: "block",
    cursor: "pointer",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    "::-webkit-details-marker": {
      display: "none",
    },
  },
};

export default styles;
