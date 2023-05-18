import { SelectedPage, PhotoType } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import HeaderTextAlt from "@/shared/HeaderTextAlt";

const photos: Array<PhotoType> = [
  {
    id: 1,
    alt: "Dog 1 Before Grooming",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684365331/lindsays-good-dog-services/Grooming/grooming-before-1_sbecpz.png",
  },
  {
    id: 2,
    alt: "Dog 1 After Grooming Side",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684365328/lindsays-good-dog-services/Grooming/grooming-after-1_ei0dik.png",
  },
  {
    id: 3,
    alt: "Dog 1 After Grooming Front",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684365328/lindsays-good-dog-services/Grooming/grooming-after-2_qwbmmw.png",
  },
  {
    id: 4,
    alt: "Dog 2 Before Grooming",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684365331/lindsays-good-dog-services/Grooming/grooming-before-2_azli2o.png",
  },
  {
    id: 5,
    alt: "Dog 2 After Grooming Side",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684365332/lindsays-good-dog-services/Grooming/grooming-after-4_wwwvgz.png",
  },
  {
    id: 6,
    alt: "Dog 2 After Grooming Front",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684365332/lindsays-good-dog-services/Grooming/grooming-after-3_b41fx7.png",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Grooming = ({ setSelectedPage }: Props) => {
  return (
    <section id="grooming" className="mx-auto w-5/6 max-w-7xl py-16">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Grooming)}
      >
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
          <HeaderText>Grooming</HeaderText>
          <div className="text-md my-5 w-full text-center">
            <p>
              A well-groomed dog is a happy dog and a happy dog is a healthy
              dog!
            </p>
            <p className="my-5">
              Please contact us to schedule your next appointment.
            </p>
            <div className="border border-slate-300 rounded drop-shadow-sm py-4 px-8 text-primary-500 my-8">
                <HeaderTextAlt>Pricing</HeaderTextAlt>
                Pricing is dependent on breed, coat type, and size
              <span className="italic"> (senior dog fee may apply)</span>
              </div>
            <p>
              
            </p>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          {photos.map((photo: PhotoType) => (
            <motion.div variants={childVariant} key={photo.id}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Grooming;
