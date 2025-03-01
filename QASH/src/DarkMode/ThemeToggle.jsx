import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-5 left-5 p-3 bg-white dark:bg-violet-800 border border-gray-800 dark:border-white rounded-full shadow-lg hover:scale-110 transition duration-200"
    >
      {theme === "dark" ? (
        <MdSunny className="text-violet-400 text-4xl" />
      ) : (
        <FaMoon className="text-gray-800 text-4xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
