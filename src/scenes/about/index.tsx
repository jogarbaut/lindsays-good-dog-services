import HeaderText from "@/shared/HeaderText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import AboutImage from "@/assets/Shop2.jpeg";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <section id="about" className="mx-auto w-5/6 py-48 max-w-7xl">
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
          <p className="text-md my-5 w-full text-center">
            Lindsay's Good Dog Services is located near Downtown Pullman. Your furry friend is in the good hands with Lindsay and her staff who have been in the business for many years.
          </p>
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-3/5 flex-1 overflow-hidden rounded-lg">
              <img
                src="https://res.cloudinary.com/dgulbxrz1/image/upload/v1678399575/lindsays-good-dog-services/LGDS-Facility-Front_lltpzy.jpg"
                alt="Lindsay's Good Dog Services"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mx-auto flex-1 flex-col items-center justify-center text-center text-sm text-primary-300 md:text-base flex gap-2">
              <div className="font-bold">
                Business Hours: 9am-5pm Monday-Friday
              </div>
              <div className="font-bold">
                Address: 325 S Grand Ave, Pullman, WA 99163
              </div>
              <div className="font-bold">Phone: (509) 715-1009</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
