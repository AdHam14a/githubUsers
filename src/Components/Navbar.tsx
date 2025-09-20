import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-2.5 flex justify-between">
      <img
        src={darkMode ? "/github-mark-white.png" : "/github-mark.png"}
        alt="logo"
        className="w-[3rem] h-[3rem] cursor-pointer"
      />

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 cursor-pointer"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>

      <ul className="flex flex-row justify-center items-center gap-3">
        <Link
          to="/"
          className="cursor-pointer hover:font-bold text-gray-900 dark:text-gray-100"
        >
          Home
        </Link>
        <Link
          to="favorites"
          className="cursor-pointer hover:font-bold text-gray-900 dark:text-gray-100"
        >
          Favorites
        </Link>
      </ul>
    </div>
  );
}
