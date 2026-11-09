import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
     <p>
       I am a passionate software engineer with strong skills in backend development using Laravel and in-depth knowledge of PHP. I also have experience working with frontend technologies, including React and Next.js, along with a solid understanding of HTML, CSS, and JavaScript, which allows me to build clean, responsive, and interactive user interfaces.

I also build cross-platform mobile apps with Flutter. In addition to Laravel and PHP, I have basic knowledge of MongoDB and Express.js, and I am familiar with the MERN stack, which helps me understand full-stack application development.

I also have a good foundation in Object-Oriented Programming (OOP) and have studied Data Structures using C and C++, which strengthens my problem-solving and programming logic.

I enjoy learning new technologies, solving real-world problems through code, and constantly improving my skills to keep up with the latest trends in web development.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
