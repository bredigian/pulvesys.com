import { Link } from "react-scroll";
import { ROUTES } from "../const/routes";
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
              className="opacity-50 hover:opacity-100"
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
        </ul>
      </div>
    </footer>
  );
}
