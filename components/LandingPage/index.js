import content from "../../_data/landing-page.json";
import FAQ from "../FAQ";
import Header from "../Header";
import SecondaryDescription from "../SecondaryDescription";
import Video from "../Video";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Video />
      <SecondaryDescription />
      <FAQ />
    </>
  );
};

export default LandingPage;
