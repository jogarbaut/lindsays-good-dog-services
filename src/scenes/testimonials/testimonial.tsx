import { motion } from "framer-motion";

type Props = {
  review: string;
  author: string;
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Testimonial = ({ review, author }: Props) => {
  return (
    <motion.div
      className="mt-5 px-8 pt-16 pb-8 text-center"
      variants={childVariant}
    >
      <div className="relative">
        <div className=" mb-10 before:absolute before:-top-10 before:-left-2.5 before:z-[5] before:rounded-md before:bg-secondary-300 before:p-1 before:content-quoteLeft after:absolute after:-bottom-10 after:-right-2.5 after:z-[5] after:rounded-md after:bg-secondary-300 after:p-1 after:content-quoteRight">
          <p>{review}</p>
        </div>
      </div>
      <h4 className="font-bold">- {author}</h4>
    </motion.div>
  );
};

export default Testimonial;
