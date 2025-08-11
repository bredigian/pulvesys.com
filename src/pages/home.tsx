import AboutSection from "../sections/about";
import Features from "../sections/features";
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
      <Features />
      <PlansSection />
      <AboutSection />
      <SuscribeNow />
      <Footer />
    </main>
  );
}
