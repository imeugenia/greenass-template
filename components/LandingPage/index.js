import content from "../../_data/landing-page.json";
import FAQ from "../FAQ";
import Goals from "../Goals";
import Header from "../Header";
import SecondaryDescription from "../SecondaryDescription";
import Video from "../Video";
import Help from "../Help";
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
      <Footer />
    </>
  );
};

export default LandingPage;
