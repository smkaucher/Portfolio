import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import ThemeToggle from "./ThemeToggle";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-3 left-0 z-50 w-full px-3 pointer-events-none">
      <div
        className={`pointer-events-auto mx-auto max-w-[1000px] transition-all duration-500 ${
          menuOpen ? "rounded-3xl" : "rounded-full"
        } ${
          scrolled || menuOpen
            ? "glass-strong shadow-cyanShadow"
            : "border border-transparent bg-transparent"
        }`}
      >
        <div className="h-14 pl-5 pr-2.5 flex items-center justify-between gap-4">
          <NavbarLogo />

          <div className="hidden lg:block">
            <NavbarLinks />
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:block">
              <NavbarBtn />
            </div>
            <div className="lg:hidden">
              <NavbarToggler />
            </div>
          </div>
        </div>

        {/* mobile dropdown */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-5 pt-1 flex flex-col gap-3 items-start">
            <NavbarLinks mobile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMain;
