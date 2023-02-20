import HeaderText from "@/shared/HeaderText";
import { ServiceType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Service from "./service";

const services: Array<ServiceType> = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676840409/lindsays-good-dog-services/HomePageImage_dqervg.jpg",
    title: "DOG GROOMING",
    description: "",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676849528/lindsays-good-dog-services/ServicesImage_eop6ex.jpg",
    title: "PUPPY CLASSES",
    description: "",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dgulbxrz1/image/upload/v1676853371/lindsays-good-dog-services/DogTrainingServiceImage_z4ioqu.jpg",
    title: "DOG TRAINING",
    description: "",
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

const Services = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourservices" className="mx-auto w-5/6 py-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurServices)}
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
            <div className="top- md:before:absolute md:before:-top-[80%] md:before:left-[100%] md:before:z-[-1] md:before:rotate-3 md:before:opacity-60 md:before:content-pawsSecondary">
              <HeaderText>Our Services</HeaderText>
              <p className="text-md my-5 w-full text-center">
                We offer a number of professional and caring services for our
                furry friends. Please contact us to schedule your next
                appointment.
              </p>
              <p className="text-md my-5 w-full text-center">
                Business Hours | Monday-Friday 9am-5pm
              </p>

            </div>
          </div>
        </motion.div>
        {/* Services */}
        <motion.div
          className="mx-auto mt-5 items-center justify-center gap-10 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {services.map((service: ServiceType) => (
            <Service
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
