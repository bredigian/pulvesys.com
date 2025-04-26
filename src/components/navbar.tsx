import { ROUTES } from "../const/routes";
import logo from "/logo.webp";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly p-8">
      <img src={logo} className="size-12 rounded-md" />
      <ul className="flex items-center gap-4 text-sm font-normal">
        {ROUTES.map((route) => (
          <li key={route.href} className="opacity-50 hover:opacity-100">
            <a href={route.href}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
