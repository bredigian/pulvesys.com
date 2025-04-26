import AboutSection from "../sections/about";
import FeaturesContainer from "../components/features-container";
import Footer from "../components/footer";
import HomeSection from "../sections/home";
import Navbar from "../components/navbar";
import PlansSection from "../sections/plans";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Navbar />
      <HomeSection />
      <FeaturesContainer />
      <PlansSection />
      <AboutSection />
      <section className="grid h-64 place-items-center bg-zinc-950">
        <p className="text-4xl font-thin">
          ¿Que estás esperando?{" "}
          <a
            href="https://myaccount.pulvesys.com"
            target="_blank"
            className="font-semibold underline"
          >
            ¡Comenzá a utilizar PulveSys ya!
          </a>
        </p>
      </section>
      <Footer />
    </main>
  );
}
