import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs"; // Importing React Icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

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
      className="fixed bottom-5 left-5 p-3 bg-white dark:bg-gray-900 border border-gray-800 dark:border-white rounded-full shadow-lg hover:scale-110 transition duration-200"
    >
      {theme === "dark" ? (
        <BsSun className="text-yellow-400 text-2xl" />
      ) : (
        <BsMoon className="text-gray-800 text-2xl" />
      )}
    </button>
  );
};

export default ThemeToggle;
