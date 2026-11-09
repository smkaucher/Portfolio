import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiLaravel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { SiBootstrap, SiNextdotjs, SiFlutter } from "react-icons/si";


const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    skill: "Laravel",
    icon: SiLaravel,
    color: "#FF2D20",
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    skill: "Next.js",
    icon: SiNextdotjs,
    color: "rgb(var(--c-white))",
  },
  {
    skill: "Flutter",
    icon: SiFlutter,
    color: "#54C5F8",
  },
  {
    skill: "PHP",
    icon: SiPhp,
    color: "#777BB4",
  },
  {
    skill: "Bootstrap",
    icon: SiBootstrap,
    color: "#7952B3",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "#06B6D4",
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon style={{ color: item.color }} />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
