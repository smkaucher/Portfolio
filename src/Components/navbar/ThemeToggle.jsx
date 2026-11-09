import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LuMoon, LuSun } from "react-icons/lu";
import { toggleTheme } from "../../state/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem("theme", mode);
    } catch {
      /* storage unavailable */
    }
  }, [mode]);

  const isDark = mode === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
      title={isDark ? "Day mode" : "Night mode"}
      onClick={() => dispatch(toggleTheme())}
      className="relative w-9 h-9 grid place-items-center glass rounded-full text-white/90 hover:text-cyan transition-all duration-300 overflow-hidden"
    >
      <LuSun
        className={`absolute text-xl transition-all duration-500 ${
          isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <LuMoon
        className={`absolute text-xl transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
