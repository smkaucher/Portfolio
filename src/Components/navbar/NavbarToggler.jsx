import { useDispatch, useSelector } from "react-redux";
import { LuMenu, LuX } from "react-icons/lu";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.menu.menuOpen);
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={open}
      className="w-10 h-10 grid place-items-center text-2xl rounded-full border border-white/15 text-white/90 hover:text-cyan hover:border-cyan/60 transition-all duration-300"
      onClick={() => dispatch(toggleMenu())}
    >
      {open ? <LuX /> : <LuMenu />}
    </button>
  );
};

export default NavbarToggler;
