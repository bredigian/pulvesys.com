import {
  ENTERPRISE_PLAN_FEATURES,
  INDIVIDUAL_PLAN_FEATURES,
} from "../data/plans";

import ArrowIcon from "../components/icons/arrow-icon";
import ArrowLargeIcon from "../components/icons/arrow-large-icon";
import DocumentIcon from "../components/icons/document-icon";
import DotIcon from "../components/icons/dot-icon";
import FeaturesContainer from "../components/features-container";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PhoneIcon from "../components/icons/phone-icon";
import gianImage from "/about/gian.jpg";
import logo from "/logo.webp";
import matiImage from "/about/mati.jpg";

export default function Home() {
  return (
    <main className="flex flex-col">
      <header id="home" className="relative flex min-h-dvh flex-col">
        <Navbar />
        <section className="flex w-full grow flex-col items-center justify-center gap-4">
          <img src={logo} className="size-16 rounded-md" />
          <h1 className="text-center text-6xl leading-[1.1] text-gray-300">
            Organizá tus órdenes
            <br />
            con <span className="font-bold text-white">PulveSys</span>
          </h1>
          <p className="max-w-sm text-center text-lg font-medium opacity-50">
            Un sistema web dedicado a la gestión de órdenes de pulverización.
          </p>
          <a href="#second-section">
            <button className="mt-12 flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 font-medium text-black opacity-50 hover:opacity-100">
              Explorar
              <ArrowIcon size={24} to="DOWN" />
            </button>
          </a>
        </section>
        <ul className="flex items-center justify-center gap-8 p-8">
          <li className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100">
            <span className="text-2xl leading-[1] line-through">$0</span>
            <p className="text-sm">30 días gratis</p>
          </li>
          <li className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100">
            <PhoneIcon size={24} />
            <p className="text-sm">Soporte PWA</p>
          </li>
          <li className="flex cursor-help flex-col items-center gap-1 opacity-50 hover:opacity-100">
            <DocumentIcon size={24} />
            <p className="text-sm">Comparte tus órdenes</p>
          </li>
        </ul>
      </header>
      <FeaturesContainer />
      <section
        id="plans"
        className="flex min-h-dvh flex-col items-center justify-center gap-12"
      >
        <h4 className="text-6xl font-bold">Planes</h4>
        <p className="text-center text-2xl font-extralight">
          Contamos con 2 planes de suscripción.
          <br />
          Ambos con{" "}
          <strong className="font-bold">30 días de prueba gratuíta</strong>, sin
          necesidad de pagar nada.
        </p>
        <div className="flex w-full items-center justify-center gap-24">
          <div className="flex min-h-[30rem] max-w-[420px] flex-col items-center gap-4 rounded-lg border-2 border-white/10 bg-black/50 px-3 py-6 duration-200 ease-in-out hover:scale-[102%]">
            <span className="text-2xl font-medium">Plan Individual</span>
            <h5 className="text-4xl font-bold">
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })
                .format(12500)
                .toString()}
              /mes
            </h5>
            <ul className="flex flex-col gap-1">
              {INDIVIDUAL_PLAN_FEATURES.map((value) => (
                <li
                  key={`${value}_feature`}
                  className="flex items-start gap-1 opacity-75"
                >
                  <DotIcon size={24} />
                  <p className="max-w-2xs pr-3 text-sm lg:text-base">{value}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex min-h-[30rem] max-w-[420px] flex-col items-center gap-4 rounded-lg border-2 border-white/10 bg-black/50 px-3 py-6 duration-200 ease-in-out hover:scale-[102%]">
            <span className="text-2xl font-medium">Plan Empresa</span>
            <h5 className="text-4xl font-bold">
              {Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })
                .format(30000)
                .toString()}
              /mes
            </h5>
            <ul className="flex flex-col gap-1">
              {ENTERPRISE_PLAN_FEATURES.map((value) => (
                <li
                  key={`${value}_feature`}
                  className="flex items-start gap-1 opacity-75"
                >
                  <DotIcon size={24} />
                  <p className="max-w-2xs pr-3 text-sm lg:text-base">{value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-24">
          <p className="text-4xl font-thin">¿Te interesa alguno?</p>
          <ArrowLargeIcon size={48} to="RIGHT" />
          <a href="https://myaccount.pulvesys.com" target="_blank">
            <button className="flex w-2xs cursor-pointer items-center justify-center gap-2 rounded-md bg-gray-300 p-2 font-medium text-black hover:bg-gray-200 active:bg-gray-400">
              Registrate
            </button>
          </a>
        </div>
      </section>
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
