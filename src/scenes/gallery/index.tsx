import HeaderText from "@/shared/HeaderText";
import { GalleryItemType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import GalleryItem from "./GalleryItem";

const galleryItems: Array<GalleryItemType> = [
  {
    id: 1,
    imageURL:
      "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676840409/lindsays-good-dog-services/HomePageImage_dqervg.jpg",
    description: "placeholder description",
  },
  {
    id: 2,
    imageURL:
      "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676849528/lindsays-good-dog-services/ServicesImage_eop6ex.jpg",
    description: "placeholder description",
  },
  {
    id: 3,
    imageURL:
      "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676853371/lindsays-good-dog-services/DogTrainingServiceImage_z4ioqu.jpg",
    description: "placeholder description",
  },
  {
    id: 4,
    imageURL:
      "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676840409/lindsays-good-dog-services/HomePageImage_dqervg.jpg",
    description: "placeholder description",
  },
  {
    id: 5,
    imageURL:
      "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676849528/lindsays-good-dog-services/ServicesImage_eop6ex.jpg",
    description: "placeholder description",
  },
  {
    id: 6,
    imageURL:
      "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676853371/lindsays-good-dog-services/DogTrainingServiceImage_z4ioqu.jpg",
    description: "placeholder description",
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

const Gallery = ({ setSelectedPage }: Props) => {
  return (
    <section id="gallery" className="mx-auto w-5/6 max-w-5xl py-24 md:py-48">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Services)}
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
          <div className="relative">
            <div className="md:before:absolute md:before:-top-[80%] md:before:left-[100%] md:before:z-[-1] md:before:rotate-3 md:before:scale-50 md:before:opacity-60 md:before:content-pawsGray">
              <HeaderText>Gallery</HeaderText>
              <p className="text-md my-5 w-full text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </motion.div>
        {/* Services */}
        <motion.div
          className="lg:grid-cols-4 grid grid-cols-2 gap-4 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {galleryItems.map((item: GalleryItemType) => (
            <GalleryItem
              key={item.id}
              imageURL={item.imageURL}
              description={item.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Gallery;
