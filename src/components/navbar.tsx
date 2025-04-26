import { Link } from "react-scroll";
import { ROUTES } from "../const/routes";
import logo from "/logo.webp";
import { useIsMobile } from "../hooks/use-mobile";

export default function Navbar() {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 z-[9999] my-4 flex items-center justify-center self-center rounded-lg bg-neutral-950/10 p-4 backdrop-blur-sm md:gap-44 lg:gap-96">
      <img src={logo} className="hidden size-12 rounded-md md:block" />
      <nav id="navbar">
        <ul className="flex items-center gap-4 text-sm font-normal">
          {ROUTES.map((route) => (
            <li key={route.href} className="opacity-50 hover:opacity-100">
              <Link
                to={route.href}
                smooth
                duration={500}
                offset={!isMobile ? 0 : -70}
                className="cursor-pointer"
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
