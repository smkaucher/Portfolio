import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Software Engineer",
    company: "Reganto IT Solution",
    date: "Sep 2026 - Present",
    responsibilities: [
      "Building the vendor dashboard with React and TypeScript.",
      "Developing the public storefront with Next.js.",
      "Working on e-commerce features for multi-vendor stores.",
    ],
  },
  {
    job: "Web Developer (Laravel)",
    company: "Creative Software",
    date: "2025 - Aug 2026 (1.5 Years)",
    responsibilities: [
      "Analyzed client needs: delivered projects on time.",
      "Built and maintained RESTful APIs, implemented MVC architecture for scalability.",
      "Integrated payment gateways and APIs for seamless user experience.",
    ],
  },
];

const ExperienceTopRight = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      {experiences.map((experience) => (
        <SingleExperience key={experience.company} experience={experience} />
      ))}
    </div>
  );
};

export default ExperienceTopRight;
