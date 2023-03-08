import HeaderText from "@/shared/HeaderText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto w-5/6 py-48">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.About)}>
        {/* Header */}
        <motion.div
          className="mx-auto md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>About</HeaderText>
        </motion.div>
        {/* Facility */}
        <motion.div
          className="mt-5 items-center justify-between gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="mx-auto text-center text-primary-300 text-sm md:text-base">
            <div className="font-bold">
              Business Hours: 9am-5pm Monday-Friday
            </div>
            <div className="font-bold">
              Address: 325 S Grand Ave, Pullman, WA 99163
            </div>
            <div className="font-bold">
              Phone: (509) 715-1009
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
