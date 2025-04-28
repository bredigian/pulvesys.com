import { Link } from "react-scroll";
import { ROUTES } from "../const/routes";
import SigninIcon from "./icons/signin.icon";
import logo from "/logo.webp";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[50dvh] items-center justify-center bg-black">
      <div className="flex w-full flex-col-reverse items-center justify-center gap-12 md:flex-row md:items-end md:gap-24 lg:gap-48">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <img src={logo} className="size-12 rounded-md" />
          <p className="text-sm opacity-75">© 2025 PulveSys.</p>
          <p className="text-sm opacity-75">Todos los derechos reservados.</p>
        </div>
        <ul className="flex flex-col items-center gap-4 text-sm font-normal md:items-end">
          {ROUTES.map((route) => (
            <li
              key={`${route.href}_footer`}
              className="opacity-50 duration-500 hover:opacity-100"
            >
              <Link
                smooth
                duration={500}
                to={route.href}
                className="cursor-pointer"
              >
                {route.name}
              </Link>
            </li>
          ))}
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
        </ul>
      </div>
    </footer>
  );
}
