import { useRef } from "react";
import { motion, useScroll, useSpring, useInView, useReducedMotion } from "framer-motion";

const steps = [
  {
    label: "2019",
    title: "SSC",
    meta: "Secondary School Certificate",
    text: "Completed secondary school.",
  },
  {
    label: "2021",
    title: "HSC, Science",
    meta: "Higher Secondary Certificate",
    text: "Passed HSC from the Science group.",
  },
  {
    label: "Self-study",
    title: "Learning software on my own",
    meta: "Online and Google courses",
    text: "I took online and Google courses and studied software in depth, one topic at a time, then built projects to make it stick.",
    tags: ["HTML & CSS", "JavaScript", "PHP & Laravel", "React", "OOP", "Data structures (C, C++)", "MongoDB & Express"],
    featured: true,
  },
  {
    label: "Internship",
    title: "Software intern, Creative Software",
    meta: "6 months",
    text: "Six months inside a professional team, turning self-study into real work.",
  },
  {
    label: "Sep 2026",
    title: "Graduated in CSE",
    meta: "Computer Science and Engineering",
    text: "Completed my degree in September 2026.",
  },
  {
    label: "Now",
    title: "Software Engineer, Regantify IT Solution",
    meta: "Since Sep 2026",
    text: "Building a multi-vendor e-commerce platform with React, Next.js and NestJS.",
    now: true,
  },
];

const Step = ({ step }) => {
  const ref = useRef(null);
  const lit = useInView(ref, { once: true, margin: "-45% 0px -45% 0px" });

  return (
    <li
      ref={ref}
      className="grid grid-cols-[28px_1fr] md:grid-cols-[140px_28px_1fr] gap-x-4 pb-4 last:pb-0"
    >
      <p
        className={`col-start-2 row-start-1 md:col-start-1 md:text-right text-xl md:text-2xl font-bold leading-8 transition-colors duration-700 ${
          lit ? "text-cyan" : "text-lightBrown"
        }`}
      >
        {step.label}
      </p>

      <span
        className={`col-start-1 row-start-1 md:col-start-2 mt-[9px] h-3.5 w-3.5 justify-self-center rounded-full border-2 transition-all duration-700 ${
          lit ? "border-orange bg-orange shadow-cyanShadow" : "border-lightBrown bg-darkBrown"
        }`}
      ></span>

      <div
        className={`col-start-2 row-start-2 md:col-start-3 md:row-start-1 mt-2 md:mt-0 rounded-xl px-4 py-3 transition-opacity duration-700 ${
          step.featured || step.now ? "glass-strong" : "glass"
        } ${lit ? "opacity-100" : "opacity-60"}`}
      >
        <h4 className="text-base md:text-lg font-bold leading-snug text-white">{step.title}</h4>
        <p className="flex items-center gap-2 text-xs text-cyan">
          {step.now && <span className="h-2 w-2 rounded-full bg-cyan animate-pulse"></span>}
          {step.meta}
        </p>
        <p className="mt-1.5 max-w-[60ch] text-sm text-lightGrey">{step.text}</p>
        {step.tags && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {step.tags.map((t) => (
              <li key={t} className="glass rounded-full px-2.5 py-0.5 text-xs text-lightCyan">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};

const AboutTimeline = () => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

  return (
    <div ref={ref} className="relative">
      <span className="absolute top-4 bottom-4 left-[13px] md:left-[169px] w-0.5 rounded-full bg-brown"></span>
      <motion.span
        style={{ scaleY: reduced ? 1 : scaleY }}
        className="absolute top-4 bottom-4 left-[13px] md:left-[169px] w-0.5 origin-top rounded-full bg-gradient-to-b from-orange to-cyan"
      ></motion.span>
      <ol className="relative">
        {steps.map((s) => (
          <Step key={s.label} step={s} />
        ))}
      </ol>
    </div>
  );
};

export default AboutTimeline;
