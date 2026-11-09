import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import AboutTimeline from "./AboutTimeline";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div id="about" className="px-4 max-w-[1200px] mx-auto mt-[100px]">
      <div className="flex md:flex-row sm:flex-col gap-12 justify-between items-center">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <AboutMeText />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="shrink-0"
        >
          <AboutMeImage />
        </motion.div>
      </div>

      <div className="mt-16 max-w-[820px] mx-auto">
        <h3 className="mb-8 text-center text-2xl text-orange">Education &amp; how I got here</h3>
        <AboutTimeline />
      </div>
    </div>
  );
};

export default AboutMeMain;
