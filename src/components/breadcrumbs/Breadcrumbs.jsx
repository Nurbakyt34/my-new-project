import { Link, useLocation } from "react-router";

const routeNames = {
  "about": "О НАС",
  "catalog": "КАТАЛОГИ",
  "tours": "3D ТУРЫ",
  "doqu": "DOQU HOME",
};

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  // Показывать только если НЕ на главной
  if (paths.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-teal-700 text-sm font-medium mt-4">
      <Link to="/" className="hover:underline">ГЛАВНАЯ</Link>
      {paths.map((segment, index) => {
        const path = "/" + paths.slice(0, index + 1).join("/");
        const label = routeNames[segment] || segment.toUpperCase();

        return (
          <span key={path} className="flex items-center space-x-2">
            <span className="text-gray-400">›</span>
            <Link to={path} className="hover:underline">{label}</Link>
          </span>
        );
      })}
    </nav>
  );
}
