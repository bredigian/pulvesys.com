import FeaturesContainer from "../components/features-container";
import Footer from "../components/footer";
import HomeSection from "../sections/home";
import Navbar from "../components/navbar";
import PlansSection from "../sections/plans";
import gianImage from "/about/gian.jpg";
import matiImage from "/about/mati.jpg";

export default function Home() {
  return (
    <main className="relative flex flex-col">
      <Navbar />
      <HomeSection />
      <FeaturesContainer />
      <PlansSection />
      <section
        id="about"
        className="flex min-h-dvh items-center justify-around"
      >
        <div className="flex flex-col gap-4">
          <h4 className="text-6xl font-bold">¿Quiénes somos?</h4>
          <p className="max-w-2xl text-2xl font-extralight">
            Detrás de esto, nos encontramos:{" "}
            <strong className="font-bold">Matías Rodríguez</strong> (ingeniero
            agrónomo) y <strong className="font-bold">Gianluca Bredice</strong>{" "}
            (desarrollador web). La complementación de ambos rubros llevo a la
            creación de este interesante proyecto, que esperamos que puedas
            disfrutarlo y experimentarlo tanto como lo hacemos nosotros.
          </p>
        </div>
        <div className="flex items-center gap-24">
          <div className="flex flex-col items-center gap-2">
            <div className="aspect-square size-64">
              <img
                src={matiImage}
                className="size-full rounded-lg object-cover"
              />
            </div>
            <p className="text-lg font-light">Matías Rodríguez</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="aspect-square size-64">
              <img
                src={gianImage}
                className="size-full rounded-lg object-cover"
              />
            </div>
            <p className="text-lg font-light">Gianluca Bredice</p>
          </div>
        </div>
      </section>
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
