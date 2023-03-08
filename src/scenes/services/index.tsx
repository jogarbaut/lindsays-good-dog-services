import HeaderText from "@/shared/HeaderText";
import { ServiceType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Service from "./service";

const services: Array<ServiceType> = [
  {
    id: 1,
    title: "GROOMING",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quia!",
  },
  {
    id: 2,
    title: "PUPPY CLASSES",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quia!",
  },
  {
    id: 3,
    title: "DOG TRAINING",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, quia!",
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
    <section id="services" className="mx-auto w-5/6 py-24 md:py-48">
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
            <div className="md:before:absolute md:before:-top-[80%] md:before:left-[100%] md:before:z-[-1] md:before:rotate-3 md:before:opacity-60 md:before:content-pawsSecondary">
              <HeaderText>Services</HeaderText>
              <p className="text-md my-5 w-full text-center">
                We offer a number of professional and caring services for our
                furry friends. Please contact us to schedule your next
                appointment.
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
              title={service.title}
              description={service.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
