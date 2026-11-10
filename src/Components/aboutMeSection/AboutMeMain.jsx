import AboutMeText from "./AboutMeText";
import AboutTimeline from "./AboutTimeline";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div id="about" className="px-4 max-w-[1200px] mx-auto mt-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <AboutMeText />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
        >
          <h3 className="mb-8 text-center md:text-left text-2xl text-orange">Education &amp; how I got here</h3>
          <AboutTimeline />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMain;
