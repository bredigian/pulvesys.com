import { Link } from "react-scroll";
import { ROUTES } from "../const/routes";
import SigninIcon from "./icons/signin.icon";
import logo from "/logo.webp";
import { useIsMobile } from "../hooks/use-mobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-4 z-[9999] flex items-center justify-center self-center rounded-lg bg-neutral-950/10 p-2 backdrop-blur-sm md:gap-44 lg:gap-96">
      <img src={logo} className="hidden size-12 rounded-md md:block" />
      <nav id="navbar" className="flex items-center gap-12">
        <ul className="flex items-center gap-4 text-sm font-normal">
          {ROUTES.map((route) => (
            <li
              key={route.href}
              className="opacity-50 duration-500 hover:opacity-100"
            >
              <Link
                to={route.href}
                smooth
                duration={500}
                offset={route.href === "#about" ? (isMobile ? -20 : 0) : -60}
                className="cursor-pointer"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
        <a
          className="hidden md:block"
          href="https://myaccount.pulvesys.com"
          target="_blank"
        >
          <button
            type="button"
            className="flex cursor-pointer items-center gap-1 rounded-md bg-gray-300 px-2 py-1 text-sm text-black opacity-50 duration-500 hover:opacity-100"
          >
            Ingresar
            <SigninIcon size={16} />
          </button>
        </a>
      </nav>
    </header>
  );
}
