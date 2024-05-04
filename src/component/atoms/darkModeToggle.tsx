import { useState, useEffect, FC } from "react";
import { toggleDarkMode } from "../../type/component/atoms/darkModeToggle";

const DarkModeToggle: FC<toggleDarkMode> = ({ size }) => {
  const [dark, setDark] = useState(false);
  const setTheme = () => {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${size}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={dark}
        onClick={setTheme}
      />
      <div
        className={`relative w-14 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:-top-1 after:start-0 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-8 after:w-8 after:transition-all dark:border-gray-600 peer-checked:bg-neutral-600`}
      >
        <svg
          className="dark:hidden absolute right-1 top-1"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-slate-600"
            d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
          />
          <path
            className="fill-slate-600"
            d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
          />
        </svg>
        <svg
          className="hidden dark:block absolute left-1 top-1"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-slate-400"
            d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
          />
          <path
            className="fill-slate-500"
            d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
          />
        </svg>
      </div>
    </label>
  );
};

export default DarkModeToggle;
