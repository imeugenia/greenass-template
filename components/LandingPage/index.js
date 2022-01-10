import content from "../../_data/landing-page.json";
import FAQ from "../FAQ";
import Goals from "../Goals";
import Header from "../Header";
import SecondaryDescription from "../SecondaryDescription";
import Video from "../Video";
import Help from "../Help";
import Contact from "../Contact";
import Footer from "../Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Video />
      <SecondaryDescription />
      <FAQ />
      <Goals />
      <Help />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
