import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import { SelectedPage, PhotoType } from "@/shared/types";
import HomePageLogo from "@/assets/HomePageLogo.jpeg";
import HomePageImage from "@/assets/HomePageImage.png";
import Slider from "@/shared/Slider";
import HeaderText from "@/shared/HeaderText";
import HeaderTextAlt from "@/shared/HeaderTextAlt";
HeaderText

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const photos: Array<PhotoType> = [
  {
    id: 1,
    alt: "Business Sign",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1678399575/lindsays-good-dog-services/LGDS-Facility-Front_lltpzy.jpg",
  },
  {
    id: 2,
    alt: "Puppy Social Class",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684390163/lindsays-good-dog-services/Featured/featured-2_bke971.png",
  },
  {
    id: 3,
    alt: "Grooming",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684390161/lindsays-good-dog-services/Featured/featured-3_uxedja.png",
  },
  {
    id: 4,
    alt: "Puppy Social Class",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684390161/lindsays-good-dog-services/Featured/featured-4_otnrea.png",
  },
  {
    id: 5,
    alt: "Lindsay Presenting",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684390159/lindsays-good-dog-services/Featured/featured-5_sj2gpy.png",
  },
];

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section id="home" className="mx-auto w-full max-w-7xl md:h-full md:pt-24">
      <motion.div
        className="mx-auto w-5/6 flex flex-col items-center justify-center md:flex-row gap-16 md:gap-8"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-1/2">
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
                className="mx-auto max-h-[120px] object-scale-down sm:max-h-[240px]"
              />
            </div>
            <p className="bold mt-8 text-center text-sm md:text-lg">
              Grooming, puppy classes, and dog training services located in
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
              onClick={() => setSelectedPage(SelectedPage.Testimonials)}
              href={`#${SelectedPage.Testimonials}`}
            >
              <p>TESTIMONIALS</p>
            </AnchorLink>
          </motion.div>
        </div>

        <motion.div
          className="flex md:basis-1/2 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="">
          <HeaderTextAlt>Featured Photos</HeaderTextAlt>
          <Slider items={photos} />
          </div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
