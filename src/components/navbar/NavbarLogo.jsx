const NavbarLogo = () => {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="font-mono text-lg sm:text-xl font-semibold tracking-tight select-none"
    >
      <span className="text-darkCyan">&lt;</span>
      <span className="text-lightCyan">Kaucher</span>
      <span className="text-cyan"> /</span>
      <span className="text-darkCyan">&gt;</span>
    </a>
  );
};

export default NavbarLogo;
