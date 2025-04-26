import { Link, useLocation } from "react-router"; // Исправлено на react-router-dom

const routeNames = {
  about: "О НАС",
  catalog: "КАТАЛОГИ",
  tours: "3D ТУРЫ",
  product: "ПРОДУКТЫ",
  similar: "ВСЕ ПРОДУКТЫ",
  doqu: "DOQU HOME",
  category: "КАТЕГОРИЯ", // Статическое имя маршрута
};

// Функция для красивого преобразования slug (например, "krovati-i-matrasy" → "Кровати и матрасы")
const formatSlug = (slug) => {
  return slug
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
};

export default function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  if (paths.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-teal-700 text-sm mt-[160px] font-medium ">
      <Link to="/" className="hover:underline">ГЛАВНАЯ</Link>
      {paths.map((segment, index) => {
        const path = "/" + paths.slice(0, index + 1).join("/");

        // Если сегмент в словаре routeNames — использовать его, иначе форматируем slug
        const label =
          routeNames[segment] ||
          (index > 0 && paths[index - 1] === "category"
            ? formatSlug(segment)
            : segment.toUpperCase());

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
