import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2025
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1.5+" text="Years professional Experience" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2" text="Companies worked with" />
      </div>
      <p className="text-center">
        1.5+ years of professional experience building dynamic and user-friendly full stack web applications, now working as a Software Engineer at Regantify IT Solution.
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
