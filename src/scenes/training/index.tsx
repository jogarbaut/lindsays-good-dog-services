import { SelectedPage, PhotoType } from "@/shared/types";
import { motion } from "framer-motion";
import HeaderText from "@/shared/HeaderText";
import Slider from "@/shared/Slider";

const photos: Array<PhotoType> = [
  {
    id: 1,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-1_qfjs4p.png",
  },
  {
    id: 2,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-2_bjrkow.png",
  },
  {
    id: 3,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-3_n3poos.png",
  },
  {
    id: 4,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359586/lindsays-good-dog-services/Training/dog-training-4_fweyst.png",
  },
  {
    id: 5,
    alt: "Dog Training",
    src: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1684359585/lindsays-good-dog-services/Training/dog-training-5_k3nhmf.png",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Training = ({ setSelectedPage }: Props) => {
  return (
    <section id="training" className="mx-auto w-5/6 max-w-7xl py-24 md:py-48">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Training)}
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
          <HeaderText>Classes & Training</HeaderText>
          <p className="text-md my-5 w-full text-center">We offer training</p>
        </motion.div>
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
            <div className="md:w-3/5 flex-1 overflow-hidden rounded-lg">
              {/* Slider */}
              <Slider items={photos} />
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

export default Training;
