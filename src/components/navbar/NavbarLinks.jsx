import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";

export const links = [
  { link: "About", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = ({ mobile = false }) => {
  const dispatch = useDispatch();
  return (
    <ul
      className={
        mobile
          ? "flex flex-col gap-1 w-full"
          : "flex items-center gap-0.5 text-sm font-medium"
      }
    >
      {links.map((item) => (
        <li key={item.section}>
          <Link
            spy
            smooth
            duration={500}
            offset={-80}
            to={item.section}
            activeClass="!text-cyan !bg-cyan/10"
            onClick={() => dispatch(closeMenu())}
            className={`cursor-pointer block rounded-full px-3.5 py-1.5 text-white/80 hover:text-cyan hover:bg-white/5 transition-all duration-300 ${
              mobile ? "text-base font-medium" : ""
            }`}
          >
            {item.link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
