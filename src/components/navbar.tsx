import { ROUTES } from "../const/routes";
import logo from "/logo.webp";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-[9999] my-4 flex items-center justify-center gap-64 self-center rounded-lg bg-neutral-950/10 p-4 backdrop-blur-sm">
      <img src={logo} className="size-12 rounded-md" />
      <nav>
        <ul className="flex items-center gap-4 text-sm font-normal">
          {ROUTES.map((route) => (
            <li key={route.href} className="opacity-50 hover:opacity-100">
              <a href={route.href}>{route.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
