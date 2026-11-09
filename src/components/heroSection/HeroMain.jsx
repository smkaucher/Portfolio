import HeroText from "./HeroText";
import HeroPic from "./HeroPic";
import SubHeroMain from "../subHeroSection/SubHeroMain";

const HeroMain = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-24 pb-28"
    >
      {/* soft grid + glow behind the hero */}
      <div
        className="hero-deco pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--c-orange) / 0.18) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--c-orange) / 0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, #000 30%, transparent 75%)",
        }}
      ></div>
      <div className="hero-deco pointer-events-none absolute -top-32 -left-32 -z-10 h-[420px] w-[420px] rounded-full bg-orange/25 blur-[120px]"></div>
      <div className="hero-deco pointer-events-none absolute -bottom-32 -right-32 -z-10 h-[420px] w-[420px] rounded-full bg-darkOrange/30 blur-[120px]"></div>

      <div className="flex md:flex-row sm:flex-col-reverse max-w-[1200px] mx-auto w-full justify-between items-center relative px-4 gap-12">
        <HeroText />
        <HeroPic />
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <SubHeroMain />
      </div>
    </section>
  );
};

export default HeroMain;
