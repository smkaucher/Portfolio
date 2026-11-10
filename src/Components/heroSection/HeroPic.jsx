import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import HeroCodeBg from "./HeroCodeBg";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="relative shrink-0 h-[420px] w-[320px] md:h-[520px] md:w-[440px]"
    >
      <HeroCodeBg>
        <div className="relative h-full">
          <img
            src="/images/kaucher.png"
            alt="SM Kaucher, Software Engineer"
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_0_25px_rgba(21,209,233,0.45)]"
          />
          {/* light sweep, clipped to the cut-out via mask */}
          <div
            className="absolute inset-0 pointer-events-none mix-blend-overlay"
            style={{
              WebkitMaskImage: "url(/images/kaucher.png)",
              maskImage: "url(/images/kaucher.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center bottom",
              maskPosition: "center bottom",
            }}
          >
            <motion.div
              className="h-full w-1/3"
              style={{ background: "linear-gradient(to right, transparent, #ffffff, transparent)" }}
              animate={{ x: ["-120%", "420%"] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            />
          </div>
        </div>
      </HeroCodeBg>

      {/* floating badge */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-4 -left-2 md:-left-6 z-30 flex items-center gap-2 glass-strong rounded-full px-4 py-2 text-sm text-white"
      >
        <span className="h-2 w-2 rounded-full bg-cyan animate-pulse"></span>
        Software Engineer
      </motion.div>
    </motion.div>
  );
};

export default HeroPic;
