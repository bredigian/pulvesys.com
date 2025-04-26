import AboutSection from "../sections/about";
import FeaturesContainer from "../components/features-container";
import Footer from "../components/footer";
import HomeSection from "../sections/home";
import Navbar from "../components/navbar";
import PlansSection from "../sections/plans";
import SuscribeNow from "../sections/suscribe-now";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Navbar />
      <HomeSection />
      <FeaturesContainer />
      <PlansSection />
      <AboutSection />
      <SuscribeNow />
      <Footer />
    </main>
  );
}
