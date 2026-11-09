import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const FeaturedProject = ({ project }) => {
  const { name, tagline, description, year, status, image, link, tags, highlights } =
    project;

  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
      className="group relative overflow-hidden glass-strong rounded-2xl"
    >
      <div className="hero-deco absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan/10 blur-3xl pointer-events-none"></div>

      <div className="relative grid lg:grid-cols-2 sm:grid-cols-1 gap-8 p-6 md:p-10 items-center">
        <div className="flex flex-col gap-5 md:text-left sm:text-center md:items-start sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-orange px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#ffffff]">
              Featured
            </span>
            <span className="flex items-center gap-2 text-sm text-lightGrey">
              <span className="h-2 w-2 rounded-full bg-cyan animate-pulse"></span>
              {status} &middot; {year}
            </span>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white">{name}</h3>
            <p className="mt-2 text-lg text-cyan">{tagline}</p>
          </div>

          <p className="text-lightGrey max-w-[520px]">{description}</p>

          <ul className="flex flex-col gap-2 text-left">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2 items-start">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange"></span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 md:justify-start sm:justify-center">
            {tags.map((t) => (
              <span
                key={t}
                className="glass rounded-full px-3 py-1 text-sm text-lightCyan"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3 font-semibold text-[#ffffff] shadow-cyanShadow transition-all duration-300 hover:bg-lightOrange hover:-translate-y-0.5"
          >
            Visit regantify.com <BsArrowUpRight />
          </a>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden glass rounded-xl p-0"
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-2">
            <span className="h-3 w-3 rounded-full bg-orange/80"></span>
            <span className="h-3 w-3 rounded-full bg-lightOrange/80"></span>
            <span className="h-3 w-3 rounded-full bg-cyan/80"></span>
            <span className="ml-3 truncate text-xs text-lightGrey">regantify.com</span>
          </div>
          <img
            src={image}
            alt="Regantify website"
            className="w-full transition-transform duration-700 group-hover:scale-105"
          />
        </a>
      </div>
    </motion.div>
  );
};

export default FeaturedProject;
