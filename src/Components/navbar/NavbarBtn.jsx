import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-80}
      to="contact"
      className="cursor-pointer inline-flex items-center gap-1 px-5 py-2 rounded-full text-sm font-semibold glass text-cyan transition-all duration-300 hover:!bg-orange hover:!text-[#ffffff] hover:shadow-cyanShadow"
    >
      Hire Me
      <LuArrowDownRight className="text-lg" />
    </Link>
  );
};

export default NavbarBtn;
