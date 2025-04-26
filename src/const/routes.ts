interface RouteProps {
  name: string;
  href: `#${string}`;
}

export const ROUTES: RouteProps[] = [
  {
    name: "Inicio",
    href: "#",
  },
  {
    name: "Características",
    href: "#features",
  },
  {
    name: "Planes",
    href: "#plans",
  },
  {
    name: "Nosotros",
    href: "#about",
  },
];
