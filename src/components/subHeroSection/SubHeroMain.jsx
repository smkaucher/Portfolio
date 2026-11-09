const strengths = [
  "Fast Learner",
  "Team Work",
  "Details Master",
  "Team Lead",
  "Requirement Analyst",
  "Server-Side Expert",
  "Problem Solver",
  "API Design",
  "Database Design",
  "Clean Code",
  "Quick Debugger",
  "Web & Mobile Delivery",
];

const Row = ({ hidden = false }) => (
  <ul
    aria-hidden={hidden}
    className="flex shrink-0 items-center gap-10 pr-10"
  >
    {strengths.map((item) => (
      <li
        key={item}
        className="flex items-center gap-10 whitespace-nowrap uppercase tracking-widest text-sm md:text-lg text-lightGrey"
      >
        {item}
        <span className="h-2 w-2 rotate-45 bg-cyan"></span>
      </li>
    ))}
  </ul>
);

const SubHeroMain = () => {
  return (
    <div className="glass group w-full overflow-hidden !border-x-0 py-4 md:py-5">
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <Row />
        <Row hidden />
      </div>
    </div>
  );
};

export default SubHeroMain;
