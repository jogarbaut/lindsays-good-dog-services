import Dog from "@/assets/dog-solid.png";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
};

const Service = ({ title, description }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-lg bg-white py-8 px-4 text-center shadow-lg"
      variants={childVariant}
    >
      <div className="flex h-full w-full items-center justify-between gap-4 p-4">
        <div className="w-1/3 sm:w-full">
          <img
            src={Dog}
            alt={title}
            className="h-12 w-12 mx-auto"
          />
        </div>

        <div className="w-2/3">
          <h4 className="w-full whitespace-nowrap py-1 text-center text-lg font-bold text-primary-500">
            &bull; {title} &bull;
          </h4>
          {/* <p className="mt-3 text-left">{description}</p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
