import logo from "/logo.webp";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-evenly p-8">
      <img src={logo} className="size-12 rounded-md" />
      <ul className="flex items-center gap-4 text-sm font-normal">
        <li className="opacity-50 hover:opacity-100">
          <a href="#">Inicio</a>
        </li>
        <li className="opacity-50 hover:opacity-100">
          <a href="#">Características</a>
        </li>
        <li className="opacity-50 hover:opacity-100">
          <a href="#">Planes</a>
        </li>
        <li className="opacity-50 hover:opacity-100">
          <a href="#">Nosotros</a>
        </li>
      </ul>
    </nav>
  );
}
