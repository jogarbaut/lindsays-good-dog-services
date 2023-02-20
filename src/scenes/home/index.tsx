import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HomePageLogo from "@/assets/HomePageLogo.jpeg";
import HomePageImage from "@/assets/HomePageImage.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="md:pg-6 gap-16 md:h-full md:pt-24">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <img
                alt="business logo"
                src={HomePageLogo}
                className="mx-auto max-h-[240px] object-scale-down"
              />
            </div>
            <p className="bold mt-8 text-lg">
              Dog grooming, puppy classes, and training services located in
              Pullman, Washington. The fur is flying and the tails are waging.
              Contact us today to get more information or book an appointment!
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              CONTACT US
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.Testimonials}`}
            >
              <p>Testimonials</p>
            </AnchorLink>
          </motion.div>
        </div>

        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <div className="md:before:absolute md:before:bottom-20 md:before:left-36 md:before:z-[-1] md:before:rotate-3 md:before:scale-50 md:before:opacity-30 md:before:content-pawsGray">
              <img
                alt="home-page-image"
                src={HomePageImage}
                className="max-h-[360px] object-scale-down md:max-h-[560px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
