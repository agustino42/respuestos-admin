import {
  LayoutDashboard,
  Shapes,
  ShoppingBag,
  Tag,
  UsersRound,
} from "lucide-react";

export const navLinks = [
  {
    url: "/",
    icon: <LayoutDashboard />,
    label: "Tablero",
  },
  {
    url: "/collections",
    icon: <Shapes />,
    label: "Cartelera",
  },
  {
    url: "/products",
    icon: <Tag />,
    label: "Productos",
  },
  {
    url: "/orders",
    icon: <ShoppingBag />,
    label: "Ordenes",
  },
  {
    url: "/customers",
    icon: <UsersRound />,
    label: "Clientes",
  },
];
