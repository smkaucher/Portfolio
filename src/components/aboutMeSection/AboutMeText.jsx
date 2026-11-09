import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <div className="flex flex-col gap-4">
        <p>
          I am a passionate software engineer with strong skills in backend development using Laravel and in-depth knowledge of PHP. I also have experience working with frontend technologies, including React and Next.js, along with a solid understanding of HTML, CSS, and JavaScript, which allows me to build clean, responsive, and interactive user interfaces.
        </p>
        <p>
          I also build cross-platform mobile apps with Flutter. In addition to Laravel and PHP, I have basic knowledge of MongoDB and Express.js, and I am familiar with the MERN stack, which helps me understand full-stack application development.
        </p>
        <p>
          I also have a good foundation in Object-Oriented Programming (OOP) and have studied Data Structures using C and C++, which strengthens my problem-solving and programming logic.
        </p>
        <p>
          I enjoy learning new technologies, solving real-world problems through code, and constantly improving my skills to keep up with the latest trends in web development.
        </p>
      </div>
      <Link
        spy={true}
        smooth={true}
        duration={500}
        offset={-120}
        to="projects"
        className="glass mt-10 cursor-pointer rounded-full px-6 py-2.5 text-lg text-cyan transition-all duration-500 hover:!bg-orange hover:text-[#ffffff] md:self-start sm:self-center"
      >
        My Projects
      </Link>
    </div>
  );
};

export default AboutMeText;
