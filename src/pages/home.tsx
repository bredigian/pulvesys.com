import ArrowIcon from "../components/icons/arrow-icon";
import DocumentIcon from "../components/icons/document-icon";
import FeaturesContainer from "../components/features-container";
import Navbar from "../components/navbar";
import PhoneIcon from "../components/icons/phone-icon";
import logo from "/logo.webp";

export default function Home() {
  return (
    <main>
      <header id="first-section" className="relative flex min-h-dvh flex-col">
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
    </main>
  );
}
