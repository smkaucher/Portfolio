import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../../framerMotion/variants";

const stats = [
  { value: "Laravel", label: "Back-end" },
  { value: "React / Next.js", label: "Front-end" },
  { value: "Flutter", label: "Mobile" },
];

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center md:items-start sm:items-center">
      <motion.span
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="glass inline-block rounded-full px-4 py-1 text-sm uppercase tracking-widest text-cyan"
      >
        Software Engineer
      </motion.span>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold uppercase leading-tight text-white"
      >
        Hi, I&apos;m <br className="sm:hidden md:block" />
        <span className="text-orange">Kaucher Ahmed</span>
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg text-lightGrey max-w-[520px]"
      >
        I build fast, clean web apps and mobile apps — full-stack with Laravel,
        front-ends with React.js, Next.js and Tailwind CSS, and cross-platform
        apps with Flutter.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 mt-2 md:justify-start sm:justify-center"
      >
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-130}
          className="cursor-pointer rounded-full bg-orange px-7 py-3 font-semibold text-[#ffffff] shadow-cyanShadow transition-all duration-300 hover:bg-lightOrange hover:-translate-y-0.5"
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-130}
          className="glass cursor-pointer rounded-full px-7 py-3 font-semibold text-cyan transition-all duration-300 hover:bg-cyan hover:text-[#ffffff] hover:-translate-y-0.5"
        >
          Contact Me
        </Link>
      </motion.div>

      <motion.div
        variants={fadeIn("up", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-6 flex flex-wrap gap-3 md:justify-start sm:justify-center"
      >
        {stats.map((s) => (
          <div key={s.value} className="glass rounded-2xl px-5 py-3 text-left">
            <p className="text-lg font-bold text-white">{s.value}</p>
            <p className="text-sm text-lightGrey">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
