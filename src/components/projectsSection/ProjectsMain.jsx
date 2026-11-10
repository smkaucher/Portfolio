import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import FeaturedProject from "./FeaturedProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const featured = {
  name: "Regantify",
  tagline: "Multi-vendor e-commerce SaaS for Bangladeshi sellers",
  description:
    "Every seller gets a hosted storefront plus a dashboard to run it: products, orders, courier booking, payments, POS, lead management and AI tools, all in one place.",
  year: "2026",
  status: "Live Product",
  image: "/images/regantify.png",
  link: "https://www.regantify.com/",
  tags: ["Next.js", "React", "NestJS", "PostgreSQL", "Tailwind CSS"],
  highlights: [
    "Hosted storefronts with multiple themes",
    "Orders, courier booking and online payments",
    "POS and lead management built in",
  ],
};

const projects = [
  {
    name: "LuxoBD",
    description: "No.1 wallet brand in Bangladesh. Live e-commerce store.",
    year: "Sept 2025",
    status: "Live",
    image: "/images/website-img-1.jpg",
    link: "https://www.luxobd.com",
    tags: ["Web", "E-commerce"],
  },
  {
    name: "Style Loop",
    description: "Full e-commerce app with a Laravel API and React front-end.",
    year: "Jan 2025",
    status: "Source",
    image: "/images/website-img-130.jpg",
    link: "https://github.com/smkaucher/Ecommerce-react-laravel-",
    tags: ["Laravel", "React"],
  },
  {
    name: "LogeAchi.com",
    description: "Full-stack Laravel e-commerce website.",
    year: "Dec 2024",
    status: "Source",
    image: "/images/website-img-10.png",
    link: "https://github.com/smkaucher/ecommerce-website-by-laravel",
    tags: ["Laravel", "PHP"],
  },
  {
    name: "SnapTok",
    description: "Social media website built with Laravel.",
    year: "In progress",
    status: "WIP",
    image: "/images/Alternative-Social-Media-Platform-Blog-Resized.webp",
    link: "https://github.com/smkaucher/Snaptok-social-media-laravel-",
    tags: ["Laravel", "Social"],
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>

      <div className="mt-12">
        <FeaturedProject project={featured} />
      </div>

      <div className="mt-16 mb-4 flex items-center gap-4">
        <h3 className="text-2xl text-orange whitespace-nowrap">More work</h3>
        <div className="h-px flex-1 bg-brown"></div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-1">
        {projects.map((project, index) => (
          <SingleProject key={project.name} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
