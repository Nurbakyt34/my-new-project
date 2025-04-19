import React, { useState } from "react";
import { Link } from "react-router"; // исправил на "react-router-dom"!

const categories = [
    {
        title: "Гостиная",
        path: "/gostin",
        subcategories: ["Комплекты мягкой мебели", "Угловые диваны", "Диваны", "Диваны-слиперы"],
        image: "https://link-drugoy-kartinki.jpg",
    },
    {
        title: "Столовая",
        path: "/stolov",
        subcategories: [
            "Столовые гарнитуры",
            "Комплекты кухонных столов",
            "Столы",
            "Стулья",
            "Консоли",
            "Зеркала",
            "Витрины",
            "Пеналы",
        ],
        image: "https://link-kartinki.jpg",
    },
    {
        title: "Спальня",
        path: "/spalny",
        subcategories: ["Спальные гарнитуры", "Гардероб и шкафы", "Кровати", "Прикроватные тумбочки"],
        image: "https://link-kartinki-dlya-spalni.jpg",
    },
    {
        title: "Кровати и матрасы",
        path: "/kravat",
        subcategories: ["Матрасы", "Кровати", "Изголовья кроватей"],
        image: "https://link-kartinki-dlya-detskoj.jpg",
    },
    {
        title: "Детская",
        path: "/kids",
        subcategories: ["Юношеские гарнитуры", "Гардеробы и шкафы", "Рабочие столы"],
        image: "https://link-kartinki-dlya-detskoj.jpg",
    },
    {
        title: "Для сада",
        path: "/sad",
        subcategories: ["Мини комплекты", "Комплекты наружных столов", "Комплекты уголков"],
        image: "https://link-kartinki-dlya-detskoj.jpg",
    },
    {
        title: "Комплектующие",
        path: "/complect",
        subcategories: ["Мебель для прихожей", "Тумбы под ТВ", "Журнальные столики"],
        image: "https://link-kartinki-dlya-detskoj.jpg",
    },
];

const NavMenu = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMouseEnter = (cat) => {
        setActiveCategory(cat);
        setMenuOpen(true);
    };

    const handleMouseLeave = () => {
        setMenuOpen(false);
    };

    return (
        <div className="relative p-12 app-container">
            {/* Верхнее меню */}
            <nav
                className="flex gap-[35px] text-xl mt-[135px] ml-[15px] mb-[2px] bg-white "
                onMouseLeave={handleMouseLeave}
            >
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="relative cursor-pointer"
                        onMouseEnter={() => handleMouseEnter(cat)}
                    >
                        <Link
                            to={cat.path}
                            className="hover:text-teal-600 transition-colors duration-300"
                        >
                            {cat.title}
                        </Link>
                    </div>
                ))}
            </nav>
                <div
                    className={`absolute left-0 top-[calc(100%+5px)] w-full bg-white shadow-lg transition-all mb-50 duration-500 overflow-hidden ${menuOpen ? "h-[240px] opacity-100 p-8" : "max-h-0 opacity-0 p-0"
                        }`}
                    onMouseEnter={() => setMenuOpen(true)}
                    onMouseLeave={handleMouseLeave}
                    style={{ marginTop: '5px' }}
                >
                    {activeCategory && (
                        <div className="flex justify-between items-start">
                            {/* Подкатегории */}
                            <div className="grid grid-cols-2 gap-6">
                                {activeCategory.subcategories.map((sub, idx) => (
                                    <button
                                        key={idx}
                                        className="text-black font-semibold hover:text-teal-600 text-left transition-colors duration-300"
                                        onClick={() => console.log(`Clicked on ${sub}`)}
                                    >
                                        {sub}
                                    </button>
                                ))}
                            </div>

                            {/* Картинка */}
                            <div className="w-64 h-40 rounded-lg overflow-hidden">
                                <img
                                    src={activeCategory.image}
                                    alt={activeCategory.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                    )}
                </div>

        </div>
    );
};

export default NavMenu;
