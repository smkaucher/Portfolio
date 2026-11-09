import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ project, index = 0 }) => {
  const { name, description, year, status, image, link, tags } = project;

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      variants={fadeIn("up", `0.${index}`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="group flex flex-col overflow-hidden glass rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyanShadow"
    >
      <div className="relative h-[170px] overflow-hidden">
        <img
          src={image}
          alt={`${name} preview`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute top-3 left-3 glass-strong rounded-full px-3 py-1 text-xs text-cyan">
          {status}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-2xl text-orange">{name}</h3>
          <BsArrowUpRight className="mt-1 shrink-0 text-cyan transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        <p className="text-sm text-lightGrey font-special">{year}</p>
        <p className="text-sm flex-1">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="glass rounded-full px-2.5 py-0.5 text-xs text-lightCyan"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default SingleProject;
