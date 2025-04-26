import { ROUTES } from "../const/routes";
import logo from "/logo.webp";

export default function Footer() {
  return (
    <footer className="relative flex min-h-[50dvh] items-center justify-center bg-black">
      <div className="flex w-full items-end justify-center gap-48">
        <div className="flex flex-col gap-2">
          <img src={logo} className="size-12 rounded-md" />
          <p className="text-sm opacity-75">© 2025 PulveSys.</p>
          <p className="text-sm opacity-75">Todos los derechos reservados.</p>
        </div>
        <ul className="flex flex-col items-end gap-4 text-sm font-normal">
          {ROUTES.map((route) => (
            <li
              key={`${route.href}_footer`}
              className="opacity-50 hover:opacity-100"
            >
              <a href={route.href}>{route.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
